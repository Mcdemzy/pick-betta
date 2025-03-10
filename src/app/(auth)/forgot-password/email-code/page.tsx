"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthSidebar from "@/components/auth/AuthSidebar";

const ForgotEmailCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const router = useRouter();

  const isFormValid = code.every((digit) => digit.trim() !== "");

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/reset-password");
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <AuthSidebar />

      <section className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          {/* Mobile Logo */}
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
            Enter verification code
          </h2>
          <p className="mb-6 mt-2.5 text-[.875rem] text-[#667085] text-center">
            Enter the 4-digit number that was sent to{" "}
            <span className="font-semibold">pickbetta@mail.com</span>
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-2xl border rounded focus:outline-none focus:ring-2 focus:ring-[#06543C]"
                />
              ))}
            </div>

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

          <p className="mt-4 text-sm text-center text-[#344054]">
            Didn't receive the code?{" "}
            <span className="text-[#06543C] font-semibold cursor-pointer">
              Resend code
            </span>
          </p>
        </div>
      </section>

      <p className="text-[#667085] absolute right-8 text-sm bottom-4 hidden md:block">
        Copyright 2025
      </p>
    </main>
  );
};

export default ForgotEmailCode;
