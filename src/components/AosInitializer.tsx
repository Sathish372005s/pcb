"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosInitializer() {
  useEffect(() => {
    // Import AOS dynamically to ensure it runs only in the browser
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800, // Animation duration in ms
        once: true,    // Run animations only once when scrolling down
        easing: "ease-out-quad", // Smooth deceleration transition
        delay: 50,     // Delay between scroll triggers
        offset: 80,    // Offset from screen edge to trigger animation
      });
    });
  }, []);

  return null;
}
