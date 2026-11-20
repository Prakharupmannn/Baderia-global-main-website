import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Baderia Global Engineering College | Jabalpur (M.P.)",
    template: "%s | Baderia Global Engineering College"
  },
  description:
    "Baderia Global Institute of Engineering and Management (Global Engineering College), Jabalpur. Approved by AICTE, New Delhi & Affiliated to RGPV Bhopal and RDVV Jabalpur. Explore B.Tech, M.Tech, MBA, Polytechnic, placements, and admissions.",
  keywords: [
    "Global Engineering College Jabalpur",
    "Baderia Global",
    "BGIEM",
    "Engineering Colleges in Jabalpur",
    "Best B.Tech College in MP",
    "RGPV Affiliated College Jabalpur",
    "MBA in Jabalpur",
    "Global Garba Jabalpur"
  ],
  authors: [{ name: "Baderia Global Institute of Engineering and Management" }],
  openGraph: {
    title: "Baderia Global Engineering College, Jabalpur",
    description:
      "Premier Engineering & Management Institution in central India with ₹46.71 LPA highest package, 1,200+ offers, and 45-acre Wi-Fi campus.",
    url: "https://www.globalengineeringcollege.com",
    siteName: "Baderia Global Engineering College",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF8F8] text-[#242126] antialiased">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
