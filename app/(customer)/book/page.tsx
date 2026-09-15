import Image from "next/image";

export const metadata = {
  title: "Book an appointment | ClinicQ",
  description:
    "Scheduling your dental checkup, cleaning or consultation online in just a few clicks.",
};

export default function BookingPage() {
  return (
    <div className="bg-clinic-bg relative top-0 left-0 w-full h-screen flex items-center justify-center">
      <h1 className="text-3xl text-center font-semibold text-black">
        Welcome to the bookings page of ClinicQ!
      </h1>
    </div>
  );
}
