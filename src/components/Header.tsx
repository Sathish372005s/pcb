"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-[#F1F8F4] pt-8 md:pt-12 pb-20 lg:pb-28 font-sans pcb-grid-pattern">
      
      {/* ================= BACKGROUND CIRCUITS (RESPONSIVE & STRONGER) ================= */}
      
      {/* Top-Right Circuit Design (Anchored, strong visibility) */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] pointer-events-none z-0 opacity-60">
        <svg
          className="w-full h-full text-pcb-green"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Main green traces */}
          <path
            d="M 400 50 L 300 50 L 220 130 L 100 130 L 40 190 L 0 190"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-draw-trace"
          />
          <path
            d="M 400 110 L 320 110 L 260 170 L 150 170 L 110 210 L 60 210"
            stroke="#A1D99B"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-draw-trace"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M 300 0 L 250 50 L 180 50"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          
          {/* Real SMT style copper pads (glowing green) */}
          <circle cx="300" cy="50" r="6" fill="#41AB5D" className="animate-pulse-glow" />
          <circle cx="300" cy="50" r="10" stroke="#41AB5D" strokeWidth="1.5" strokeOpacity="0.4" className="animate-pulse-glow" />
          
          <circle cx="220" cy="130" r="5" fill="#A1D99B" />
          <circle cx="100" cy="130" r="5" fill="#41AB5D" />
          
          <circle cx="40" cy="190" r="6" fill="#A1D99B" className="animate-pulse-glow" />
          <circle cx="40" cy="190" r="10" stroke="#A1D99B" strokeWidth="1.5" strokeOpacity="0.4" className="animate-pulse-glow" />
          
          <circle cx="150" cy="170" r="4.5" fill="#41AB5D" />
          <circle cx="110" cy="210" r="5" fill="#A1D99B" />
        </svg>
      </div>

      {/* Bottom-Left Circuit Design (Anchored, strong visibility) */}
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] pointer-events-none z-0 opacity-60">
        <svg
          className="w-full h-full text-pcb-green"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Main green traces */}
          <path
            d="M 0 350 L 100 350 L 180 270 L 280 270 L 340 210 L 400 210"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-draw-trace"
            style={{ animationDelay: "0.2s" }}
          />
          <path
            d="M 0 290 L 80 290 L 140 230 L 230 230 L 290 170 L 350 170"
            stroke="#A1D99B"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-draw-trace"
            style={{ animationDelay: "0.7s" }}
          />
          
          {/* PCB Junction points */}
          <circle cx="100" cy="350" r="6" fill="#41AB5D" className="animate-pulse-glow" />
          <circle cx="100" cy="350" r="10" stroke="#41AB5D" strokeWidth="1.5" strokeOpacity="0.4" className="animate-pulse-glow" />
          
          <circle cx="180" cy="270" r="5" fill="#A1D99B" />
          <circle cx="280" cy="270" r="5" fill="#41AB5D" />
          
          <circle cx="340" cy="210" r="6" fill="#A1D99B" className="animate-pulse-glow" />
          <circle cx="340" cy="210" r="10" stroke="#A1D99B" strokeWidth="1.5" strokeOpacity="0.4" className="animate-pulse-glow" />
          
          <circle cx="140" cy="230" r="4.5" fill="#41AB5D" />
          <circle cx="290" cy="170" r="5" fill="#A1D99B" />
        </svg>
      </div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="relative mx-auto max-w-5xl px-6 text-center z-10">
        
        {/* Intro Tag Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-pcb-green/30 bg-white px-4.5 py-2 text-xs font-bold tracking-wide text-pcb-green-dark shadow-sm ">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pcb-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pcb-green"></span>
          </span>
          State-of-the-Art PCB Assembly (SMT & THT)
        </div>

        {/* Center Quote Section */}
        <div className="relative mt-10 max-w-4xl mx-auto">
          {/* Stylized Huge Background Quote Mark Left */}
          <span className="absolute -top-12 -left-2 md:-left-8 text-8xl md:text-9xl font-serif text-pcb-green/20 select-none pointer-events-none">
            “
          </span>

          <blockquote className="relative px-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] drop-shadow-sm">
              Precision in <span className="text-pcb-green">every joint</span>.
              <br />
              Speed in <span className="text-pcb-green">every delivery</span>.
              <br />
              Connecting <span className="text-gray-900 border-b-4 border-pcb-green-light">your path</span> to innovation.
            </h1>
          </blockquote>

          {/* Stylized Huge Background Quote Mark Right */}
          <span className="absolute -bottom-16 -right-2 md:-right-8 text-8xl md:text-9xl font-serif text-pcb-green/20 select-none pointer-events-none">
            ”
          </span>
        </div>

        {/* Quote Author Label */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          <span className="h-[3px] w-10 bg-pcb-green rounded-full"></span>
          <span className="text-xs font-extrabold tracking-widest text-pcb-green-dark uppercase">
            The GreenCircuits Quality Promise
          </span>
          <span className="h-[3px] w-10 bg-pcb-green rounded-full"></span>
        </div>

        {/* Subtitle/Description */}
        <p className="mx-auto mt-8 max-w-2xl text-base text-gray-700 sm:text-lg font-medium leading-relaxed">
          We turn your schematics into physical products with high-precision SMT placement, thorough AOI/X-ray inspection, and seamless support from prototyping to full production.
        </p>

        {/* Action Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button: Get Quote */}
          <Link
            href="/contactPage"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-pcb-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-pcb-green/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pcb-green-dark hover:shadow-xl hover:shadow-pcb-green/40 active:translate-y-0"
          >
            Calculate Instant Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Secondary Button: Explore Capabilities with Horizontal Slide Fill */}
          <Link
            href="/ServicePage"
            className="group relative z-10 overflow-hidden flex w-full sm:w-auto items-center justify-center rounded-xl border-2 border-pcb-green bg-white/40 backdrop-blur-sm px-8 py-[14px] text-base font-bold text-pcb-green transition-colors duration-300 hover:text-white"
          >
            {/* Sliding background hover effect */}
            <span className="absolute inset-0 -z-10 bg-pcb-green scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            Explore Services
          </Link>
        </div>

        {/* Feature Grid / Key Capabilities */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-sm p-6.5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:bg-white hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green transition-colors duration-300 group-hover:bg-pcb-green group-hover:text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-pcb-green-dark">
              Fast-Turn Prototyping
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Get fully assembled PCB prototypes in as little as 24-48 hours. Quick responses, instant quotes, and zero delays.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-sm p-6.5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:bg-white hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green transition-colors duration-300 group-hover:bg-pcb-green group-hover:text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-pcb-green-dark">
              99.98% Defect-Free
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              State-of-the-art automated optical inspection (AOI), X-ray testing, and manual inspection ensure flawless solder joint quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-sm p-6.5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/40 hover:bg-white hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green transition-colors duration-300 group-hover:bg-pcb-green group-hover:text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l-3 3m3-3l3 3" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-pcb-green-dark">
              Turnkey Components
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              We source fabrication, supply chains, assembly, and testing. Complete material management or consigned inventory options.
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

