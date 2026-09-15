"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here

    router.push("/admin/dashboard");
  };
  return (
    <div className="bg-clinic-bg relative top-0 left-0 w-full h-screen flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-white rounded-2xl p-8 w-[90%] md:w-[400px]">
        <Image
          src="/logo.svg"
          alt="ClinicQ Logo"
          className="mx-auto mb-4"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-bold text-center text-clinic-brand">
          Admin Login
        </h1>
        <div className="mt-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-clinic-brand"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full p-1.5 border border-gray-300 text-clinic-slate rounded-md shadow-sm"
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-clinic-brand"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="mt-1 block w-full p-1.5 border border-gray-300 text-clinic-slate rounded-md shadow-sm"
            />
            {isPasswordVisible ? (
              <Eye
                onClick={() => setIsPasswordVisible(false)}
                className="absolute right-3 top-[50%] translate-y-[-50%] text-clinic-gray hover:cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setIsPasswordVisible(true)}
                className="absolute right-3 top-[50%] translate-y-[-50%] text-clinic-gray hover:cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => handleLogin}
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/admin/forgot-password"
            className="text-sm text-clinic-brand hover:text-clinic-CTA hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
