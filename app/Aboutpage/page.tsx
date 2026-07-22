"use client";

import React from "react";
import Link from "next/link";

export default function Aboutpage() {
  return (
    <main className="flex-1 bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F1F8F4] py-16 md:py-24 pcb-grid-pattern border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 text-center z-10">
          <span data-aos="fade-down" className="inline-flex items-center gap-1.5 rounded-full bg-pcb-green/10 px-4 py-1.5 text-xs font-bold tracking-wide text-pcb-green-dark">
            Our Corporate Profile
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-[1.15]">
            Engineering the <span className="text-pcb-green">Foundations</span> <br />
            of Tomorrow's Electronics
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed font-medium">
            Based in the tech corridor of ELCOT SEZ Chennai, GreenCircuits is an industry-leading manufacturer of high-precision PCB assemblies and multi-layer fabrications.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-20 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Driving innovation through speed and precision.
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Established with a focus on quick-turn prototypes and medium-volume assemblies, GreenCircuits bridges the gap between hardware designs and physical products. We manage the entire lifecycle of your electronic board—from component sourcing and bare-board fabrication to pick-and-place assembly, visual testing, and final enclosure boxing.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our state-of-the-art facility features automated manufacturing platforms capable of handling components down to 0201 packages, micro-BGAs, and complex dual-sided layouts with exceptional solder integrity.
            </p>
          </div>
          
          <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 bg-[#F0FDF4]/30 p-6.5 shadow-sm">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-950">Turnaround Speed</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Prototypes in 24-48 hours. Expedited component procurement channels and localized logistics ensure no timeline lags.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#F0FDF4]/30 p-6.5 shadow-sm">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-950">Guaranteed Quality</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                IPC-A-610 Class 2 & 3 compliant assembly. 3D AOI and real-time X-ray verification guarantee zero solder voids.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#F0FDF4]/30 p-6.5 shadow-sm">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-950">Expert Team</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                IP-certified operators, dedicated manufacturing engineers, and experienced supply chain managers.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#F0FDF4]/30 p-6.5 shadow-sm">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-950">Global Supply Chain</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Strategic procurement channels prevent IC component shortages, sourcing original parts from authorized distributors globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES INDEX */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">
              Production Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              High-Precision Board Manufacturing Spec
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Technical limits designed for high-density interconnect (HDI) and mission-critical applications.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-2xl border border-gray-200/50 p-6 text-center">
              <span className="block text-4xl font-extrabold text-pcb-green-dark">1 - 32</span>
              <span className="block mt-2 text-sm font-bold text-gray-950">PCB Layer Counts</span>
              <p className="mt-2 text-xs text-gray-500">Rigid, Flex, and Rigid-Flex layouts supported.</p>
            </div>
            
            {/* Stat 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-2xl border border-gray-200/50 p-6 text-center">
              <span className="block text-4xl font-extrabold text-pcb-green-dark">0201</span>
              <span className="block mt-2 text-sm font-bold text-gray-950">Minimum SMT Size</span>
              <p className="mt-2 text-xs text-gray-500">Fine-pitch BGA and micro-component pick & place.</p>
            </div>

            {/* Stat 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-2xl border border-gray-200/50 p-6 text-center">
              <span className="block text-4xl font-extrabold text-pcb-green-dark">3.0 mil</span>
              <span className="block mt-2 text-sm font-bold text-gray-950">Trace & Space Limit</span>
              <p className="mt-2 text-xs text-gray-500">Laser micro-via drilling for ultra-fine routing.</p>
            </div>

            {/* Stat 4 */}
            <div data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-2xl border border-gray-200/50 p-6 text-center">
              <span className="block text-4xl font-extrabold text-pcb-green-dark">99.98%</span>
              <span className="block mt-2 text-sm font-bold text-gray-950">Yield Rate</span>
              <p className="mt-2 text-xs text-gray-500">Thorough automated visual & functional audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FACILITY WALKTHROUGH */}
      <section className="py-20 mx-auto max-w-7xl px-6 lg:px-10">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">
            Facility Walkthrough
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Automated Production Flow
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            How we convert bare copper panels and components into tested, functional assemblies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div data-aos="fade-right" data-aos-delay="100" className="relative pl-10 border-l-2 border-pcb-green/30">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-pcb-green text-[10px] font-bold text-white shadow-sm">
              1
            </span>
            <h3 className="text-base font-bold text-gray-900">IQC & Paste Printing</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              All components undergo incoming inspection (IQC). Solder paste is printed onto bare PCBs using high-precision metal stencils and monitored via 3D solder paste inspection (SPI).
            </p>
          </div>

          {/* Step 2 */}
          <div data-aos="fade-up" data-aos-delay="200" className="relative pl-10 border-l-2 border-pcb-green/30">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-pcb-green text-[10px] font-bold text-white shadow-sm">
              2
            </span>
            <h3 className="text-base font-bold text-gray-900">High-Speed SMT & Reflow</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Automated high-speed chip shooters place parts with micron accuracy. Boards enter a multi-zone reflow oven under controlled nitrogen gas templates to finalize joints.
            </p>
          </div>

          {/* Step 3 */}
          <div data-aos="fade-left" data-aos-delay="300" className="relative pl-10 border-l-2 border-pcb-green/30">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-pcb-green text-[10px] font-bold text-white shadow-sm">
              3
            </span>
            <h3 className="text-base font-bold text-gray-900">3D AOI & X-Ray Testing</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Assembled boards undergo 3D Automated Optical Inspection (AOI). Complex BGA pads undergo real-time X-ray testing to identify invisible solder bridges or component voids.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-[#F1F8F4] py-16 border-t border-gray-100">
        <div data-aos="zoom-in" className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950">
            Ready to build your next hardware product?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-gray-600 font-medium">
            Contact us for instant layout routing feedback and turnaround quotes. Get your Gerber files analyzed today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contactPage"
              className="rounded-xl bg-pcb-green px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-pcb-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pcb-green-dark hover:shadow-lg hover:shadow-pcb-green/30"
            >
              Get a Quote Now
            </Link>
            <Link
              href="/ServicePage"
              className="rounded-xl border border-pcb-green bg-white/80 backdrop-blur-sm px-6 py-3.5 text-sm font-bold text-pcb-green transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
