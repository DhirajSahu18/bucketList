import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");

interface EnquiryData {
  id: string;
  name: string;
  phone: string;
  email: string;
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
    await fs.mkdir(DATA_DIR, { recursive: true });
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
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2));
}

// POST - Create a new enquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, phone, email, destination, numberOfTravellers } = body;
    if (!name || !phone || !email || !destination || !numberOfTravellers) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, email, destination, numberOfTravellers" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const enquiry: EnquiryData = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      destination: destination.trim(),
      preferredDates: (body.preferredDates || "").trim(),
      numberOfTravellers: parseInt(numberOfTravellers, 10),
      approximateBudget: (body.approximateBudget || "").trim(),
      tripType: (body.tripType || "").trim(),
      additionalNotes: (body.additionalNotes || "").trim(),
      createdAt: new Date().toISOString(),
      status: "new",
      source: "website-private-trip-form",
    };

    // Save to file
    const enquiries = await readEnquiries();
    enquiries.unshift(enquiry); // newest first
    await writeEnquiries(enquiries);

    // Optional: Send notification email (requires SMTP setup)
    // await sendNotificationEmail(enquiry);

    // Optional: Send WhatsApp notification via API
    // await sendWhatsAppNotification(enquiry);

    console.log(`[NEW ENQUIRY] ${enquiry.id} from ${enquiry.name} — ${enquiry.destination}`);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received. We'll get back to you shortly.",
        id: enquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or WhatsApp us." },
      { status: 500 }
    );
  }
}

// GET - Retrieve all enquiries (for admin use)
export async function GET(request: NextRequest) {
  // Simple auth check via query param or header (replace with proper auth in production)
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
