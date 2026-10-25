import Image from "next/image";
import Link from "next/link";
import { Bell, Check, Search, Settings, X } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | ClinicQ",
  robots: { index: false, follow: false },
};

export default function AdminDashboard() {
  const adminActivities = [
    {
      id: 1,
      title: "Today's Booking",
      val: 12,
    },
    {
      id: 2,
      title: "This Week",
      val: 45,
    },
    {
      id: 3,
      title: "Cancelled(week)",
      val: 5,
    },
    {
      id: 4,
      title: "avg per day",
      val: 14.8,
    },
  ];

  const patientSchedules = [
    {
      id: 1,
      time: "9:00am",
      patient: "Mr. Chinedu Thomas",
      status: true,
    },
    {
      id: 2,
      time: "11:00am",
      patient: "Miss. Dorathy Manchie",
      status: true,
    },
    {
      id: 3,
      time: "8:00am",
      patient: "Mr. & Mrs. Stephen Aleche",
      status: false,
    },
    {
      id: 4,
      time: "10:00am",
      patient: "Mr. Timothy Audu",
      status: false,
    },
    {
      id: 5,
      time: "9:00am",
      patient: "Mrs. Maggie Finn",
      status: true,
    },
  ];

  return (
    <div className="bg-clinic-bg w-full h-full items-center">
      <div className="absolute top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-md shadow">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-24 py-6 sm:px-6 lg:px-8">
          <Link href="/">
            <Image src="/logo.svg" alt="ClinicQ Logo" width={200} height={60} />
          </Link>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="relative border text-clinic-gray font-medium border-gray-300 'w-125' 'md:w-100' 'sm:w-50' rounded-xl py-2 px-8 hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute text-clinic-gray ml-1.5" />
          </div>
          <div className="flex items-center space-x-8">
            <Bell className=" text-clinic-brand hover:cursor-pointer" />
            <Settings className=" text-clinic-brand hover:cursor-pointer" />
            <div className="w-10 h-10 rounded-full overflow-hidden hover:cursor-pointer">
              <Image
                src={"/man.jpg"}
                alt="User Profile"
                width={40}
                height={40}
              />
            </div>
          </div>
        </nav>
      </div>
      <section className="max-w-7xl mx-auto mt-42">
        <div className="">
          <ul className="grid grid-cols-2 gap-6">
            {adminActivities.map((adminActivity) => (
              <li
                key={adminActivity.id}
                className="bg-clinic-bg p-4 rounded-xl shadow-xl space-y-4"
              >
                <h3 className="text-sm text-clinic-brand">
                  {adminActivity.title}
                </h3>
                <p
                  className={`font-bold text-2xl ${adminActivity.val < 6 ? "text-clinic-CTA" : "text-clinic-brand"}`}
                >
                  {adminActivity.val}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* <label htmlFor="today">Today</label> */}
          {/* <label htmlFor="providers">All Providers</label> */}
        </div>
        <div className="max-w-7xl mx-auto mt-42 text-center pb-20">
          <div className="grid grid-cols-3 justify-between items-center py-4">
            <h3 className="font-bold">Time</h3>
            <h3 className="font-bold">Patient</h3>
            <h3 className="font-bold">Status</h3>
          </div>
          <hr className="text-clinic-gray/25" />
          {patientSchedules.map((patientSchedule) => (
            <ul className="">
              <li
                key={patientSchedule.id}
                className="grid grid-cols-3 justify-between items-center py-4"
              >
                <p className="">{patientSchedule.time}</p>
                <p className="">{patientSchedule.patient}</p>
                <div className="grid grid-cols-2 justify-evenly items-center">
                  <p
                    className={`${patientSchedule.status ? "bg-clinic-success/15" : "bg-clinic-danger/15"} rounded-xl w-1/2 mx-auto px-3 py-1.5`}
                  >
                    {patientSchedule.status ? "Confirmed" : "Cancelled"}{" "}
                  </p>
                  <p className="mx-auto">
                    {patientSchedule.status ? (
                      <Check className=" text-clinic-brand hover:cursor-pointer" />
                    ) : (
                      <X className=" text-clinic-brand hover:cursor-pointer" />
                    )}
                  </p>
                </div>
              </li>
              <hr className="text-clinic-gray/25" />
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
}
