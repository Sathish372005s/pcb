"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/Aboutpage" },
  { label: "Our Services", href: "/ServicePage" },
  { label: "Contact Us", href: "/contactPage" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to add dynamic shadow/border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 
      ${
        scrolled
          ? "border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        {/* Brand/Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2.5 transition-transform duration-200 active:scale-95"
        >
          
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Green<span className="text-pcb-green transition-colors duration-300 group-hover:text-pcb-green-dark">Circuits</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-2 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative block px-4 py-2 text-sm font-semibold transition-colors duration-300
                    ${active ? "text-pcb-green" : "text-gray-600 hover:text-pcb-green"}`}
                >
                  {item.label}
                  {/* Expanding underline effect */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-pcb-green transition-all duration-300
                      ${active ? "w-4/5" : "w-0 group-hover:w-4/5"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/contactPage"
            className="hidden items-center rounded-xl bg-pcb-green px-5.5 py-2.5 text-sm font-semibold text-white
            shadow-lg shadow-pcb-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pcb-green-dark
            hover:shadow-xl hover:shadow-pcb-green/30 active:translate-y-0 lg:inline-flex"
          >
            Get a Quote
          </Link>

          {/* Hamburger Menu Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-[5px] rounded-xl border border-gray-200 bg-gray-50/50 p-2.5 transition-all hover:bg-gray-100/80 active:scale-95 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45 bg-pcb-green" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45 bg-pcb-green" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`overflow-hidden border-gray-100 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden
        ${menuOpen ? "max-h-[340px] border-t border-b" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1.5 px-6 py-4">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200
                    ${
                      active
                        ? "bg-pcb-green/10 text-pcb-green shadow-inner"
                        : "text-gray-600 hover:bg-gray-50 hover:text-pcb-green"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-3">
            <Link
              href="/contactPage"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-pcb-green px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-pcb-green/15 active:translate-y-0.5"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}