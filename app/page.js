import AboutUs from "@/components/landing/Aboutus";
import Hero from "@/components/landing/Hero";

import LeadershipCarousel from "@/components/landing/LeadershipCarousel";
import OurMission from "@/components/landing/Ourmission";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
     <Hero />
     <OurMission />
     <AboutUs />
     <Testimonials />
    
     <LeadershipCarousel />
    </div>
  );
}
