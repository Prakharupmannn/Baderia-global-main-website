"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2, Building, ExternalLink, ShieldCheck, Bus 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Admission Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const contactDesks = [
    { title: "Admission & Counseling Desk", phone: collegeData.contact.phones[0], altPhone: collegeData.contact.phones[1], email: collegeData.contact.emails.admissions, hours: "9:00 AM – 5:30 PM" },
    { title: "Director / Principal Office", phone: "0761-4062300", email: collegeData.contact.emails.director, hours: "10:00 AM – 4:30 PM" },
    { title: "Training & Placement Cell", phone: "+91-9575300122", email: collegeData.contact.emails.placements, hours: "9:30 AM – 5:00 PM" },
    { title: "Registrar & Examination Office", phone: "0761-3077200", email: collegeData.contact.emails.registrar, hours: "9:00 AM – 5:00 PM" }
  ];

  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact Campus &amp; Directions"
        subtitle="Visit our 45-acre green campus along Patan Bypass, Jabalpur, or connect with our admission officers and administrative desks."
        breadcrumbs={[
          { label: "Contact Us" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 4 Contact Desks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDesks.map((d, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A30D2D] block">
                  Official Desk
                </span>
                <h3 className="font-bold text-sm text-[#242126] leading-snug">
                  {d.title}
                </h3>
                <div className="space-y-1 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5 font-bold text-[#A30D2D]">
                    <Phone className="w-3.5 h-3.5" />
                    <a href={`tel:${d.phone}`}>{d.phone}</a>
                  </div>
                  {d.altPhone && (
                    <div className="text-gray-500 text-[11px] pl-5">
                      Alt: {d.altPhone}
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 pt-1 text-gray-600">
                    <Mail className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <a href={`mailto:${d.email}`} className="hover:underline truncate">{d.email}</a>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-gray-500">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span>{d.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form & Map Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column (Span 6) */}
            <div className="lg:col-span-6 bg-[#FAF8F8] p-7 sm:p-9 rounded-3xl border border-gray-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A30D2D] block">
                  Online Messaging
                </span>
                <h3 className="text-xl font-bold text-[#242126] mt-0.5">
                  Schedule a Campus Visit / Send Enquiry
                </h3>
                <p className="text-xs text-[#77727A] mt-1">
                  Fill in your details below and our public relations office will assist you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-white rounded-2xl border-2 border-green-500/30 text-center space-y-3 shadow-xs animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.subject}</strong> has been transmitted. We will respond to <strong>{formData.email || formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", subject: "Admission Inquiry", message: "" });
                    }}
                    className="text-xs font-bold text-[#A30D2D] hover:underline pt-2 block mx-auto"
                  >
                    Send Another Message
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
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Mobile Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Subject / Purpose of Visit
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                    >
                      <option>Admission &amp; Branch Counseling</option>
                      <option>Campus Visit &amp; Infrastructure Tour</option>
                      <option>Recruiter / Corporate Placement Tie-up</option>
                      <option>Education Loan &amp; Fee Inquiry</option>
                      <option>Alumni &amp; Other Matters</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Message / Remarks <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention preferred date of visit or specific queries..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white font-bold py-3.5 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? "Transmitting Message..." : "Send Message to Campus Office"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Address, Map, and Transit Routes (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-[#FAF8F8] p-6 rounded-3xl border border-gray-200/90 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#A30D2D] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-bold text-sm text-[#242126]">
                      Campus Physical Address
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Baderia Global Institute of Engineering and Management</strong><br />
                      Global Square, Patan Bypass, Raigwan, Jabalpur, Madhya Pradesh – 482002, India
                    </p>
                  </div>
                </div>

                {/* Transit Proximity */}
                <div className="pt-2 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-gray-600">
                  <div className="p-2 bg-white rounded-lg border border-gray-100">
                    <strong className="block text-[#242126]">Jabalpur Station:</strong>
                    <span>12 km (approx 20 mins)</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-gray-100">
                    <strong className="block text-[#242126]">ISBT Bus Stand:</strong>
                    <span>8 km (approx 12 mins)</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-gray-100">
                    <strong className="block text-[#242126]">Dumna Airport:</strong>
                    <span>24 km (approx 35 mins)</span>
                  </div>
                </div>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border-2 border-gray-200 shadow-sm h-80 w-full relative">
                <iframe
                  title="Baderia Global Engineering College Patan Bypass Jabalpur Map"
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
    </>
  );
}
