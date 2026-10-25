import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Clock,
    CheckCircle2,
    MapPin,
    ArrowRight,
    Sparkles,
    Award,
    CreditCard,
    AlertCircle,
} from "lucide-react";
import { homeContent } from "@/content/home";
import { servicesData } from "@/content/services";
import { clinicData } from "@/content/clinic";
import BookingPreview from "@/components/BookingPreview";
import FadeRiseSection from "@/components/FadeRiseSection";

export default function HomePage() {
    const { hero, howItWorks, dentists, account, clinicStandard, faq } =
        homeContent;

    return (
        <div className="space-y-0 text-clinic-slate">
            {/* 1. HERO SECTION WITH BRIGHT LUMINOUS GRADIENT & RESPONSIVE STUDIO IMAGE */}
            <FadeRiseSection
                initialVisible={true}
                className="relative w-full min-h-[580px] lg:min-h-[640px] pt-8 sm:pt-14 pb-16 sm:pb-20 flex items-center border-b border-clinic-gray/20 overflow-hidden bg-clinic-bg"
            >
                {/* Background Image: Crisp, clearly visible, with responsive framing */}
                <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                    <Image
                        src="/hero.png"
                        alt="ClinicQ modern sunlit architectural interior"
                        fill
                        priority
                        quality={95}
                        className="object-cover object-[24%_center] sm:object-center"
                        sizes="100vw"
                    />

                    {/* Desktop: Soft left-to-right gradient for text legibility while keeping the studio clearly visible */}
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#faf7f2]/85 via-[#faf7f2]/40 via-50% to-transparent" />

                    {/* Mobile/Tablet: Light transparent wash so image remains clearly visible while aligning with page */}
                    <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#faf7f2]/75 via-[#faf7f2]/30 to-[#faf7f2]/70" />

                    {/* Subtle bottom fade into next section */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#faf7f2] to-transparent pointer-events-none" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Left Column: Headline, Trust Points, CTAs (Centered on mobile, left-aligned on desktop) */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-clinic-brand/15 rounded-full text-xs font-mono text-clinic-brand shadow-xs">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Now Welcoming New Patients</span>
                                </div>
                            </div>

                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-clinic-brand leading-[1.14]">
                                {hero.headline}
                            </h1>

                            <p className="text-base sm:text-lg text-clinic-slate/90 max-w-xl leading-relaxed mx-auto lg:mx-0">
                                {hero.paragraph}
                            </p>

                            {/* Action Buttons: Centered on mobile */}
                            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                <Link
                                    href={hero.primaryCta.href}
                                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-clinic-CTA text-white hover:bg-[#e85b3c] border border-clinic-CTA rounded-xl shadow-md transition-all hover:shadow-lg focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
                                >
                                    <span>{hero.primaryCta.label}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href={hero.secondaryCta.href}
                                    className="min-h-[44px] inline-flex items-center justify-center gap-1.5 text-sm font-medium text-clinic-slate hover:text-clinic-brand underline underline-offset-4 decoration-clinic-gray/40 hover:decoration-clinic-CTA transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
                                >
                                    <span>{hero.secondaryCta.label}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Trust Points: Centered on mobile */}
                            <div className="pt-4 border-t border-clinic-gray/20 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-clinic-gray/15 shadow-xs text-clinic-slate/90">
                                {hero.trustPoints.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center lg:justify-start gap-2 text-xs font-medium text-clinic-slate/90 text-center lg:text-left"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Live Interactive Booking Scheduler Widget */}
                        <div className="lg:col-span-5 w-full">
                            <BookingPreview />
                        </div>
                    </div>
                </div>
            </FadeRiseSection>

            {/* 2. CLINICAL REASSURANCE / PRACTICE PILLARS BAR */}
            <section className="w-full py-8 border-b border-clinic-gray/20 bg-clinic-brand/[0.02]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
                        <div className="space-y-1 p-4 rounded-2xl bg-white/80 border border-clinic-gray/15 shadow-xs flex flex-col items-center sm:items-start">
                            <div className="flex items-center gap-2 text-clinic-brand">
                                <Award className="w-4 h-4 text-clinic-CTA shrink-0" />
                                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                                    CQC Regulated
                                </span>
                            </div>
                            <p className="text-xs text-clinic-gray leading-relaxed">
                                Full Marylebone practice compliance
                            </p>
                        </div>

                        <div className="space-y-1 p-4 rounded-2xl bg-white/80 border border-clinic-gray/15 shadow-xs flex flex-col items-center sm:items-start">
                            <div className="flex items-center gap-2 text-clinic-brand">
                                <CreditCard className="w-4 h-4 text-clinic-CTA shrink-0" />
                                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                                    Health Funds
                                </span>
                            </div>
                            <p className="text-xs text-clinic-gray leading-relaxed">
                                Direct billing for Bupa, AXA & Aviva
                            </p>
                        </div>

                        <div className="space-y-1 p-4 rounded-2xl bg-white/80 border border-clinic-gray/15 shadow-xs flex flex-col items-center sm:items-start">
                            <div className="flex items-center gap-2 text-clinic-brand">
                                <Sparkles className="w-4 h-4 text-clinic-CTA shrink-0" />
                                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                                    Digital Scans
                                </span>
                            </div>
                            <p className="text-xs text-clinic-gray leading-relaxed">
                                Low-radiation iTero 3D imaging
                            </p>
                        </div>

                        <div className="space-y-1 p-4 rounded-2xl bg-white/80 border border-clinic-gray/15 shadow-xs flex flex-col items-center sm:items-start">
                            <div className="flex items-center gap-2 text-clinic-brand">
                                <Clock className="w-4 h-4 text-clinic-CTA shrink-0" />
                                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                                    On-Time Visits
                                </span>
                            </div>
                            <p className="text-xs text-clinic-gray leading-relaxed">
                                Generous scheduling buffers
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STUDIO ATMOSPHERE / ARCHITECTURAL SHOWCASE */}
            <FadeRiseSection className="w-full py-16 sm:py-20 border-b border-clinic-gray/20 bg-clinic-bg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left side: Wide photograph of the real clinic reception and glass treatment suites */}
                        <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-clinic-gray/25 bg-white/60 aspect-[16/10] sm:aspect-[16/9] w-full shadow-lg shadow-clinic-brand/5">
                            <Image
                                src="/hero2.png"
                                alt="ClinicQ Dental Studio reception desk with natural wood and light-filled dental treatment suites"
                                fill
                                priority
                                className="object-cover object-center hover:scale-[1.02] transition-transform duration-500 rounded-3xl"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                            <div className="absolute bottom-4 left-4 bg-clinic-brand/90 text-clinic-bg text-[11px] font-mono px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm">
                                Marylebone Reception & Clinical Suites
                            </div>
                        </div>

                        {/* Right side: Studio narrative (Centered on mobile, left-aligned on desktop) */}
                        <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
                            <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                A Calming Environment
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                                A studio designed around your senses.
                            </h2>
                            <p className="text-sm sm:text-base text-clinic-slate/85 leading-relaxed mx-auto lg:mx-0">
                                Step into a space where medical excellence meets quiet
                                hospitality. No sharp chemical smells, no crowded waiting rooms.
                                Just sunlit glass operatory suites, natural oak finishes, and a
                                clinical team ready when you arrive.
                            </p>

                            <div className="pt-2 border-t border-clinic-gray/15 space-y-3 text-left">
                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-clinic-gray/15">
                                    <div className="w-7 h-7 rounded-full bg-clinic-brand/5 border border-clinic-brand/15 text-clinic-brand flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-clinic-CTA" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-clinic-brand">
                                            Zero Waiting Delays
                                        </h3>
                                        <p className="text-xs text-clinic-gray mt-0.5">
                                            30-minute buffers ensure appointments commence right on schedule.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-clinic-gray/15">
                                    <div className="w-7 h-7 rounded-full bg-clinic-brand/5 border border-clinic-brand/15 text-clinic-brand flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-clinic-CTA" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-clinic-brand">
                                            Acoustically Isolated Suites
                                        </h3>
                                        <p className="text-xs text-clinic-gray mt-0.5">
                                            Private, quiet treatment suites with noise-canceling audio options.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeRiseSection>

            {/* 4. HOW BOOKING WORKS */}
            <FadeRiseSection
                id="how-it-works"
                className="w-full py-16 sm:py-20 border-b border-clinic-gray/20 bg-clinic-bg"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <div className="space-y-2 text-center sm:text-left">
                        <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                            Patient Workflow
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                            {howItWorks.title}
                        </h2>
                        <p className="text-sm text-clinic-gray max-w-xl mx-auto sm:mx-0">
                            {howItWorks.subtitle}
                        </p>
                    </div>

                    {/* Four numbered steps as friendly rounded cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {howItWorks.steps.map((step) => (
                            <div
                                key={step.number}
                                className="p-6 sm:p-5 lg:p-6 space-y-3 rounded-2xl bg-white/80 border border-clinic-gray/20 shadow-xs hover:border-clinic-brand/40 transition-colors text-center sm:text-left"
                            >
                                <div className="flex justify-center sm:justify-start">
                                    <span className="inline-block font-mono text-xs font-semibold text-clinic-CTA bg-clinic-CTA/10 px-2.5 py-0.5 rounded-full">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="font-sans text-base font-semibold text-clinic-brand leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-clinic-gray leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-clinic-gray leading-relaxed pt-1 text-center sm:text-left">
                        <Calendar className="w-4 h-4 text-clinic-brand shrink-0" />
                        <span>{howItWorks.note}</span>
                    </div>
                </div>
            </FadeRiseSection>

            {/* 5. SERVICES / CLINICAL TREATMENTS */}
            <FadeRiseSection
                id="services"
                className="w-full py-16 sm:py-20 border-b border-clinic-gray/20 bg-clinic-bg"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-center sm:text-left">
                        <div className="space-y-2">
                            <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                Clinical Care
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                                Dental treatments & services
                            </h2>
                            <p className="text-sm text-clinic-gray max-w-xl mx-auto sm:mx-0">
                                Preventive health, advanced restorative care, and modern aesthetics.
                            </p>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <Link
                                href={servicesData.viewAllLink.href}
                                className="min-h-[44px] inline-flex items-center text-sm font-medium text-clinic-slate hover:text-clinic-brand underline underline-offset-4 decoration-clinic-gray/40 hover:decoration-clinic-CTA transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                            >
                                {servicesData.viewAllLink.label} &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Treatment catalog grid with rounded cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.services.map((service) => (
                            <div
                                key={service.id}
                                className="rounded-2xl border border-clinic-gray/20 bg-white/80 p-6 space-y-4 hover:border-clinic-brand/40 transition-all hover:shadow-md flex flex-col justify-between shadow-xs text-left"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="font-mono text-[11px] uppercase tracking-wider text-clinic-gray">
                                            {service.category}
                                        </span>
                                        <span className="font-mono text-xs font-medium text-clinic-brand bg-clinic-brand/5 border border-clinic-brand/15 px-2.5 py-0.5 rounded-full shrink-0">
                                            {service.duration}
                                        </span>
                                    </div>

                                    <h3 className="font-sans text-base font-semibold text-clinic-brand">
                                        {service.name}
                                    </h3>

                                    <p className="text-sm text-clinic-gray leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-clinic-gray/15 flex items-center justify-between text-xs">
                                    <span className="text-clinic-slate/75 italic line-clamp-1 pr-2">
                                        {service.idealFor}
                                    </span>
                                    <Link
                                        href={`/book?service=${encodeURIComponent(service.name)}`}
                                        className="font-medium text-clinic-brand hover:text-clinic-CTA inline-flex items-center gap-1 shrink-0 focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                                    >
                                        <span>Book</span>
                                        <span>&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Featured Aesthetic Care Highlight with Real Smile Photo */}
                    <div className="mt-8 rounded-3xl border border-clinic-gray/20 bg-white/85 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-sm">
                        <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl border border-clinic-gray/20 bg-clinic-bg shadow-xs mx-auto w-full max-w-sm md:max-w-none">
                            <Image
                                src="/lady.jpg"
                                alt="Patient with a bright, healthy, natural smile after dental treatment"
                                fill
                                className="object-cover object-top hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                        </div>
                        <div className="md:col-span-8 space-y-4 text-center md:text-left">
                            <div className="flex justify-center md:justify-start">
                                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-clinic-brand bg-clinic-brand/5 px-3 py-1 rounded-full border border-clinic-brand/10">
                                    <Sparkles className="w-3.5 h-3.5 text-clinic-CTA" />
                                    <span>Cosmetic Studio & Brightening</span>
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand leading-snug">
                                Natural smile transformations that celebrate your individual character.
                            </h3>
                            <p className="text-sm text-clinic-slate/85 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                We reject artificial, overly bleached teeth. Our aesthetic
                                focus centers on biomimetic resin composite artistry,
                                custom Enlighten® in-chair shade enhancement, and clear aligner
                                orthodontics — always prioritizing natural enamel integrity and
                                long-term gum health.
                            </p>
                            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                                <Link
                                    href="/book?service=Enlighten%C2%AE%20In-Studio%20Whitening"
                                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs transition-colors"
                                >
                                    Book a Smile Assessment &rarr;
                                </Link>
                                <span className="text-xs font-mono text-clinic-gray">
                                    Includes digital 3D shade simulation
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeRiseSection>

            {/* 6. CLINICAL TEAM (DENTISTS WITH REAL PORTRAITS) */}
            <FadeRiseSection
                id="dentists"
                className="w-full py-16 sm:py-20 border-b border-clinic-gray/20 bg-clinic-bg"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-center sm:text-left">
                        <div className="space-y-2 max-w-xl mx-auto sm:mx-0">
                            <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                Practitioners
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                                {dentists.title}
                            </h2>
                            <p className="text-sm text-clinic-gray leading-relaxed">
                                {dentists.text}
                            </p>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <Link
                                href={dentists.cta.href}
                                className="min-h-[44px] inline-flex items-center text-sm font-medium text-clinic-slate hover:text-clinic-brand underline underline-offset-4 decoration-clinic-gray/40 hover:decoration-clinic-CTA transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                            >
                                {dentists.cta.label} &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Clinician Profile Cards with Friendly Rounded Aesthetic */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dentists.list.map((dentist) => (
                            <div
                                key={dentist.id}
                                className="rounded-3xl border border-clinic-gray/20 bg-white/85 flex flex-col justify-between hover:border-clinic-brand/40 transition-all hover:shadow-lg overflow-hidden group shadow-sm text-left"
                            >
                                <div>
                                    {/* Doctor Portrait Image */}
                                    <div className="relative aspect-square w-full overflow-hidden bg-clinic-brand/5 border-b border-clinic-gray/15 rounded-t-3xl">
                                        <Image
                                            src={dentist.image}
                                            alt={`Portrait of ${dentist.name}, ${dentist.role}`}
                                            fill
                                            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 rounded-t-3xl"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute top-3.5 right-3.5 bg-clinic-bg/95 backdrop-blur-sm border border-clinic-brand/15 px-3 py-1 rounded-full font-mono text-[11px] text-clinic-brand font-medium shadow-xs">
                                            {dentist.availability}
                                        </div>
                                    </div>

                                    {/* Doctor Details */}
                                    <div className="p-6 space-y-3">
                                        <div>
                                            <h3 className="font-sans text-lg font-semibold text-clinic-brand leading-tight">
                                                {dentist.name}
                                            </h3>
                                            <p className="font-mono text-[11px] text-clinic-CTA font-medium mt-0.5">
                                                {dentist.credentials}
                                            </p>
                                        </div>

                                        <div className="space-y-1.5 text-xs">
                                            <p className="font-semibold text-clinic-slate">
                                                {dentist.role}
                                            </p>
                                            <p className="text-clinic-gray leading-relaxed">
                                                {dentist.specialty}
                                            </p>
                                            <span className="inline-block text-[11px] font-mono text-clinic-slate/75 pt-1">
                                                {dentist.experience}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0">
                                    <Link
                                        href={`/book?dentist=${encodeURIComponent(dentist.name)}`}
                                        className="w-full min-h-[42px] inline-flex items-center justify-center text-xs font-medium bg-clinic-brand/5 hover:bg-clinic-brand hover:text-clinic-bg text-clinic-brand border border-clinic-brand/20 rounded-xl transition-colors"
                                    >
                                        Schedule visit with {dentist.name.split(" ")[1]} &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeRiseSection>

            {/* 7. THE CLINICQ STANDARD (THE MODERN PATIENT EXPERIENCE) */}
            <FadeRiseSection className="w-full py-16 sm:py-20 bg-clinic-brand/[0.03] border-b border-clinic-gray/25">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="space-y-3 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
                        <div className="flex justify-center lg:justify-start">
                            <span className="font-mono text-xs uppercase tracking-wider text-clinic-CTA font-semibold bg-clinic-CTA/10 px-3 py-1 rounded-full inline-block">
                                {clinicStandard.badge}
                            </span>
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                            {clinicStandard.title}
                        </h2>
                        <p className="text-base text-clinic-slate/90 leading-relaxed">
                            {clinicStandard.statement}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4 border-t border-clinic-gray/20">
                        {/* 4 Pillars Grid (7 cols) */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            {clinicStandard.pillars.map((pillar, idx) => (
                                <div
                                    key={idx}
                                    className="space-y-2 p-5 bg-white/80 rounded-2xl border border-clinic-gray/15 shadow-xs"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-xs font-bold text-clinic-CTA bg-clinic-CTA/10 px-2 py-0.5 rounded-full">
                                            0{idx + 1}
                                        </span>
                                        <h3 className="font-sans text-sm font-semibold text-clinic-brand">
                                            {pillar.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-clinic-gray leading-relaxed pl-5">
                                        {pillar.summary}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Supporting Real Clinic Photograph (5 cols) */}
                        <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-3xl border border-clinic-gray/25 bg-white shadow-lg shadow-clinic-brand/5 w-full max-w-md lg:max-w-none mx-auto">
                            <Image
                                src="/hero-bg.jpg"
                                alt="ClinicQ modern sunlit architectural interior and quiet consultation suites"
                                fill
                                className="object-cover object-center rounded-3xl"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-clinic-brand/75 via-transparent to-transparent flex items-end p-5 rounded-3xl">
                                <p className="text-xs font-mono text-clinic-bg">
                                    Calm check-in: review your schedule in our quiet lounge
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeRiseSection>

            {/* 8. PATIENT PORTAL (ACCOUNT) */}
            <FadeRiseSection className="w-full py-16 sm:py-20 border-b border-clinic-gray/20 bg-clinic-bg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
                        <div className="md:col-span-5 space-y-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                Digital Convenience
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                                {account.title}
                            </h2>
                            <p className="text-sm text-clinic-gray leading-relaxed max-w-sm mx-auto md:mx-0">
                                {account.summary}
                            </p>
                            <div className="pt-3 flex justify-center md:justify-start">
                                <Link
                                    href="/login"
                                    className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                                >
                                    Log in to Patient Portal &rarr;
                                </Link>
                            </div>
                        </div>

                        <div className="md:col-span-7 w-full text-left">
                            <ul className="rounded-3xl border border-clinic-gray/20 divide-y divide-clinic-gray/20 text-sm bg-white/70 overflow-hidden shadow-xs">
                                {account.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-4 px-5 flex items-center text-clinic-slate font-medium"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-3 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </FadeRiseSection>

            {/* 9. FREQUENTLY ASKED QUESTIONS */}
            <FadeRiseSection
                id="faq"
                className="w-full py-16 sm:py-20 border-b border-clinic-gray/20 bg-clinic-bg"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <div className="space-y-2 text-center sm:text-left">
                        <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                            Transparent Information
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                            {faq.title}
                        </h2>
                        <p className="text-sm text-clinic-gray max-w-xl mx-auto sm:mx-0">
                            {faq.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                        {faq.items.map((item, index) => (
                            <div
                                key={index}
                                className="space-y-2 p-6 rounded-2xl bg-white/70 border border-clinic-gray/20 shadow-xs"
                            >
                                <h3 className="font-sans text-base font-semibold text-clinic-brand">
                                    {item.question}
                                </h3>
                                <p className="text-sm text-clinic-gray leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeRiseSection>

            {/* 10. CONTACT, HOURS & LOCATION */}
            <FadeRiseSection id="contact" className="w-full py-16 sm:py-20 bg-clinic-bg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        {/* Left side: Heading and opening hours */}
                        <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
                            <div className="space-y-2">
                                <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                    Visit & Schedule
                                </span>
                                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-clinic-brand tracking-tight">
                                    Studio hours & appointments
                                </h2>
                                <p className="text-sm text-clinic-gray max-w-xl mx-auto sm:mx-0">
                                    Early morning and late evening appointments available Monday through Thursday.
                                </p>
                            </div>

                            {/* Opening hours table with rounded styling */}
                            <div className="space-y-2 text-left">
                                <ul className="rounded-3xl border border-clinic-gray/20 divide-y divide-clinic-gray/20 text-sm bg-white/75 overflow-hidden shadow-xs">
                                    {clinicData.openingHours.map((sched, idx) => (
                                        <li
                                            key={idx}
                                            className="py-4 px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                                        >
                                            <span className="font-medium text-clinic-slate">
                                                {sched.days}
                                            </span>
                                            <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
                                                <span className="font-mono text-xs text-clinic-gray">
                                                    {sched.note}
                                                </span>
                                                <span className="font-mono text-xs font-semibold text-clinic-brand bg-clinic-brand/5 px-2.5 py-0.5 rounded-full border border-clinic-brand/10">
                                                    {sched.hours}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-4">
                                <Link
                                    href="/book"
                                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                                >
                                    Book an appointment
                                </Link>
                                <div className="text-xs font-mono text-clinic-gray text-center sm:text-left">
                                    <span>Questions? Call reception: </span>
                                    <a
                                        href={`tel:${clinicData.phone}`}
                                        className="font-medium text-clinic-brand hover:text-clinic-CTA underline"
                                    >
                                        {clinicData.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right side: Studio Address & Emergency Hotline with Rounded Cards */}
                        <div className="lg:col-span-5 space-y-6 text-left">
                            <div className="rounded-3xl border border-clinic-gray/25 p-7 bg-white/95 space-y-6 shadow-md shadow-clinic-brand/5">
                                <div>
                                    <div className="flex items-center justify-between pb-3 border-b border-clinic-gray/15">
                                        <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-clinic-CTA" />
                                            <span>Studio Location</span>
                                        </span>
                                        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                            Marylebone
                                        </span>
                                    </div>
                                    <address className="mt-3.5 not-italic text-sm text-clinic-slate space-y-1">
                                        <p className="font-semibold text-clinic-brand">
                                            {clinicData.name}
                                        </p>
                                        <p>{clinicData.address.line1}</p>
                                        <p>{clinicData.address.line2}</p>
                                        <p>
                                            {clinicData.address.area}, {clinicData.address.city}{" "}
                                            {clinicData.address.postalCode}
                                        </p>
                                        <p className="text-xs text-clinic-gray pt-2 leading-relaxed">
                                            {clinicData.address.transit}
                                        </p>
                                    </address>
                                </div>

                                <div className="space-y-3 pt-3 border-t border-clinic-gray/15 text-sm">
                                    <div>
                                        <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                            Telephone Enquiries
                                        </span>
                                        <p className="mt-1 font-mono text-sm font-medium text-clinic-slate">
                                            {clinicData.phone}
                                        </p>
                                    </div>

                                    <div>
                                        <span className="font-mono text-xs uppercase tracking-wider text-clinic-gray block">
                                            Email Inquiries
                                        </span>
                                        <p className="mt-1 font-mono text-sm text-clinic-slate">
                                            {clinicData.email}
                                        </p>
                                    </div>

                                    {/* Urgent / Emergency box with rounded corners */}
                                    <div className="p-4 bg-clinic-CTA/5 border border-clinic-CTA/20 rounded-2xl space-y-1.5">
                                        <div className="flex items-center gap-1.5 text-clinic-CTA text-xs font-semibold uppercase tracking-wider font-mono">
                                            <AlertCircle className="w-3.5 h-3.5" />
                                            <span>Dental Emergency</span>
                                        </div>
                                        <p className="text-xs text-clinic-slate leading-relaxed">
                                            Acute toothache, trauma, or broken crown? Same-day urgent
                                            slots prioritized daily.
                                        </p>
                                        <p className="font-mono text-xs font-bold text-clinic-brand pt-1">
                                            Emergency Hotline: {clinicData.emergencyPhone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeRiseSection>
        </div>
    );
}
