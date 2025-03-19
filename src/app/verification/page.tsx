"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import API from "@/utils/axiosInstance";

export default function EmailVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  // Extract email from query parameters (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const emailParam = searchParams.get("email");

      if (!emailParam) {
        // Redirect to signup if email is missing
        router.push("/signup");
      } else {
        setEmail(emailParam);
      }
    }
  }, [router]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (otp.join("").length === 4) {
      setIsSubmitting(true);

      try {
        // Call the OTP verification endpoint
        const response = await API.post("/verify/otp", {
          email,
          otp: otp.join(""),
        });

        if (response.status === 200) {
          router.push("/dashboard"); // Redirect to dashboard on success
        }
      } catch (error: any) {
        console.error(
          "OTP verification error:",
          error.response?.data || error.message
        );
        setError("Incorrect verification code. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleResendCode = async () => {
    try {
      // Call the /verify/email endpoint to resend OTP
      const response = await API.post("/verify/email", { email });

      if (response.status === 200) {
        alert("A new OTP has been sent to your email.");
      }
    } catch (error: any) {
      console.error("Resend OTP error:", error.response?.data || error.message);
      setError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center pt-10 min-h-screen px-6">
      {/* Logo */}
      <Image
        src="/images/logo.svg"
        alt="PickBetta Logo"
        width={158}
        height={40}
        className="mb-6"
      />

      {/* Title & Subtitle */}
      <h2 className="text-xl font-semibold text-[#101828] text-center">
        Enter verification code
      </h2>
      <p className="text-sm text-[#667085] mt-1 text-center">
        Enter the 4-digit number that was sent to <br />
        <span className="font-medium text-black">{email}</span>
      </p>

      {/* OTP Input Fields */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs mt-6 flex flex-col items-center"
      >
        <div className="flex justify-between w-full mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className={`w-14 h-14 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-lg text-center text-xl font-medium focus:outline-none focus:ring-2 ${
                error ? "focus:ring-red-500" : "focus:ring-[#06543C]"
              }`}
            />
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={otp.join("").length !== 4 || isSubmitting}
          className={`w-full py-3 rounded-lg text-white font-semibold ${
            otp.join("").length === 4
              ? "bg-[#06543C]"
              : "bg-[#98A2B3] cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Verifying..." : "Submit"}
        </button>
      </form>

      {/* Resend Code */}
      <p className="text-sm text-[#667085] mt-4">
        Didn’t receive the code?{" "}
        <button
          onClick={handleResendCode}
          className="text-[#06543C] font-medium"
        >
          Resend code
        </button>
      </p>
    </main>
  );
}
