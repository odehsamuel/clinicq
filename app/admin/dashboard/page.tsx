import Image from "next/image";
import Link from "next/link";
import { Bell, Search, Settings } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | ClinicQ",
  robots: { index: false, follow: false },
};

export default function AdminDashboard() {
  return (
    <div className="bg-clinic-bg relative top-0 left-0 w-full h-screen flex items-center justify-center">
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
      <h1 className="text-xl font-semibold text-clinic-brand">ClinicQ Admin</h1>
    </div>
  );
}
