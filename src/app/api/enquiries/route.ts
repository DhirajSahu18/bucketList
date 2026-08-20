import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");

interface EnquiryData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  destination: string;
  preferredDates: string;
  numberOfTravellers: number;
  approximateBudget: string;
  tripType: string;
  additionalNotes: string;
  createdAt: string;
  status: "new" | "contacted" | "planning" | "confirmed" | "closed";
  source: string;
}

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
    } catch {
      // Ignore directory creation errors on read-only serverless runtimes
    }
  }
}

async function readEnquiries(): Promise<EnquiryData[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(ENQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeEnquiries(enquiries: EnquiryData[]) {
  await ensureDataDir();
  try {
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2));
  } catch (err) {
    // Graceful fallback for read-only serverless file systems (e.g. Vercel)
    console.warn("[ENQUIRIES API] Local filesystem is read-only. Lead logged to stdout:", err);
  }
}

// POST - Create a new enquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot spam protection
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
    }

    // Validate required fields (email is optional; name, phone, destination, numberOfTravellers required)
    const { name, phone, destination, numberOfTravellers } = body;
    const email = body.email ? body.email.trim().toLowerCase() : "";

    if (!name || !phone || !destination || !numberOfTravellers) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, destination, numberOfTravellers" },
        { status: 400 }
      );
    }

    // Optional email format validation if provided
    if (email && email.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }
    }

    const enquiry: EnquiryData = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email,
      destination: String(destination).trim(),
      preferredDates: String(body.preferredDates || "").trim(),
      numberOfTravellers: parseInt(String(numberOfTravellers), 10) || 1,
      approximateBudget: String(body.approximateBudget || "").trim(),
      tripType: String(body.tripType || "private").trim(),
      additionalNotes: String(body.additionalNotes || "").trim(),
      createdAt: new Date().toISOString(),
      status: "new",
      source: "website-private-trip-form",
    };

    // Save to local file system if writable
    const enquiries = await readEnquiries();
    enquiries.unshift(enquiry);
    await writeEnquiries(enquiries);

    console.log(`[NEW PRIVATE ENQUIRY] ${enquiry.id} from ${enquiry.name} (${enquiry.phone}) — ${enquiry.destination}`);

    return NextResponse.json(
      {
        success: true,
        message: "Consultation enquiry received. We will get back to you shortly.",
        id: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Something went wrong processing your request. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}

// GET - Retrieve all enquiries (for admin key validation)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("x-admin-key");
  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminKey || authHeader !== adminKey) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const enquiries = await readEnquiries();
    return NextResponse.json({
      total: enquiries.length,
      enquiries,
    });
  } catch (error) {
    console.error("Error reading enquiries:", error);
    return NextResponse.json(
      { error: "Failed to retrieve enquiries" },
      { status: 500 }
    );
  }
}
