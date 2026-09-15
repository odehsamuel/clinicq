import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Dental clinic reception"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-black/40" /> // for better text
      readability
      <div className="relative z-10 flex flex-col text-clinic-bg items-center justify-center h-full text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Quality Dental Care, Booked on Your Schedule!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Book an appointment with one of our trusted dentists in just a few
          clicks.
        </p>
        <Link
          href="/book"
          className="bg-clinic-CTA py-3 px-6 rounded-2xl font-semibold"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
