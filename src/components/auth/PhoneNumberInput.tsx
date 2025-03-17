"use client";

import { useState } from "react";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const PhoneNumberInput = ({
  value,
  onChange,
  error,
}: PhoneNumberInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      {(focused || value) && (
        <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
      )}
      <div className="flex items-center border border-[#D0D5DD] rounded-[8px] focus-within:ring-2 focus-within:ring-[#06543C]">
        <select className="rounded-l-[8px] px-3 py-2 focus:outline-none bg-transparent">
          <option>US</option>
          <option>UK</option>
          <option>NG</option>
        </select>

        <input
          type="tel"
          placeholder="Phone Number"
          value={value} // ✅ Use the passed prop
          onChange={(e) => onChange(e.target.value)} // ✅ Use the passed prop
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 px-4 py-2 rounded-r-[8px] focus:outline-none"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{" "}
      {/* ✅ Show error */}
    </div>
  );
};

export default PhoneNumberInput;
