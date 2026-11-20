"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  ShieldCheck, AlertTriangle, Send, CheckCircle2, 
  Phone, Mail, Lock, HeartHandshake, UserCheck 
} from "lucide-react";
import { mandatoryData } from "@/lib/data/mandatoryData";

export default function GrievancePage() {
  const [formData, setFormData] = useState({
    studentName: "",
    enrollmentNo: "",
    branch: "Computer Science & Engineering",
    semester: "Semester 3",
    category: "Academic Grievance",
    description: "",
    contactNumber: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRefId("GRV-2026-" + Math.floor(1000 + Math.random() * 9000));
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <PageHeader
        badge="Student Welfare"
        title="Student Grievance &amp; Redressal Portal"
        subtitle="Confidential, transparent mechanism for prompt resolution of academic concerns, campus facilities, and anti-ragging protection."
        breadcrumbs={[
          { label: "Student Support" },
          { label: "Grievance Redressal" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Anti-Ragging Strict Policy Warning Card */}
          <div className="bg-[#FAF8F8] p-7 sm:p-9 rounded-3xl border-2 border-red-500/40 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                  Strict Zero-Tolerance Protocol
                </span>
                <h2 className="text-xl font-black text-[#242126]">
                  Anti-Ragging Committee &amp; Flying Squad
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Ragging in any form (physical, verbal, psychological, or electronic) inside the campus, in college buses, or in student hostels is strictly prohibited by law as per Supreme Court of India directives and UGC/AICTE regulations. Anyone found guilty faces immediate suspension, FIR registration, and rustication from the university.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-3 bg-white rounded-xl border border-gray-200">
                <span className="font-bold text-[#A30D2D] block">Campus Flying Squad</span>
                <span className="text-gray-600">+91-9575300122 / 123</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-200">
                <span className="font-bold text-[#A30D2D] block">National 24x7 Toll-Free</span>
                <span className="text-gray-600">1800-180-5522</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-200">
                <span className="font-bold text-[#A30D2D] block">Confidential Email</span>
                <span className="text-gray-600">antiragging@global.org.in</span>
              </div>
            </div>
          </div>

          {/* Grievance Submission Form & Committees */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column (Span 7) */}
            <div className="lg:col-span-7 bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-2xs space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A30D2D] block">
                  Online Redressal Submission
                </span>
                <h3 className="text-xl font-bold text-[#242126] mt-0.5">
                  Submit a Student Grievance
                </h3>
                <p className="text-xs text-[#77727A] mt-1">
                  Submissions are reviewed directly by the Ombudsman Committee in strict confidentiality.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-white rounded-2xl border-2 border-green-500/30 text-center space-y-3 shadow-xs animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900">
                    Grievance Registered Successfully
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Your grievance has been logged with reference ID: <strong>{refId || "GRV-2026-4819"}</strong>. The committee will examine your request and follow up within 3 working days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        studentName: "",
                        enrollmentNo: "",
                        branch: "Computer Science & Engineering",
                        semester: "Semester 3",
                        category: "Academic Grievance",
                        description: "",
                        contactNumber: ""
                      });
                    }}
                    className="text-xs font-bold text-[#A30D2D] hover:underline pt-2 block mx-auto"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Student Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Enter full name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Enrollment Number / Roll No. <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.enrollmentNo}
                        onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value })}
                        placeholder="e.g. 0188CS241001"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Department / Branch <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      >
                        <option>Computer Science &amp; Engineering</option>
                        <option>CSE (AI &amp; Machine Learning)</option>
                        <option>CSE (IoT &amp; Cyber Security)</option>
                        <option>Civil Engineering</option>
                        <option>Mechanical Engineering</option>
                        <option>Electronics &amp; Communication</option>
                        <option>Management Studies (MBA)</option>
                        <option>Polytechnic Diploma</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#242126] mb-1">
                        Grievance Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                      >
                        <option>Academic &amp; Evaluation Concern</option>
                        <option>Library &amp; Laboratory Amenities</option>
                        <option>Bus Transit / Transportation Issue</option>
                        <option>Canteen &amp; Food Quality</option>
                        <option>Hostel / Accommodation Matter</option>
                        <option>Anti-Ragging / Discipline Concern</option>
                        <option>General Administrative Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Contact Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#242126] mb-1">
                      Detailed Description of Grievance <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please provide specific dates, details, and factual information..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white font-bold py-3.5 px-4 rounded-xl shadow transition-colors flex items-center justify-center gap-2 text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? "Registering Grievance..." : "Submit Grievance to Ombudsman"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Redressal Committees (Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-2">
                <span className="text-[10px] font-bold text-[#A30D2D] uppercase tracking-wider block">Women Safety</span>
                <h4 className="font-bold text-sm text-[#242126]">Internal Complaints Committee (ICC)</h4>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  Constituted under the POSH Act 2013 to protect and support female students, staff, and faculty members with absolute confidentiality.
                </p>
                <div className="pt-2 text-xs text-gray-600">
                  <strong>Presiding Officer:</strong> Dr. Meenakshi Soni (<span className="text-[#A30D2D]">icc@global.org.in</span>)
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-2">
                <span className="text-[10px] font-bold text-[#A30D2D] uppercase tracking-wider block">Equal Opportunity</span>
                <h4 className="font-bold text-sm text-[#242126]">SC / ST / OBC Welfare Cell</h4>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  Monitors effective implementation of post-matric scholarships, remedial coaching classes, book bank quotas, and grievance handling for reserved categories.
                </p>
                <div className="pt-2 text-xs text-gray-600">
                  <strong>Liaison Officer:</strong> Prof. Manish Sen (<span className="text-[#A30D2D]">scstcell@global.org.in</span>)
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
