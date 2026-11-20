"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  Send, CheckCircle2, Phone, Mail, 
  MapPin, AlertCircle, Sparkles, ShieldCheck 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    phone: "",
    email: "",
    qualifyingExam: "Class 12th (PCM)",
    percentage: "",
    jeeScore: "",
    category: "General",
    preferredBranch: "B.Tech Computer Science & Engineering",
    city: "",
    state: "Madhya Pradesh",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRefId("BGIEM-2026-" + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    }, 700);
  };

  return (
    <>
      <PageHeader
        badge="Admissions 2026-27"
        title="Online Admission &amp; Counseling Form"
        subtitle="Submit your details to reserve your counseling slot, verify eligibility, and receive priority branch preference guidance from our admission officers."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Apply Online" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            <div className="bg-[#FAF8F8] p-8 sm:p-10 rounded-3xl border-2 border-green-500/40 text-center space-y-4 shadow-md animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#242126] font-serif">
                Admission Application Received!
              </h2>
              <div className="inline-block bg-[#F9EDEF] text-[#A30D2D] px-4 py-1.5 rounded-full text-xs font-mono font-bold">
                Application Ref: {refId || "BGIEM-2026-849102"}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-lg mx-auto">
                Dear <strong>{formData.fullName}</strong>, thank you for choosing Baderia Global Engineering College. Your preference for <strong>{formData.preferredBranch}</strong> has been logged. Our Senior Counselor will call you at <strong>{formData.phone}</strong> with counseling and choice-filling guidelines.
              </p>
              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      fatherName: "",
                      phone: "",
                      email: "",
                      qualifyingExam: "Class 12th (PCM)",
                      percentage: "",
                      jeeScore: "",
                      category: "General",
                      preferredBranch: "B.Tech Computer Science & Engineering",
                      city: "",
                      state: "Madhya Pradesh",
                      message: ""
                    });
                  }}
                  className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3 px-6 rounded-xl transition-colors shadow-sm"
                >
                  Submit Another Application
                </button>
                <Link
                  href="/"
                  className="bg-white border border-gray-300 hover:border-gray-400 text-[#242126] text-xs font-bold py-3 px-5 rounded-xl transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-[#FAF8F8] p-7 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm space-y-8">
              
              <div className="border-b border-gray-200 pb-5">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A30D2D] block">
                      Direct Application Portal
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#242126] font-serif">
                      Candidate Admission Details
                    </h3>
                  </div>
                  <span className="text-[10px] bg-[#F9EDEF] text-[#720D27] font-bold px-3 py-1 rounded-full border border-[#A30D2D]/20">
                    Session 2026-27
                  </span>
                </div>
                <p className="text-xs text-[#77727A] mt-1.5">
                  Fields marked with (<span className="text-red-500">*</span>) are mandatory for DTE online verification.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-200">
                    1. Personal Details
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Candidate Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="As in 10th / 12th marksheet"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Father&apos;s / Guardian&apos;s Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fatherName}
                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                        placeholder="Father or Guardian full name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Mobile Phone Number <span className="text-red-500">*</span>
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
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="candidate@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Social Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      >
                        <option>General (UR)</option>
                        <option>OBC (Non-Creamy Layer)</option>
                        <option>Scheduled Caste (SC)</option>
                        <option>Scheduled Tribe (ST)</option>
                        <option>EWS (Economically Weaker Section)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Academic Qualifications */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-200">
                    2. Academic Background &amp; Exam Scores
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Qualifying Examination <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.qualifyingExam}
                        onChange={(e) => setFormData({ ...formData, qualifyingExam: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      >
                        <option>Class 12th (PCM)</option>
                        <option>Engineering Diploma (Polytechnic)</option>
                        <option>Graduation (For MBA / M.Tech)</option>
                        <option>Class 10th (For Diploma)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        PCM / Qualifying Aggregate (%) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.percentage}
                        onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                        placeholder="e.g. 78.5%"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        JEE Main Roll / Percentile
                      </label>
                      <input
                        type="text"
                        value={formData.jeeScore}
                        onChange={(e) => setFormData({ ...formData, jeeScore: e.target.value })}
                        placeholder="Optional if applying via CLC"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Branch & Location */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-200">
                    3. Course Preference &amp; Location
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-[#242126] mb-1">
                        First Preferred Branch / Degree <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.preferredBranch}
                        onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      >
                        <option>B.Tech Computer Science &amp; Engineering</option>
                        <option>B.Tech CSE (AI &amp; Machine Learning)</option>
                        <option>B.Tech CSE (IoT &amp; Cyber Security including Blockchain)</option>
                        <option>B.Tech CSE (Data Science)</option>
                        <option>B.Tech Civil Engineering</option>
                        <option>B.Tech Mechanical Engineering</option>
                        <option>B.Tech Electronics &amp; Communication Engineering</option>
                        <option>Master of Business Administration (MBA Dual Specialization)</option>
                        <option>MBA in Hospital Administration</option>
                        <option>M.Tech Computer Science &amp; Engineering</option>
                        <option>M.Tech Structural Engineering</option>
                        <option>Polytechnic Diploma in Computer Science</option>
                        <option>Polytechnic Diploma in Mechanical Engineering</option>
                        <option>Polytechnic Diploma in Civil Engineering</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Current City / District <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Jabalpur, Katni, Mandla"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Any Questions for Counselor (Hostel, Bus, Education Loan, Scholarship)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write any specific query you wish to discuss with our counseling team..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Registering Candidate Application..." : "Submit Official Admission Application"}</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 text-center pt-1">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Authorized counseling desk under DTE MP guidelines. Your data is strictly protected.</span>
                </div>

              </form>

            </div>
          )}

        </div>
      </section>
    </>
  );
}
