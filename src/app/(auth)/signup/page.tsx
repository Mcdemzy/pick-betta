"use client";

import { useState } from "react";
import Image from "next/image";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import AuthSidebar from "@/components/auth/AuthSidebar";
import PhoneNumberInput from "@/components/auth/PhoneNumberInput";
import Link from "next/link";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isFormValid =
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    termsAccepted;

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar */}
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

          <h2 className="md:text-4xl md:leading-11 md:tracking-[-2%] text-[1.5rem] font-semibold text-[#101828] text-center">
            Sign up for an account
          </h2>
          <p className="mb-6 mt-2.5 text-[.75rem] md:text-[1rem] text-[#667085] text-center font-normal md:leading-6">
            Get started today by entering just a few details
          </p>

          <form className="space-y-6">
            <FloatingLabelInput
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FloatingLabelInput
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneNumberInput />
            <FloatingLabelInput
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FloatingLabelInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms">
                I agree to the
                <a href="#" className="text-[#06543C] underline">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                and
                <a href="#" className="text-[#06543C] underline">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full rounded px-4 py-2 text-white cursor-pointer ${
                isFormValid ? "bg-[#06543C]" : "bg-[#98A2B3] cursor-not-allowed"
              }`}
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm font-medium md:leading-5.5 text-center text-[#344054]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#06543C] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </section>

      <p className="text-[#667085] absolute right-8 text-sm bottom-4 hidden md:block">
        Copyright 2025
      </p>
    </main>
  );
};

export default Signup;
