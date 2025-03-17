"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface EmailPopupProps {
  email: string;
  onClose: () => void;
}

export default function EmailPopup({ email, onClose }: EmailPopupProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-white rounded-lg p-6 w-96 text-center shadow-lg">
        <div className="flex justify-center mb-4">
          <Image src="/icons/alert.svg" alt="Success" width={50} height={50} />
        </div>
        <h2 className="text-xl md:leading-6 font-semibold text-[#0A0A0B] mt-7.5">
          Check Your Email
        </h2>
        <p className="text-sm text-[#475467] mt-2 mb-7.5">
          Email verification link has been sent to <strong>{email}</strong>.{" "}
          <br />
          Check your email to verify your account.
        </p>
        <button
          onClick={() => router.push("/verification")}
          className="mt-4 w-full bg-[#06543C] text-white py-2 rounded-lg font-semibold cursor-pointer"
        >
          Check Email
        </button>
      </div>
    </div>
  );
}
