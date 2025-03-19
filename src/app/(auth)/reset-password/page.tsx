"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import AuthSidebar from "@/components/auth/AuthSidebar";
import Link from "next/link";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();
  const isFormValid = password.length >= 6 && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 2000);
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
              alt="PickBetta Logo"
              width={158}
              height={40}
              className="h-10"
            />
          </div>

          <h2 className="md:text-4xl text-[1.5rem] font-semibold text-[#101828] text-center">
            Create New Password
          </h2>
          <p className="mb-6 mt-2.5 text-[.875rem] text-[#667085] text-center">
            Your new password must be different from your previous password.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <FloatingLabelInput
              type="password"
              label="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FloatingLabelInput
              type="password"
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full rounded px-4 py-2 text-white font-semibold ${
                isFormValid ? "bg-[#06543C]" : "bg-[#98A2B3] cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Resetting..." : "Submit"}
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-sm text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/success-icon.svg"
                alt="Success"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold">Success!</h3>
            <p className="text-sm text-[#667085] mt-2">
              Your password has been changed successfully.
            </p>
            <button
              className="mt-4 w-full bg-[#06543C] text-white py-2 rounded-md font-semibold"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      )}

      <p className="text-[#667085] absolute right-8 text-sm bottom-4 hidden md:block">
        Copyright 2025
      </p>
    </main>
  );
};

export default ResetPassword;
