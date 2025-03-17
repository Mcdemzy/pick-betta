"use client";

import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";

interface FloatingLabelInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPhoneNumberField?: boolean;
  error?: string;
}

const FloatingLabelInput = ({
  type,
  placeholder,
  value,
  onChange,
  isPhoneNumberField = false,
}: FloatingLabelInputProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  return (
    <div className="relative w-full">
      {!isPhoneNumberField && (focused || value) && (
        <label className="text-sm text-gray-600 mb-1 block">
          {placeholder}
        </label>
      )}

      <input
        type={isPasswordField && !showPassword ? "password" : "text"}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={!focused && !value ? placeholder : ""}
        className="w-full border border-[#D0D5DD] px-4 py-2 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#06543C] text-[#101828] md:leading-6 pr-10"
      />

      {isPasswordField && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute right-3 text-gray-500 ${
            focused || value ? "top-9" : "top-3"
          }`}
        >
          <RxEyeClosed size={18} />
        </button>
      )}
    </div>
  );
};

export default FloatingLabelInput;
