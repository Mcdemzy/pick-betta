"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EmailVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle OTP input change
  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a number is entered
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length === 4) {
      setIsSubmitting(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  };

  return (
    <main className="flex flex-col items-center pt-7.5 min-h-screen px-6">
      <Image
        src="/images/logo.svg"
        alt="PickBetta Logo"
        width={158}
        height={40}
        className="mb-6"
      />

      <h2 className="text-xl font-semibold text-[#101828] text-center">
        Enter verification code
      </h2>
      <p className="text-sm text-[#667085] mt-1 text-center">
        Enter the 4-digit number that was sent to <br />
        <span className="font-medium text-black">user@email.com</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs mt-6 flex flex-col items-center"
      >
        <div className="flex justify-between w-full mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="w-14 h-14 border border-gray-300 rounded-lg text-center text-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#06543C]"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={otp.join("").length !== 4 || isSubmitting}
          className={`w-full py-2.5 rounded-lg text-white font-semibold ${
            otp.join("").length === 4
              ? "bg-[#06543C]"
              : "bg-[#98A2B3] cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Verifying..." : "Submit"}
        </button>
      </form>

      <p className="text-sm text-[#667085] mt-4">
        Didn’t receive the code?{" "}
        <button className="text-[#06543C] font-medium">Resend code</button>
      </p>
    </main>
  );
}
