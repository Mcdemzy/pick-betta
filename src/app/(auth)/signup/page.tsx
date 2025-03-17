"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import AuthSidebar from "@/components/auth/AuthSidebar";
import PhoneNumberInput from "@/components/auth/PhoneNumberInput";
import EmailPopup from "@/components/auth/EmailPopup";
import Link from "next/link";
import API from "@/utils/axiosInstance";
import { signupSchema } from "@/utils/validation";
import { z } from "zod";

const Signup = () => {
  const router = useRouter();

  // State for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Handle Input Change
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle Form Submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    try {
      // Validate inputs with Zod
      signupSchema.parse(formData);

      if (!termsAccepted) {
        setErrors({ terms: "You must accept the terms and conditions" });
        return;
      }

      setLoading(true);

      // Make API request
      const response = await API.post("/auth/register", {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (response.status === 201) {
        setShowPopup(true); // Show verification popup
      }
    } catch (error: any) {
      setLoading(false);

      if (error instanceof z.ZodError) {
        // Handle validation errors
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
      } else {
        console.error("Signup error:", error.response?.data || error.message);
        setErrors({ general: "Signup failed. Please try again later." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <AuthSidebar />

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
            Sign up for an account
          </h2>
          <p className="mb-6 mt-2.5 text-[.875rem] md:text-[1rem] text-[#667085] text-center">
            Get started today by entering just a few details
          </p>

          <form className="space-y-6" onSubmit={handleSignup}>
            <FloatingLabelInput
              type="text"
              placeholder="Enter Username"
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              error={errors.username}
            />
            <FloatingLabelInput
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
            />
            <PhoneNumberInput
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              error={errors.phone}
            />
            <FloatingLabelInput
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              error={errors.password}
            />
            <FloatingLabelInput
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              error={errors.confirmPassword}
            />

            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}

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
                I agree to the{" "}
                <Link href="#" className="text-[#06543C] underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#06543C] underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded px-4 py-2 text-white font-semibold ${
                loading ? "bg-gray-500" : "bg-[#06543C]"
              }`}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
      </section>

      {/* Show Email Verification Popup */}
      {showPopup && (
        <EmailPopup
          email={formData.email}
          onClose={() => setShowPopup(false)}
        />
      )}
    </main>
  );
};

export default Signup;
