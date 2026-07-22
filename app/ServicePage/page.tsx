"use client";

import React from "react";
import Link from "next/link";

export default function ServicePage() {
  return (
    <main className="flex-1 bg-white font-sans overflow-hidden">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#F1F8F4] py-20 md:py-28 pcb-grid-pattern border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 pointer-events-none" />
        
        {/* Animated Background Traces */}
        <div className="absolute -top-12 -right-12 w-96 h-96 pointer-events-none opacity-40 z-0">
          <svg className="w-full h-full text-pcb-green" viewBox="0 0 100 100" fill="none">
            <path d="M100,20 L70,20 L50,40 L10,40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="70" cy="20" r="1.5" fill="currentColor" />
            <circle cx="50" cy="40" r="1.5" fill="currentColor" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center z-10">
          <span 
            data-aos="fade-down"
            className="inline-flex items-center gap-1.5 rounded-full bg-pcb-green/10 px-4 py-1.5 text-xs font-bold tracking-wide text-pcb-green-dark"
          >
            Capabilities Spec
          </span>
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-[1.15]"
          >
            Our <span className="text-pcb-green">Services</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed font-semibold"
          >
            End-to-end PCB solutions — from raw copper fabrication to fully assembled and certified boards.
          </p>
        </div>
      </section>

      {/* ================= 2. PCB FABRICATION SECTION (Alternating: Text Left, Image Right) ================= */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-10 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col gap-6" data-aos="fade-right">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">01 / Fabrication</span>
                <span className="h-[2px] w-8 bg-pcb-green rounded-full"></span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-tight">
                PCB Fabrication
              </h2>
              <p className="mt-2 text-lg font-bold text-pcb-green-dark">
                Precision-Engineered Boards, Built to Spec
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              We manufacture high-quality printed circuit boards using industry-standard processes, tight tolerances, and rigorous quality checks — from single prototypes to full production runs.
            </p>

            {/* List offerings */}
            <div className="mt-4 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2">What we offer:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  { title: "Single, Double & Multilayer", desc: "Up to 12+ layers for complex designs" },
                  { title: "Material Options", desc: "FR4, Aluminum, Rogers, Flex & Rigid-Flex" },
                  { title: "Surface Finishes", desc: "HASL, Lead-Free HASL, ENIG, OSP, Silver/Tin" },
                  { title: "Fast Turnaround", desc: "Prototype runs in 24–48h, production scaled" },
                  { title: "Impedance Control", desc: "Precision trace tuning for high-speed & RF" },
                  { title: "Solder Mask & Silkscreen", desc: "Custom colors, fine-pitch legend printing" },
                  { title: "Panelization Setup", desc: "Optimized panel layouts for cost efficiency" },
                  { title: "Quality Assurance", desc: "Electrical test (Flying Probe), AOI audit" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="h-5 w-5 shrink-0 flex items-center justify-center rounded-md bg-pcb-green/10 text-pcb-green text-[10px] font-bold mt-0.5">✓</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-800 leading-tight">{item.title}</span>
                      <span className="block text-[10px] text-gray-500 mt-0.5">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Image with Float Specs */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group max-w-md w-full">
              
              {/* Glow Accent behind Image */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-pcb-green/20 to-pcb-green-light/20 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
              
              {/* Premium Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[3/2]">
                <img 
                  src="/pcb_fabrication.jpg" 
                  alt="PCB Fabrication Line" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Tech Spec Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-150 p-4 shadow-lg max-w-[170px] pointer-events-none transition-transform duration-300 group-hover:-translate-y-1">
                <span className="block text-[10px] font-extrabold text-pcb-green uppercase tracking-wider">Fabrication Limits</span>
                <span className="block text-sm font-bold text-gray-900 mt-1">Min Trace: 3.0 mil</span>
                <span className="block text-[9px] text-gray-500 mt-0.5">Laser-Drilled Microvias</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. PCB ASSEMBLY SECTION (Alternating: Image Left, Text Right) ================= */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Float Specs */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center" data-aos="fade-right">
            <div className="relative group max-w-md w-full">
              
              {/* Glow Accent behind Image */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-pcb-green/20 to-pcb-green-light/20 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
              
              {/* Premium Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[3/2]">
                <img 
                  src="/pcb_assembly.jpg" 
                  alt="PCB Assembly Line" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Tech Spec Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-150 p-4 shadow-lg max-w-[170px] pointer-events-none transition-transform duration-300 group-hover:-translate-y-1">
                <span className="block text-[10px] font-extrabold text-pcb-green uppercase tracking-wider">Assembly Speed</span>
                <span className="block text-sm font-bold text-gray-900 mt-1">40,000 CPH</span>
                <span className="block text-[9px] text-gray-500 mt-0.5">SMT Placement Accuracy</span>
              </div>

            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6" data-aos="fade-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">02 / Assembly</span>
                <span className="h-[2px] w-8 bg-pcb-green rounded-full"></span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-tight">
                PCB Assembly (SMT & THT)
              </h2>
              <p className="mt-2 text-lg font-bold text-pcb-green-dark">
                From Bare Board to Working Product
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Our assembly line combines automated precision with hands-on quality control, supporting both Surface Mount Technology (SMT) and Through-Hole Technology (THT) — including mixed-technology boards.
            </p>

            {/* List offerings */}
            <div className="mt-4 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2">What we offer:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  { title: "SMT Assembly", desc: "High-speed pick-and-place, 01005 to BGAs/QFNs" },
                  { title: "THT Assembly", desc: "Wave soldering & selective soldering for pins" },
                  { title: "Mixed Tech Integration", desc: "Combined SMT + THT on a single board" },
                  { title: "BGA/QFN Rework", desc: "X-ray inspection & precision rework tools" },
                  { title: "AOI & X-Ray Auditing", desc: "100% automated optical + hidden joints inspection" },
                  { title: "Functional Testing", desc: "ICT (In-circuit) and FCT (Functional) options" },
                  { title: "Conformal Coating", desc: "Protection against moisture, dust & corrosion" },
                  { title: "Box Build & Cabling", desc: "Enclosure fitting, wiring and final boxing" },
                  { title: "Prototype to Mass", desc: "Scalable from 1 to thousands of units easily" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="h-5 w-5 shrink-0 flex items-center justify-center rounded-md bg-pcb-green/10 text-pcb-green text-[10px] font-bold mt-0.5">✓</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-800 leading-tight">{item.title}</span>
                      <span className="block text-[10px] text-gray-500 mt-0.5">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. CALL TO ACTION SECTION ================= */}
      <section className="bg-[#F1F8F4] py-20 border-t border-gray-100 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 text-center z-10" data-aos="zoom-in">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            Get an Engineering Quote for Your Board
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-700 font-semibold leading-relaxed">
            Upload your Gerber design files for a fast DFM review and detailed cost calculation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contactPage"
              className="rounded-xl bg-pcb-green px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-pcb-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pcb-green-dark hover:shadow-lg hover:shadow-pcb-green/30"
            >
              Get a Quote Now
            </Link>
            <Link
              href="/Aboutpage"
              className="rounded-xl border border-pcb-green bg-white/80 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-pcb-green transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
