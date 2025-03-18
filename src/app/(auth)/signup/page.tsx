"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import API from "@/utils/axiosInstance";
import { signupSchema } from "@/utils/validation";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import PhoneNumberInput from "@/components/auth/PhoneNumberInput";
import EmailPopup from "@/components/auth/EmailPopup";
import AuthSidebar from "@/components/auth/AuthSidebar";

const Signup = () => {
  const router = useRouter();
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate form data
      const result = signupSchema.safeParse(formData);
      if (!result.success) {
        const formattedErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path) formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
        return;
      }

      if (!termsAccepted) {
        setErrors({ terms: "You must accept the terms and conditions" });
        return;
      }

      setLoading(true);

      // API call
      const response = await API.post("/auth/register", {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (response.status === 201) {
        setShowPopup(true);
      }
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);

      // Handle backend-specific errors
      if (error.response?.data?.message) {
        const backendError = error.response.data.message.toLowerCase();

        if (backendError.includes("username")) {
          setErrors({ username: "Username is already in use" });
        } else if (backendError.includes("email")) {
          setErrors({ email: "Email is already in use" });
        } else if (backendError.includes("phone")) {
          setErrors({ phone: "Phone number is already in use" });
        } else {
          setErrors({ general: "Signup failed. Please try again later." });
        }
      } else {
        setErrors({ general: "Signup failed. Please try again later." });
      }
    } finally {
      setLoading(false);
    }
  };

  // Combine all errors into a single array
  const errorMessages = Object.values(errors).filter(Boolean);

  // Get the first error message to display
  const firstErrorMessage = errorMessages[0];

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <AuthSidebar />

      <section className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <div className="md:hidden flex justify-center mb-6">
            <Image
              src="/images/logo.svg"
              alt="Logo"
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

          {/* Error Container */}
          {firstErrorMessage && (
            <div className="mb-6 h-12 flex items-center justify-center bg-[#FEF3F2] gap-2 text-[#B42318] text-sm font-medium rounded-lg text-center">
              <Image
                src="/icons/warning.svg"
                alt="warning"
                width={12}
                height={12}
              />
              <p>{firstErrorMessage}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <FloatingLabelInput
              type="text"
              label="Username"
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              error={errors.username}
            />
            <FloatingLabelInput
              type="email"
              label="Email"
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
              label="Password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              error={errors.password}
            />
            <FloatingLabelInput
              type="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              error={errors.confirmPassword}
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
