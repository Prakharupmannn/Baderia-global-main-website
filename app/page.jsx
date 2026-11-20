import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import DepartmentsShowcase from "@/components/home/DepartmentsShowcase";
import CampusInfrastructureSection from "@/components/home/CampusInfrastructureSection";
import PlacementsSection from "@/components/home/PlacementsSection";
import FacultyLeadershipSection from "@/components/home/FacultyLeadershipSection";
import EventsShowcaseSection from "@/components/home/EventsShowcaseSection";
import StudentAchievementsSection from "@/components/home/StudentAchievementsSection";
import NewsNoticesSection from "@/components/home/NewsNoticesSection";
import AdmissionCtaSection from "@/components/home/AdmissionCtaSection";
import ContactMapSection from "@/components/home/ContactMapSection";

export const metadata = {
  title: "Baderia Global Engineering College | Premier University in Jabalpur",
  description:
    "Official website of Baderia Global Institute of Engineering and Management (Global Engineering College), Jabalpur. Approved by AICTE & Affiliated to RGPV & RDVV. Admissions 2026-27 Open."
};

export default function HomePage() {
  return (
    <>
      {/* Section 3: Hero section */}
      <HeroSection />

      {/* Section 4: Institutional achievements */}
      <StatsSection />

      {/* Section 5: About the institution */}
      <AboutSection />

      {/* Section 6: Academic programmes */}
      <ProgramsSection />

      {/* Section 7: Why choose this institution? */}
      <WhyChooseSection />

      {/* Section 8: Departments */}
      <DepartmentsShowcase />

      {/* Section 9: Campus and infrastructure */}
      <CampusInfrastructureSection />

      {/* Section 10: Placements and career opportunities */}
      <PlacementsSection />

      {/* Section 11: Faculty and academic leadership */}
      <FacultyLeadershipSection />

      {/* Section 12: Events and campus life */}
      <EventsShowcaseSection />

      {/* Section 13: Student achievements */}
      <StudentAchievementsSection />

      {/* Section 14: Latest news and announcements */}
      <NewsNoticesSection />

      {/* Section 15: Admission CTA */}
      <AdmissionCtaSection />

      {/* Section 16: Contact section with Google Maps & Enquiry Form */}
      <ContactMapSection />
    </>
  );
}
