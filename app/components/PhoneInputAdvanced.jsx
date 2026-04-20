"use client";

import { useState, useRef } from "react";

export default function PhoneInputAdvanced({
  value = "",
  onChange,
  className = "",
}) {
  const [phone, setPhone] = useState(value);
  const inputRef = useRef(null);

  const handlePhoneChange = (e) => {
    let input = e.target.value;
    let cleaned = input.replace(/\D/g, "");

    if (cleaned.startsWith("8")) {
      cleaned = "7" + cleaned.slice(1);
    }

    if (cleaned.length > 0 && !cleaned.startsWith("7")) {
      cleaned = "7" + cleaned;
    }

    if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
    }

    let formatted = "";
    if (cleaned.length === 0) {
      formatted = "";
    } else if (cleaned.length <= 1) {
      formatted = `+${cleaned}`;
    } else if (cleaned.length <= 4) {
      formatted = `+${cleaned.slice(0, 1)} (${cleaned.slice(1)}`;
    } else if (cleaned.length <= 7) {
      formatted = `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
    } else if (cleaned.length <= 9) {
      formatted = `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    } else {
      formatted = `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
    }

    setPhone(formatted);

    if (onChange) {
      onChange(cleaned);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && (phone === "+7 (" || phone === "+7")) {
      setPhone("");
      if (onChange) onChange("");
      e.preventDefault();
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <input
        ref={inputRef}
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        onKeyDown={handleKeyDown}
        placeholder="+7 (999) 999-99-99"
        className={`w-72 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 ${className}`}
      />
    </div>
  );
}
