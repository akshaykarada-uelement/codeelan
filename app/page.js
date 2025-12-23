import AboutUs from "@/components/landing/Aboutus";
import Hero from "@/components/landing/Hero";
import Leadership from "@/components/landing/Leadership";
import OurMission from "@/components/landing/Ourmission";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
     <Hero />
     <OurMission />
     <AboutUs />
     <Testimonials />
     <Leadership />
    </div>
  );
}
