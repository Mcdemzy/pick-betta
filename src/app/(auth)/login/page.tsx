"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FloatingLabelInput from "@/components/auth/FloatingLabelInput";
import AuthSidebar from "@/components/auth/AuthSidebar";
import Link from "next/link";
import CookiesBanner from "@/components/auth/CookiesBanner";
import API from "@/utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isFormValid) {
      setLoading(true);

      try {
        // Call the login endpoint
        const response = await API.post("/auth/login", {
          email,
          password,
        });

        if (response.status === 200) {
          if (response.data.data.emailVerified) {
            // Redirect to dashboard for verified users
            setShowCookiesPopup(true);
            router.push("/dashboard");
          } else {
            // Call the /verify/email endpoint to send a new OTP
            await API.post("/verify/email", { email });

            // Redirect to verification page for unverified users
            router.push(`/verification?email=${encodeURIComponent(email)}`);
          }
        }
      } catch (error: any) {
        console.error("Login error:", error.response?.data || error.message);
        setError("Invalid email or password. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
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

          {/* Error Message */}
          {error && (
            <div className="mb-6 h-12 flex items-center justify-center bg-[#FEF3F2] gap-2 text-[#B42318] text-sm font-medium rounded-lg text-center">
              <Image
                src="/icons/warning.svg"
                alt="warning"
                width={12}
                height={12}
              />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <FloatingLabelInput
              type="email"
              label="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FloatingLabelInput
              type="password"
              label="Enter Password"
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
              disabled={!isFormValid || loading}
              className={`w-full rounded px-4 py-2 text-white font-semibold ${
                isFormValid && !loading
                  ? "bg-[#06543C]"
                  : "bg-[#98A2B3] cursor-not-allowed"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
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
