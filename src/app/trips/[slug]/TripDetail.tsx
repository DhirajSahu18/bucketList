"use client";

import { useState } from "react";
import Link from "next/link";
import { Trip } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  formatDateRange,
  formatPrice,
  getWhatsAppLink,
  getWhatsAppTripMessage,
  cn,
} from "@/lib/utils";

interface TripDetailProps {
  trip: Trip;
}

export function TripDetail({ trip }: TripDetailProps) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const whatsappMessage = getWhatsAppTripMessage(
    trip.name,
    formatDateRange(trip.dates.start, trip.dates.end)
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${trip.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/40" />
        <div className="relative h-full flex items-end section-padding pb-10 md:pb-14">
          <div className="container-wide">
            <nav className="mb-4 text-sm text-white/70">
              <Link href="/trips" className="hover:text-white">
                Trips
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/destinations/${trip.destination.slug}`}
                className="hover:text-white"
              >
                {trip.destination.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{trip.name}</span>
            </nav>
            <h1 className="font-display text-display-lg text-white mb-2">
              {trip.name}
            </h1>
            <p className="text-white/80 text-lg">{trip.destination.name}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="section-padding py-10 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {trip.summary}
                </p>
              </div>

              {/* At a Glance */}
              <div>
                <h2 className="font-display text-display-sm text-brand-black mb-6">
                  At a Glance
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Duration", value: trip.duration },
                    { label: "Starting Point", value: trip.startingPoint },
                    { label: "Ending Point", value: trip.endingPoint },
                    {
                      label: "Group Size",
                      value: `Max ${trip.maxGroupSize} people`,
                    },
                    { label: "Difficulty", value: trip.difficulty },
                    {
                      label: "Accommodation",
                      value: trip.accommodationType,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-brand-offwhite p-4 rounded-sm"
                    >
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      <p className="font-medium text-brand-black text-sm">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-display text-display-sm text-brand-black mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-2">
                  {trip.itinerary.map((day, index) => (
                    <div
                      key={day.day}
                      className="border border-brand-gray rounded-sm overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenDay(openDay === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-brand-offwhite transition-colors"
                        aria-expanded={openDay === index}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-display text-xl text-brand-yellow bg-brand-black w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            {day.day}
                          </span>
                          <div>
                            <p className="font-semibold text-brand-black">
                              {day.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {day.location}
                            </p>
                          </div>
                        </div>
                        <svg
                          className={cn(
                            "w-5 h-5 text-gray-400 transition-transform shrink-0",
                            openDay === index && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDay === index && (
                        <div className="px-4 md:px-5 pb-5 border-t border-brand-gray/50">
                          <div className="pt-4 space-y-3">
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {day.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                              <div className="bg-brand-offwhite p-3 rounded-sm">
                                <p className="text-xs text-gray-500 mb-0.5">
                                  Stay
                                </p>
                                <p className="text-brand-black font-medium">
                                  {day.stay}
                                </p>
                              </div>
                              <div className="bg-brand-offwhite p-3 rounded-sm">
                                <p className="text-xs text-gray-500 mb-0.5">
                                  Meals
                                </p>
                                <p className="text-brand-black font-medium">
                                  {day.meals}
                                </p>
                              </div>
                              <div className="bg-brand-offwhite p-3 rounded-sm">
                                <p className="text-xs text-gray-500 mb-0.5">
                                  Activities
                                </p>
                                <p className="text-brand-black font-medium">
                                  {day.activities.join(", ")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Included / Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-xl text-brand-black mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {trip.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-green-600 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl text-brand-black mb-4">
                    What&apos;s Not Included
                  </h3>
                  <ul className="space-y-2">
                    {trip.excluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-red-500 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Who it's for */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-sm">
                  <h3 className="font-display text-xl text-brand-black mb-4">
                    Who This Trip is For
                  </h3>
                  <ul className="space-y-2">
                    {trip.whoItsFor.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-green-600 mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-sm">
                  <h3 className="font-display text-xl text-brand-black mb-4">
                    Who This Trip Isn&apos;t For
                  </h3>
                  <ul className="space-y-2">
                    {trip.whoItsNotFor.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-red-500 mt-1">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trip Leader */}
              <div className="bg-brand-offwhite p-6 md:p-8 rounded-sm">
                <h3 className="font-display text-xl text-brand-black mb-4">
                  Your Trip Leader
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                    <span className="font-display text-2xl text-brand-black">
                      {trip.founder.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-black text-lg">
                      {trip.founder.name}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      {trip.founder.role} &middot; {trip.founder.experience}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {trip.founder.shortBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              {trip.faqs.length > 0 && (
                <div>
                  <h2 className="font-display text-display-sm text-brand-black mb-6">
                    FAQs
                  </h2>
                  <div className="space-y-4">
                    {trip.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group border border-brand-gray rounded-sm"
                      >
                        <summary className="cursor-pointer p-4 font-medium text-brand-black text-sm list-none flex items-center justify-between">
                          {faq.question}
                          <svg
                            className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — Booking Card (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white border border-brand-gray rounded-sm p-6 space-y-5">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Trip Price
                  </p>
                  <p className="font-display text-4xl text-brand-black">
                    {formatPrice(trip.price)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per person</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dates</span>
                    <span className="font-medium text-brand-black">
                      {formatDateRange(trip.dates.start, trip.dates.end)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-brand-black">
                      {trip.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-medium text-brand-black">
                      Max {trip.maxGroupSize}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats Left</span>
                    <span className="font-semibold text-brand-black">
                      {trip.seatsRemaining}
                    </span>
                  </div>
                </div>

                <div className="border-t border-brand-gray pt-4 space-y-3">
                  <Button
                    href={getWhatsAppLink(whatsappMessage)}
                    variant="primary"
                    size="lg"
                    className="w-full"
                    external
                  >
                    Book Your Spot
                  </Button>
                  <Button
                    href={getWhatsAppLink(whatsappMessage)}
                    variant="whatsapp"
                    size="md"
                    className="w-full"
                    external
                  >
                    WhatsApp Us
                  </Button>
                </div>

                {trip.bookingAmount > 0 && (
                  <div className="text-xs text-gray-500 text-center">
                    Booking amount: {formatPrice(trip.bookingAmount)} &middot;
                    Remaining on trip day
                  </div>
                )}

                {/* Trust signal */}
                <div className="text-center pt-2 border-t border-brand-gray">
                  <p className="text-xs text-gray-500">
                    Questions? We reply on WhatsApp within 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-gray p-3 flex gap-2 lg:hidden z-40">
        <Button
          href={getWhatsAppLink(whatsappMessage)}
          variant="primary"
          size="md"
          className="flex-1"
          external
        >
          Book Now &middot; {formatPrice(trip.price)}
        </Button>
        <Button
          href={getWhatsAppLink(whatsappMessage)}
          variant="whatsapp"
          size="md"
          external
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
