"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CookiesBannerProps {
  onClose: () => void;
}

export default function CookiesBanner({ onClose }: CookiesBannerProps) {
  const [selected, setSelected] = useState<"accept" | "decline" | null>(null);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (selected === "accept") {
      timer = setTimeout(() => {
        router.push("/dashboard");
        onClose();
      }, 2000); // 5 seconds delay
    } else if (selected === "decline") {
      timer = setTimeout(() => {
        onClose();
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [selected, router, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-white rounded-lg p-6 w-96 text-center shadow-lg">
        <div className="flex justify-center mb-4">
          <Image
            src="/icons/cookie.svg"
            alt="Cookies Icon"
            width={50}
            height={50}
          />
        </div>
        <h2 className="text-xl font-semibold text-[#0A0A0B] mt-4">
          Can We Store Cookies?
        </h2>
        <p className="text-sm text-[#475467] mt-2 mb-6">
          We use cookies to enhance your experience and analyze user behavior.
          You can manage your preferences anytime.
        </p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setSelected("decline")}
            className={`w-1/2 py-2 rounded-lg font-semibold transition-all ${
              selected === "decline"
                ? "bg-[#06543C] text-white"
                : "bg-[#F2F4F7] text-[#101828]"
            }`}
          >
            Decline
          </button>
          <button
            onClick={() => setSelected("accept")}
            className={`w-1/2 py-2 rounded-lg font-semibold transition-all ${
              selected === "accept"
                ? "bg-[#06543C] text-white"
                : "bg-[#F2F4F7] text-[#101828]"
            }`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
