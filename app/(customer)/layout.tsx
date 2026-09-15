import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to ClinicQ",
  description:
    "ClinicQ is a web application that allows users to book appointments with healthcare providers online. It provides a convenient and efficient way for patients to schedule their visits, manage their appointments, and receive reminders. With ClinicQ, users can easily find available time slots, select their preferred healthcare provider, and complete the booking process in just a few clicks. The platform also offers features such as appointment history, notifications, and secure payment options, ensuring a seamless experience for both patients and healthcare providers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <header>
          <nav className="absolute top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-md shadow">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <Link href={"/"}>
                <Image src="/logo.svg" alt="ClinicQ" width={200} height={60} />
              </Link>
              <div className="flex space-x-4">
                <Link
                  href={"/book"}
                  className="bg-clinic-CTA text-clinic-bg py-2.5 px-6 rounded-2xl font-semibold"
                >
                  Book Now
                </Link>
                <Link
                  href="/admin/login"
                  className="bg-clinic-brand text-clinic-bg py-2.5 px-6 rounded-2xl font-semibold"
                >
                  Login as Admin
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
