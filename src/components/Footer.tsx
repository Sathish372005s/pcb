"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 font-sans mt-auto border-t border-gray-800">
      
      {/* Main Footer Links & Info Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-block shrink-0">
            <span className="text-xl font-bold tracking-tight text-white">
              Green<span className="text-pcb-green">Circuits</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            State-of-the-art PCB Assembly and Fabrication services. Sourcing high-precision components, managing strict quality controls, and delivering turnkey solutions from prototype to high-volume production.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="h-9 w-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-pcb-green text-white transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a href="#" className="h-9 w-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-pcb-green text-white transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="h-9 w-9 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-pcb-green text-white transition-colors duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">
            Explore Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-pcb-green transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/Aboutpage" className="hover:text-pcb-green transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/ServicePage" className="hover:text-pcb-green transition-colors duration-200">Our Services</Link>
            </li>
            <li>
              <Link href="/contactPage" className="hover:text-pcb-green transition-colors duration-200">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: PCB Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">
            Our Offerings
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/ServicePage" className="hover:text-pcb-green transition-colors duration-200">PCB Fabrication (1-32 Layers)</Link>
            </li>
            <li>
              <Link href="/ServicePage" className="hover:text-pcb-green transition-colors duration-200">PCB Assembly (SMT & THT)</Link>
            </li>
            <li>
              <Link href="/ServicePage" className="hover:text-pcb-green transition-colors duration-200">Fast-Turn Prototyping</Link>
            </li>
            <li>
              <Link href="/ServicePage" className="hover:text-pcb-green transition-colors duration-200">Turnkey Component Sourcing</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Details (Dummy Address) */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">
            Support Office
          </h3>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-gray-400">
            <li className="flex gap-2.5 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-pcb-green shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                Building 2A, ELCOT SEZ,<br />
                IT Expressway, Sholinganallur,<br />
                Chennai - 600119,<br />
                Tamil Nadu, India.
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-pcb-green shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.019a14.549 14.549 0 01-6.908-6.908l2.019-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:+919363766615" className="hover:text-white transition-colors duration-200">+91 93637 66615</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-pcb-green shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@greencircuits.com" className="hover:text-white transition-colors duration-200">info@greencircuits.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GreenCircuits. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
