import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import { Navigation2 } from "lucide-react";
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
         <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center fixed bottom-6 md:bottom-10 right-6 tablet:right-10 z-50  cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0px_4px_4px_rgba(0,0,0,0.20)]">
         <Navigation2
           color="#12697B"
           fill="#12697B"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         />
       </div>
      )}
    </div>
  );
}

export default App;
