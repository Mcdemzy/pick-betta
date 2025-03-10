"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import AuthSidebar from "@/components/auth/AuthSidebar";
import Link from "next/link";
import CookiesBanner from "@/components/auth/CookiesBanner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const router = useRouter();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowCookiesPopup(true); // Show cookies banner
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar (Hidden on Mobile) */}
      <AuthSidebar />

      {/* Right Content */}
      <section className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <div className="md:hidden flex justify-center mb-6">
            <Image
              src="/images/logo.svg"
              alt="Betta Logo"
              width={158}
              height={40}
              className="h-10"
            />
          </div>

          <h2 className="md:text-4xl text-[1.5rem] font-semibold text-[#101828] text-center">
            Welcome back!
          </h2>
          <p className="mb-6 mt-2.5 text-[.875rem] text-[#667085] text-center">
            Sign in to your account
          </p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <FloatingLabelInput
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FloatingLabelInput
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link
                href="/forgot-password"
                className="text-[#06543C] underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full rounded px-4 py-2 text-white font-semibold ${
                isFormValid ? "bg-[#06543C]" : "bg-[#98A2B3] cursor-not-allowed"
              }`}
            >
              Login
            </button>
          </form>

          {/* OAuth Login Buttons */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#667085] mb-3">Or, login using</p>
            <div className="flex justify-center space-x-4">
              <button className="border  w-[104px] md:w-[154px] h-[44px] flex justify-center cursor-pointer border-[#D0D5DD] px-4 py-2 rounded-lg">
                <Image
                  src="/icons/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
              </button>
              <button className="border w-[104px] md:w-[154px] h-[44px] flex justify-center cursor-pointer border-[#D0D5DD] px-4 py-2 rounded-lg">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </button>
              <button className="border  w-[104px] md:w-[154px] h-[44px] flex justify-center cursor-pointer border-[#D0D5DD] px-4 py-2 rounded-lg">
                <Image
                  src="/icons/apple.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-center text-[#344054]">
            New to Pickbetta?{" "}
            <Link href="/signup" className="text-[#06543C] font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </section>

      <p className="text-[#667085] absolute right-8 text-sm bottom-4 hidden md:block">
        Copyright 2025
      </p>

      {/* Show Cookies Popup when login is submitted */}
      {showCookiesPopup && (
        <CookiesBanner onClose={() => setShowCookiesPopup(false)} />
      )}
    </main>
  );
};

export default Login;
