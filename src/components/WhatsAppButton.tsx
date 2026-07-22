"use client";

import React, { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a welcoming tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = "https://wa.me/919363766615?text=Hello%20GreenCircuits!%20I%20have%20an%20enquiry%20regarding%20PCB%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Speech Bubble */}
      <div
        className={`bg-white text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 ease-out transform origin-right ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-4 scale-75 pointer-events-none"
        }`}
      >
        <span className="block font-bold text-pcb-green-dark">Need assistance?</span>
        Chat with our PCB experts!
        {/* Little bubble arrow */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45" />
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#128C7E] hover:shadow-2xl hover:shadow-green-500/40 active:translate-y-0 active:scale-95"
      >
        {/* Dynamic Pulse Ring Effect */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-35" />

        {/* WhatsApp Icon */}
        <svg
          className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.513 5.35 1.515 5.53.003 10.03-4.494 10.034-10.022.002-2.68-1.038-5.197-2.93-7.092-1.892-1.893-4.41-2.934-7.096-2.936-5.534 0-10.036 4.498-10.04 10.026-.001 2.012.518 3.616 1.489 5.213l-.971 3.551 3.654-.959zm11.58-5.73c-.082-.136-.3-.22-.632-.387-.33-.166-1.96-.967-2.263-1.077-.302-.11-.522-.166-.742.166-.22.33-.85 1.077-1.04 1.298-.19.22-.38.24-.712.074-.33-.166-1.393-.513-2.653-1.637-1.012-.903-1.694-2.02-1.893-2.352-.2-.33-.02-.508.146-.673.148-.148.33-.387.495-.58.165-.19.22-.33.33-.553.11-.22.05-.414-.025-.58-.075-.166-.742-1.79-.1017-2.42-.268-.646-.53-.56-.743-.57-.21-.01-.453-.01-.696-.01-.242 0-.638.09-1.018.5-.38.41-1.45 1.417-1.45 3.456s1.492 4.004 1.7 4.28c.207.276 2.937 4.485 7.11 6.285 1.0.43 1.77.686 2.38.878 1.01.32 1.92.275 2.64.167.8-.12 2.263-.925 2.58-1.82.317-.894.317-1.658.223-1.82z" />
        </svg>
      </a>
    </div>
  );
}
