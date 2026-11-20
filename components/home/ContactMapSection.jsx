"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2, Sparkles, AlertCircle, Building 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function ContactMapSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "B.Tech Computer Science & Engineering",
    city: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift professional submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-16 lg:py-20 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
            Connect &amp; Visit Campus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
            Campus Location &amp; Admission Enquiry
          </h2>
          <p className="mt-3 text-sm text-[#77727A] leading-relaxed">
            Have questions regarding DTE online counseling, seat availability, or campus visits? Our admission counselors are at your service.
          </p>
        </div>

        {/* 2-Column Layout: Left Form, Right Contact & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Enquiry Form (Span 6) */}
          <div className="lg:col-span-6 bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A30D2D] block">
                Quick Response Desk
              </span>
              <h3 className="text-xl font-bold text-[#242126] mt-0.5">
                Send an Admission Enquiry
              </h3>
              <p className="text-xs text-[#77727A] mt-1">
                Fill out the form below. Our counseling officers will contact you within 24 working hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-white rounded-2xl border-2 border-green-500/30 text-center space-y-3 shadow-sm animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.course}</strong> has been registered. An admission counselor will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      email: "",
                      course: "B.Tech Computer Science & Engineering",
                      city: "",
                      message: ""
                    });
                  }}
                  className="text-xs font-bold text-[#A30D2D] hover:underline pt-2 block mx-auto"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#242126] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter candidate's full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] focus:ring-1 focus:ring-[#A30D2D] bg-white text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] focus:ring-1 focus:ring-[#A30D2D] bg-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] focus:ring-1 focus:ring-[#A30D2D] bg-white text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Programme of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] focus:ring-1 focus:ring-[#A30D2D] bg-white text-xs"
                    >
                      <option>B.Tech Computer Science &amp; Engineering</option>
                      <option>B.Tech CSE (AI &amp; Machine Learning)</option>
                      <option>B.Tech CSE (IoT &amp; Cyber Security)</option>
                      <option>B.Tech CSE (Data Science)</option>
                      <option>B.Tech Civil Engineering</option>
                      <option>B.Tech Mechanical Engineering</option>
                      <option>B.Tech Electronics &amp; Communication</option>
                      <option>MBA (Dual Specialization: Mkt, Fin, HR)</option>
                      <option>MBA (Hospital Administration)</option>
                      <option>M.Tech Computer Science</option>
                      <option>M.Tech Structural Engineering</option>
                      <option>Polytechnic Diploma in Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      City / Domicile State
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jabalpur, MP"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] focus:ring-1 focus:ring-[#A30D2D] bg-white text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#242126] mb-1">
                    Your Query or Counseling Requirement
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ask about cutoff, fee schedule, bus routes, or hostel facilities..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] focus:ring-1 focus:ring-[#A30D2D] bg-white text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Registering Enquiry..." : "Submit Admission Enquiry"}</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center pt-1">
                  Your contact information is confidential and utilized strictly for academic admissions counseling.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Google Maps Embed (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 3 Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200/90 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#F9EDEF] flex items-center justify-center text-[#A30D2D]">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#242126] uppercase tracking-wide">
                  Direct Phone Helplines
                </h4>
                <div className="text-xs text-gray-700 space-y-0.5">
                  <a href={`tel:${collegeData.contact.phones[0]}`} className="block font-bold text-[#A30D2D] hover:underline">
                    {collegeData.contact.phones[0]}
                  </a>
                  <a href={`tel:${collegeData.contact.phones[1]}`} className="block hover:underline">
                    {collegeData.contact.phones[1]}
                  </a>
                  <span className="text-[11px] text-gray-500 block">Landline: 0761-4062300</span>
                </div>
              </div>

              <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200/90 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#F9EDEF] flex items-center justify-center text-[#A30D2D]">
                  <Mail className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#242126] uppercase tracking-wide">
                  Official Email Desks
                </h4>
                <div className="text-xs text-gray-700 space-y-0.5">
                  <a href={`mailto:${collegeData.contact.emails.admissions}`} className="block font-bold text-[#A30D2D] hover:underline">
                    {collegeData.contact.emails.admissions}
                  </a>
                  <a href={`mailto:${collegeData.contact.emails.general}`} className="block text-gray-600 hover:underline">
                    {collegeData.contact.emails.general}
                  </a>
                  <span className="text-[11px] text-gray-500 block">Placements: {collegeData.contact.emails.placements}</span>
                </div>
              </div>

            </div>

            {/* Campus Address Box */}
            <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200/90 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#A30D2D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <h4 className="font-bold text-[#242126] text-sm">
                  Campus Address
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Baderia Global Institute of Engineering and Management (Global Engineering College)</strong><br />
                  Global Square, Patan Bypass, Raigwan, Jabalpur, Madhya Pradesh – 482002, India
                </p>
                <div className="text-[11px] text-gray-500 flex items-center gap-1.5 pt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
                  <span>{collegeData.contact.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Responsive Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm h-64 sm:h-72 w-full relative">
              <iframe
                title="Baderia Global Engineering College Jabalpur Map Location"
                src="https://maps.google.com/maps?q=Global+Engineering+College+Jabalpur+Patan+Bypass&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
