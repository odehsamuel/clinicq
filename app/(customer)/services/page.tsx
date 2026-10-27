import Link from "next/link";
import { getServicesByCategory } from "@/lib/services";
import { clinicData } from "@/content/clinic";
import FadeRiseSection from "@/components/FadeRiseSection";
import SampleTag from "@/components/SampleTag";

export const metadata = {
  title: "Dental services | ClinicQ",
  description:
    "An overview of preventive, hygiene, restorative, and aesthetic dental services offered at ClinicQ, including visit durations and direct booking.",
};

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface ServicePrice {
  amount: number;
  currency: string;
}

interface ServiceItem {
  slug: string;
  name: string;
  category: string;
  summary: string;
  durationMinutes?: number;
  price?: ServicePrice;
  whatToExpect?: string;
  active: boolean;
  placeholderFields?: string[];
}

function formatPrice(price?: ServicePrice): string | null {
  if (!price || typeof price.amount !== "number") return null;
  const symbol =
    price.currency === "GBP" || price.currency === "£"
      ? "£"
      : `${price.currency} `;
  return `${symbol}${price.amount}`;
}

export default function ServicesPage() {
  const categories = getServicesByCategory();
  const categoryEntries = Object.entries(categories) as [string, ServiceItem[]][];
  const showJumpList = categoryEntries.length >= 2;

  return (
    <div className="w-full bg-clinic-bg text-clinic-slate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* 1. PAGE HEADER */}
        <FadeRiseSection initialVisible={true} className="pb-10 sm:pb-12 text-left">
          <div className="max-w-2xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-clinic-brand">
              Services
            </h1>
            <p className="text-base sm:text-lg text-clinic-slate/85 leading-relaxed">
              What ClinicQ offers, typical appointment durations, and direct online booking for each visit.
            </p>
          </div>

          {/* Desktop-only category jump list (rendered only if 2+ categories) */}
          {showJumpList && (
            <nav
              aria-label="Service categories jump list"
              className="hidden md:flex flex-wrap items-center gap-2 pt-6"
            >
              <span className="font-mono text-xs text-clinic-gray mr-1">
                Jump to:
              </span>
              {categoryEntries.map(([category]) => {
                const categoryId = slugifyCategory(category);
                return (
                  <a
                    key={category}
                    href={`#${categoryId}`}
                    className="min-h-[44px] inline-flex items-center text-xs font-mono text-clinic-slate/90 hover:text-clinic-brand hover:border-clinic-brand border border-clinic-gray/25 rounded-lg px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
                  >
                    {category}
                  </a>
                );
              })}
            </nav>
          )}
        </FadeRiseSection>

        {/* 2. SERVICES LIST (GROUPED BY CATEGORY) */}
        <div className="space-y-12 sm:space-y-16">
          {categoryEntries.map(([category, items]) => {
            const categoryId = slugifyCategory(category);
            return (
              <FadeRiseSection
                key={category}
                id={categoryId}
                className="pt-10 border-t border-clinic-gray/20 scroll-mt-24 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Desktop narrow left column: Category name */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-clinic-brand tracking-tight md:sticky md:top-24">
                      {category}
                    </h2>
                  </div>

                  {/* Wider right column: Services */}
                  <div className="md:col-span-8 lg:col-span-9 divide-y divide-clinic-gray/15">
                    {items.map((service) => {
                      const formattedPrice = formatPrice(service.price);
                      return (
                        <article
                          key={service.slug}
                          className="py-8 first:pt-0 last:pb-0 space-y-3"
                        >
                          <h3 className="font-sans text-lg sm:text-xl font-semibold text-clinic-brand">
                            {service.name}
                          </h3>

                          <p className="text-sm sm:text-base text-clinic-slate/85 leading-relaxed max-w-3xl">
                            {service.summary}
                          </p>

                          {/* Metadata row: duration and price (rendered only if present, never empty labels) */}
                          {(service.durationMinutes || formattedPrice) && (
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-clinic-gray pt-1">
                              {service.durationMinutes && (
                                <div className="flex items-center gap-1.5">
                                  <span className="text-clinic-slate font-medium">
                                    Duration:
                                  </span>
                                  <span>{service.durationMinutes} min</span>
                                  {service.placeholderFields?.includes(
                                    "durationMinutes"
                                  ) && <SampleTag />}
                                </div>
                              )}

                              {formattedPrice && (
                                <div className="flex items-center gap-1.5">
                                  <span className="text-clinic-slate font-medium">
                                    Fee:
                                  </span>
                                  <span>{formattedPrice}</span>
                                  {service.placeholderFields?.includes(
                                    "price"
                                  ) && <SampleTag />}
                                </div>
                              )}
                            </div>
                          )}

                          {/* "Book this service" link */}
                          <div className="pt-1">
                            <Link
                              href={`/book?service=${encodeURIComponent(
                                service.slug
                              )}`}
                              className="min-h-[44px] inline-flex items-center text-sm font-medium text-clinic-brand hover:text-clinic-CTA transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2 group"
                            >
                              <span>Book this service</span>
                              <span className="sr-only"> for {service.name}</span>
                              <span
                                aria-hidden="true"
                                className="ml-1.5 group-hover:translate-x-0.5 transition-transform"
                              >
                                &rarr;
                              </span>
                            </Link>
                          </div>

                          {/* What to expect disclosure (rendered only if whatToExpect exists) */}
                          {service.whatToExpect && (
                            <details className="group pt-2 text-sm text-clinic-slate">
                              <summary className="cursor-pointer font-mono text-xs text-clinic-gray hover:text-clinic-brand inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2 py-1 select-none">
                                <span>What to expect</span>
                                <span
                                  aria-hidden="true"
                                  className="text-[10px] text-clinic-gray/70 group-open:rotate-180 transition-transform duration-150 inline-block"
                                >
                                  ▼
                                </span>
                              </summary>
                              <div className="mt-2 text-sm text-clinic-slate/85 leading-relaxed pl-3 border-l-2 border-clinic-gray/25 max-w-2xl">
                                <p>{service.whatToExpect}</p>
                                {service.placeholderFields?.includes(
                                  "whatToExpect"
                                ) && <SampleTag />}
                              </div>
                            </details>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              </FadeRiseSection>
            );
          })}
        </div>

        {/* 3. NOT SURE WHAT YOU NEED */}
        <FadeRiseSection className="pt-16 sm:pt-20 border-t border-clinic-gray/20 text-left">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-clinic-brand tracking-tight">
              Not sure what you need?
            </h2>
            <p className="text-sm sm:text-base text-clinic-slate/85 leading-relaxed">
              If you are uncertain which service to choose or have not had an examination recently, we suggest starting with a comprehensive check-up. You can also contact our team to discuss your needs before scheduling.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/book"
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2 text-center"
              >
                Book an appointment
              </Link>
              <Link
                href="/contact"
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-clinic-slate hover:text-clinic-brand border border-clinic-gray/30 hover:border-clinic-brand rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2 text-center"
              >
                Contact the clinic
              </Link>
            </div>
          </div>
        </FadeRiseSection>

        {/* 4. URGENT CARE NOTE */}
        <FadeRiseSection className="pt-10 text-left">
          <div className="border border-clinic-gray/25 p-5 sm:p-6 rounded-lg space-y-1.5 text-sm bg-white/40">
            <p className="font-medium text-clinic-brand">
              Toothache, swelling or an accident? Call the clinic on{" "}
              <a
                href={`tel:${clinicData.phone}`}
                className="underline underline-offset-2 hover:text-clinic-CTA focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
              >
                {clinicData.phone}
              </a>
              <SampleTag />.
            </p>
            <p className="text-xs text-clinic-gray">
              In a medical emergency, contact your local emergency services.
            </p>
          </div>
        </FadeRiseSection>

        {/* 5. GOOD TO KNOW (OPTIONAL SECTION: SHIPPED EMPTY / HIDDEN) */}
        {Array.isArray((clinicData as Record<string, unknown>).goodToKnow) &&
          ((clinicData as Record<string, unknown>).goodToKnow as unknown[]).length > 0 && (
            <FadeRiseSection className="pt-16 sm:pt-20 border-t border-clinic-gray/20 text-left">
              <div className="max-w-2xl space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-clinic-brand tracking-tight">
                  Good to know
                </h2>
                <ul className="space-y-3 text-sm text-clinic-slate/85">
                  {((clinicData as Record<string, unknown>).goodToKnow as string[]).map(
                    (entry, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {entry}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </FadeRiseSection>
          )}

        {/* 6. CLOSING "BOOK AN APPOINTMENT" BAND */}
        <FadeRiseSection className="pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-clinic-gray/20 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-semibold text-clinic-brand tracking-tight">
                Book an appointment
              </h2>
              <p className="text-sm text-clinic-gray max-w-lg">
                Review available appointment times and book your visit online.
              </p>
            </div>
            <div className="flex items-center">
              <Link
                href="/book"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2 text-center"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </FadeRiseSection>
      </div>
    </div>
  );
}
