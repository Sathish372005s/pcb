"use client";

import React from "react";
import Link from "next/link";
import Header from "@/src/components/Header";

export default function Home() {
  return (
    <main className="flex-1 bg-white overflow-hidden">
      
      {/* 1. HERO HEADER */}
      <Header />

      {/* ================= 2. WHY CHOOSE US / QUALITY STANDARDS ================= */}
      <section className="py-24 bg-white border-t border-gray-100 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text info */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">Why GreenCircuits</span>
                <span className="h-[2px] w-8 bg-pcb-green rounded-full"></span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight leading-tight">
                Our Quality Standards Are Built into Every Circuit
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                We believe that hardware reliability begins long before the first solder joint. Our engineering-first process optimizes your board designs for high yield and thermal efficiency, preventing supply chain delays.
              </p>
              
              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm">✓</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Free DFM Review</h4>
                    <p className="mt-1 text-xs text-gray-500">Design for Manufacturability checked by real engineers before fabrication starts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm">✓</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Component Sourcing</h4>
                    <p className="mt-1 text-xs text-gray-500"> turn-key global procurement networks secure original parts from certified distributors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm">✓</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">IPC Class 3 Assemblies</h4>
                    <p className="mt-1 text-xs text-gray-500">Class 2 is standard; Class 3 capabilities support medical and aerospace operations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm">✓</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Engineering Support</h4>
                    <p className="mt-1 text-xs text-gray-500">Dedicated local application engineers assigned to your specific business account.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side graphical representation */}
            <div className="lg:col-span-6 flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md aspect-square bg-gray-50 border border-gray-150 rounded-3xl p-8 flex items-center justify-center overflow-hidden shadow-inner">
                <div className="absolute inset-0 pcb-grid-pattern opacity-60" />
                
                {/* Visual copper traces representation */}
                <svg className="w-4/5 h-4/5 text-pcb-green-light opacity-50 absolute pointer-events-none" viewBox="0 0 200 200" fill="none">
                  <path d="M20,100 L80,100 L120,140 L180,140" stroke="currentColor" strokeWidth="2" />
                  <path d="M50,40 L100,40 L130,70 L170,70" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="80" cy="100" r="3" fill="#41AB5D" />
                  <circle cx="120" cy="140" r="3" fill="#41AB5D" />
                  <circle cx="100" cy="40" r="3" fill="#41AB5D" />
                </svg>

                {/* Glassmorphic Stats Panel */}
                <div className="relative z-10 w-72 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md p-6.5 shadow-md flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-extrabold text-gray-900 uppercase">QA Metrics</span>
                    <span className="text-[10px] font-bold text-pcb-green bg-pcb-green/10 px-2 py-0.5 rounded-full">Pass</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-gray-800">
                        <span>Automated SMT Yield</span>
                        <span>99.98%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full bg-pcb-green" style={{ width: "99.98%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-gray-800">
                        <span>On-Time Delivery</span>
                        <span>98.6%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full bg-pcb-green" style={{ width: "98.6%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-gray-800">
                        <span>DFM Issue Catch Rate</span>
                        <span>100%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full bg-pcb-green" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 3. CAPABILITIES VISUALIZER ================= */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">Engineered Capabilities</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              We Support Diverse PCB Technologies
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              From compact high-frequency RF communication chips to high-power aluminum LED backings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tech 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="bg-white rounded-2xl border border-gray-200/50 p-6.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:shadow-md"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm mb-4">01</div>
              <h3 className="text-base font-bold text-gray-900">Rigid Multilayer</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Supporting up to 32 layers, high-density interconnections (HDI), blind and buried microvias, and impedance matching structures.
              </p>
            </div>

            {/* Tech 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="bg-white rounded-2xl border border-gray-200/50 p-6.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:shadow-md"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm mb-4">02</div>
              <h3 className="text-base font-bold text-gray-900">Flex & Rigid-Flex</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Dynamic polyimide flex layers integrated within rigid composite structures, eliminating bulky wiring looms and connectors.
              </p>
            </div>

            {/* Tech 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="bg-white rounded-2xl border border-gray-200/50 p-6.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:shadow-md"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm mb-4">03</div>
              <h3 className="text-base font-bold text-gray-900">Metal Core (MCPCB)</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Aluminum and copper-clad backing designs for high-power thermal dissipation in industrial LED lighting and automotive layouts.
              </p>
            </div>

            {/* Tech 4 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="bg-white rounded-2xl border border-gray-200/50 p-6.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:shadow-md"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green font-bold text-sm mb-4">04</div>
              <h3 className="text-base font-bold text-gray-900">High-Frequency RF</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Rogers, Teflon, and Nelco laminates with low dissipation factor (Df) parameters optimized for microwave communication.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. PRODUCTION PROCESS TIMELINE ================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">Our Workflow</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              From Schematic to Physical Product
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              A comprehensive turnkey process designed to deliver tested, working boards without delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8.5 relative">
            
            {/* Step 1 */}
            <div className="relative p-6.5 rounded-2xl border border-gray-150 bg-white" data-aos="fade-right" data-aos-delay="100">
              <span className="absolute -top-4.5 left-6.5 h-9 w-9 flex items-center justify-center rounded-xl bg-pcb-green text-xs font-bold text-white shadow-md">01</span>
              <h3 className="mt-4 text-base font-bold text-gray-900">Gerber & DFM Review</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-gray-600">
                You submit your Gerber files. Our engineers check layout routing, spacing tolerances, and thermal traps to ensure reliable fabrication.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6.5 rounded-2xl border border-gray-150 bg-white" data-aos="fade-up" data-aos-delay="200">
              <span className="absolute -top-4.5 left-6.5 h-9 w-9 flex items-center justify-center rounded-xl bg-pcb-green text-xs font-bold text-white shadow-md">02</span>
              <h3 className="mt-4 text-base font-bold text-gray-900">Sourcing & Fabrication</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-gray-600">
                We manufacture the raw multilayer laminate boards while simultaneously procuring all Bill of Materials (BOM) components globally.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6.5 rounded-2xl border border-gray-150 bg-white" data-aos="fade-left" data-aos-delay="300">
              <span className="absolute -top-4.5 left-6.5 h-9 w-9 flex items-center justify-center rounded-xl bg-pcb-green text-xs font-bold text-white shadow-md">03</span>
              <h3 className="mt-4 text-base font-bold text-gray-900">SMT/THT Assembly & QA</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-gray-600">
                High-speed solder reflow attaches chips down to 01005 sizing. AOI camera sweeps and X-ray scanners check every joint before delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. CALL TO ACTION (CTA) BANNER ================= */}
      <section className="bg-[#F1F8F4] py-16 border-t border-gray-100 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 text-center z-10" data-aos="zoom-in">
          
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            Ready to Bring Your Design to Life?
          </h2>
          <p className="mx-auto mt-4.5 max-w-xl text-sm sm:text-base text-gray-600 font-semibold leading-relaxed">
            Get instant DFM design feedback and turnaround cost estimates. Speak directly to our Chennai-based engineering desk.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contactPage"
              className="rounded-xl bg-pcb-green px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-pcb-green/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pcb-green-dark hover:shadow-lg"
            >
              Request Engineering Quote
            </Link>
            
            <Link
              href="/ServicePage"
              className="rounded-xl border border-pcb-green bg-white/90 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-pcb-green transition-all duration-300 hover:-translate-y-0.5 hover:bg-pcb-green hover:text-white"
            >
              View Capabilities Spec
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
