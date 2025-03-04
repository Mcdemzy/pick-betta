"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaCommentDots,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06543C] w-full min-h-[472px] px-6 md:px-20 pt-16 pb-12">
      <section className="w-full p-4 md:p-8 flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="flex flex-col gap-2.5 max-w-[543px]">
          <div>
            <Image src="/images/logo.svg" width={140} height={48} alt="logo" />
          </div>
          <p className="text-white text-sm md:text-base">
            This website does not endorse, encourage, or facilitate illegal
            gambling. All information provided by PickBetta is intended for
            informational and entertainment purposes only. Any use of this
            information in violation of any federal, state, or local laws is
            strictly prohibited. PickBetta does not condone any illegal
            activities associated with betting or gambling. Users are
            responsible for ensuring that their activities comply with
            applicable laws.
          </p>
        </div>
        {/* Company Links & Contact */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 text-white">
          <ol className="space-y-2 md:space-y-4">
            <li className="font-bold">Company</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ol>
          <div>
            <h4 className="text-sm md:text-base">support@pickbetta.com</h4>
          </div>
        </div>
      </section>
      {/* Social Icons & Copyright */}
      <div className="mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between text-sm md:text-base text-white">
        {/* Social Icons (Mobile First) */}
        <div className="flex space-x-4 mb-4 md:mb-0 order-1 md:order-2">
          <FaFacebookF size={36} className="bg-[#6A6A6A80] py-2 rounded-full" />
          <FaCommentDots
            size={36}
            className="bg-[#6A6A6A80] py-2 rounded-full"
          />
          <FaYoutube size={36} className="bg-[#6A6A6A80] py-2 rounded-full" />
          <FaInstagram size={36} className="bg-[#6A6A6A80] py-2 rounded-full" />
        </div>
        {/* Copyright */}
        <p className="order-2 md:order-1">
          © 2025 PickBetta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
