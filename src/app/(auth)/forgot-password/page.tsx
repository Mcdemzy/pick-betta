"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import AuthSidebar from "@/components/auth/AuthSidebar";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const isFormValid = email.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/forgot-password/email-code");
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <AuthSidebar />

      <section className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <h2 className="md:text-4xl text-[1.5rem] font-semibold text-[#101828] text-center">
            Forgot Password
          </h2>
          <p className="mb-6 mt-2.5 text-[.875rem] text-[#667085] text-center">
            Enter your email address and we will send you a code to reset your
            password.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <FloatingLabelInput
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full rounded px-4 py-2 text-white font-semibold ${
                isFormValid ? "bg-[#06543C]" : "bg-[#98A2B3] cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-[#344054]">
            Remember your password?{" "}
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

export default ForgotPassword;
