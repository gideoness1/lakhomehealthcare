import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AboutSection from "./Component/AboutSection";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import JoinTeam from "./Component/JoinTeam";
import Navbar from "./Component/Navbar";
import ServiceSection from "./Component/ServiceSection";
import { TestimonialSection } from "./Component/TestmonialSection";
import Values from "./Component/Values";
import scrollToTp from "./assets/scrolltotop.png";
import HeroSection from "./Component/HeroSection";
import HomePage from "./pages/Homepage";
import WorkWithUSPage from "./pages/WorkWithUs";
import ApplyPage from "./pages/ApplyPage";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <Navbar handleSetScroll={scrollToSection} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<HomePage handleMoveToContactUs={scrollToSection} />}
        />
        <Route path="/work-with-us" element={<WorkWithUSPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />

      {showScroll && (
        <img
          src={scrollToTp}
          alt="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-3 md:bottom-6 right-2 md:right-6 z-50  cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      )}
    </div>
  );
}

export default App;
