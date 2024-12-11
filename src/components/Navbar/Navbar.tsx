"use client";

import { useEffect, useState } from "react";
import DesktopNavSection from "./DesktopNavSection";
import MobileNavSection from "./MobileNavSection";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScreenY(window.scrollY);
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-glass-white backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <MobileNavSection screenY={screenY} />
      <DesktopNavSection screenY={screenY} />
    </header>
  );
}

export default Navbar;
