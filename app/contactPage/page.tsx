"use client";

import React, { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  estimatedVolume: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "both",
    estimatedVolume: "prototype",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message or project requirements are required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Mock API submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "both",
      estimatedVolume: "prototype",
      message: "",
    });
    setSelectedFile(null);
  };

  return (
    <main className="flex-1 bg-white font-sans overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#F1F8F4] py-16 md:py-24 pcb-grid-pattern border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 text-center z-10">
          <span 
            data-aos="fade-down"
            className="inline-flex items-center gap-1.5 rounded-full bg-pcb-green/10 px-4 py-1.5 text-xs font-bold tracking-wide text-pcb-green-dark"
          >
            Connect With Engineering
          </span>
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-[1.15]"
          >
            Get a <span className="text-pcb-green">Quote</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed font-medium"
          >
            Submit your project specifications or Gerber files. Our engineers will perform a DFM analysis and respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT & FORM ================= */}
      <section className="py-20 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS & TRUST INFO (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-10" data-aos="fade-right">
            
            {/* Contact Details Card */}
            <div>
              <span className="text-xs font-extrabold tracking-widest text-pcb-green uppercase">Contact Channels</span>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Direct Inquiries</h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Reach out directly for urgent project assistance or sales advice. We are active during corporate hours.
              </p>
              
              <div className="mt-8 flex flex-col gap-6.5">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Manufacturing Facility</h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      Plot No. 12, IT Highway, ELCOT SEZ,<br />
                      Sholinganallur, Chennai - 600119, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.187-4.165-7-7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Phone Support</h4>
                    <p className="mt-1 text-xs text-gray-600">+91 (44) 4567-8910</p>
                    <p className="text-[10px] text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-pcb-green/10 text-pcb-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Email Inquiries</h4>
                    <p className="mt-1 text-xs text-gray-600 hover:text-pcb-green transition-colors duration-200">
                      <a href="mailto:engineering@greencircuits.in">engineering@greencircuits.in</a>
                    </p>
                    <p className="text-[10px] text-gray-400">Response guaranteed in 12-24 hours</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Certification / Quality Trust Badges */}
            <div className="rounded-2xl border border-gray-150 bg-gray-50/50 p-6.5">
              <h4 className="text-xs font-extrabold tracking-wider text-gray-950 uppercase mb-4">Manufacturing Standards</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-gray-200/50 px-4 py-3 text-center shadow-xs">
                  <span className="block text-xs font-bold text-gray-900">IPC-A-610</span>
                  <span className="text-[10px] text-gray-500 font-medium">Class 2 & 3 Assembly</span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200/50 px-4 py-3 text-center shadow-xs">
                  <span className="block text-xs font-bold text-gray-900">ISO 9001:2015</span>
                  <span className="text-[10px] text-gray-500 font-medium">Quality Management</span>
                </div>
              </div>
            </div>

            {/* Mock Map / Layout Design */}
            <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-52 bg-gray-100 group">
              <div className="absolute inset-0 pcb-grid-pattern opacity-60 bg-[#E8F5EE] group-hover:scale-105 transition-transform duration-500" />
              
              {/* Fake Map Elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pcb-green opacity-30"></span>
                  <span className="relative flex items-center justify-center rounded-full h-10 w-10 bg-pcb-green text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs max-w-xs pointer-events-none">
                <span className="block text-[10px] font-bold text-gray-900">ELCOT SEZ Chennai</span>
                <span className="block text-[9px] text-gray-500">Tamil Nadu, India</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM (7 Cols) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="rounded-3xl border border-gray-200/80 bg-white p-7 md:p-9 shadow-lg shadow-gray-100/50 relative">
              
              {submitSuccess && (
                <div className="absolute inset-0 rounded-3xl bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-pcb-green text-white shadow-lg mb-6 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-950">Thank You!</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md">
                    Your enquiry details and design specifications have been successfully sent to our engineering team. We've logged your request and will reach out shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 rounded-xl border border-pcb-green bg-white px-5.5 py-2.5 text-xs font-bold text-pcb-green transition-all hover:bg-pcb-green hover:text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5.5">
                
                {/* Section Header */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-950">Request Fabrication & Assembly Quote</h3>
                  <p className="mt-1.5 text-xs text-gray-500">Please fill out the form fields. Required fields are marked *</p>
                </div>

                {/* Grid Inputs: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-gray-800">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Satheesh Kumar" 
                      className={`w-full rounded-xl border px-4.5 py-3 text-sm text-gray-800 shadow-inner focus:outline-none focus:ring-2
                        ${errors.name ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-pcb-green focus:ring-pcb-green/10"}`}
                    />
                    {errors.name && <span className="text-[10px] font-semibold text-red-500 mt-0.5">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-800">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. satheesh@example.com" 
                      className={`w-full rounded-xl border px-4.5 py-3 text-sm text-gray-800 shadow-inner focus:outline-none focus:ring-2
                        ${errors.email ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-pcb-green focus:ring-pcb-green/10"}`}
                    />
                    {errors.email && <span className="text-[10px] font-semibold text-red-500 mt-0.5">{errors.email}</span>}
                  </div>
                </div>

                {/* Grid Inputs: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-800">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210" 
                      className="w-full rounded-xl border border-gray-200 px-4.5 py-3 text-sm text-gray-800 shadow-inner focus:outline-none focus:border-pcb-green focus:ring-2 focus:ring-pcb-green/10"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-bold text-gray-800">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Tech Solutions Inc." 
                      className="w-full rounded-xl border border-gray-200 px-4.5 py-3 text-sm text-gray-800 shadow-inner focus:outline-none focus:border-pcb-green focus:ring-2 focus:ring-pcb-green/10"
                    />
                  </div>
                </div>

                {/* Grid Dropdowns: Service Type & Estimated Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceType" className="text-xs font-bold text-gray-800">Service Type Required</label>
                    <select 
                      id="serviceType" 
                      name="serviceType" 
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-pcb-green focus:ring-2 focus:ring-pcb-green/10"
                    >
                      <option value="fabrication">PCB Fabrication Only</option>
                      <option value="assembly">PCB Assembly Only (SMT/THT)</option>
                      <option value="both">Turnkey Solution (Fabrication + Assembly)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="estimatedVolume" className="text-xs font-bold text-gray-800">Estimated Batch Volume</label>
                    <select 
                      id="estimatedVolume" 
                      name="estimatedVolume" 
                      value={formData.estimatedVolume}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-pcb-green focus:ring-2 focus:ring-pcb-green/10"
                    >
                      <option value="prototype">Prototype (1 - 10 units)</option>
                      <option value="low-volume">Low Volume (10 - 200 units)</option>
                      <option value="production">Mass Production (200 - 10,000+ units)</option>
                    </select>
                  </div>
                </div>

                {/* Gerber File Upload Dropzone */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-gray-800">Upload Gerber Files / Design Schematic</span>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6.5 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2
                      ${isDragging ? "border-pcb-green bg-pcb-green/5 shadow-inner" : "border-gray-200 hover:border-pcb-green hover:bg-[#F1F8F4]/30"}`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".zip,.rar,.tar,.pdf,.brd,.pcb"
                    />
                    
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-pcb-green/10 text-pcb-green shadow-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25v-10.5A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    
                    {selectedFile ? (
                      <div>
                        <p className="text-sm font-bold text-gray-900">{selectedFile.name}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB - Click or drag to replace</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-bold text-gray-800">Drag and drop files here, or <span className="text-pcb-green hover:underline">browse</span></p>
                        <p className="text-[9px] text-gray-500 mt-1">Accepts compressed formats (.ZIP, .RAR) containing Gerber layers, drill files, or BOM sheets. Max 50MB.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Textarea: Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-800">Project Requirements & Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specify layer counts, copper thickness, board size, solder mask colors, component sourcing specifications, or custom testing instructions..." 
                    className={`w-full rounded-xl border px-4.5 py-3.5 text-sm text-gray-800 shadow-inner focus:outline-none focus:ring-2
                      ${errors.message ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-pcb-green focus:ring-pcb-green/10"}`}
                  />
                  {errors.message && <span className="text-[10px] font-semibold text-red-500 mt-0.5">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2.5 w-full flex items-center justify-center gap-2 rounded-xl bg-pcb-green py-4 text-base font-bold text-white shadow-md shadow-pcb-green/15 transition-all duration-300 hover:bg-pcb-green-dark active:translate-y-0.5 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Files & Submitting...
                    </>
                  ) : (
                    <>
                      Submit Project Inquiry
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
