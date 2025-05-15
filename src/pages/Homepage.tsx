import AboutSection from "../Component/AboutSection.tsx";
import ContactUs from "../Component/ContactUs.tsx";
import HeroSection from "../Component/HeroSection.tsx";
import JoinTeam from "../Component/JoinTeam.tsx";
import ServiceSection from "../Component/ServiceSection.tsx";
import { TestimonialSection } from "../Component/TestmonialSection.tsx";
import Values from "../Component/Values.tsx";

const HomePage = ({
    handleMoveToContactUs,
  }: {
    handleMoveToContactUs: (id: string) => void;
  }) => {
  return (
    <div>
      <HeroSection handleMoveToContactUs={handleMoveToContactUs} />
      <AboutSection />
      <Values />
      <ServiceSection />
      <JoinTeam />
      <TestimonialSection />
      <ContactUs />
    </div>
  );
};

export default HomePage;
