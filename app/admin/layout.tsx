import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "../globals.css";

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
        {children}
      </body>
    </html>
  );
}
