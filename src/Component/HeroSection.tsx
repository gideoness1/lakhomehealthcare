import { useEffect, useState, useRef } from "react";
import image1 from "../assets/slider6.svg";
import image2 from "../assets/slider2.svg";
import image3 from "../assets/slider4.svg";
import image5 from "../assets/slider5.svg";
import imagemobile1 from "../assets/mobile1.svg";
import imagemobile2 from "../assets/mobile2.svg";
import imagemobile3 from "../assets/mobile3.svg";
import imagemobile4 from "../assets/mobile4.svg";

const HeroSection = ({
  handleMoveToContactUs,
}: {
  handleMoveToContactUs: (id: string) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const transitionTimer = useRef<any>(null);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Define image arrays
  const desktopImages = [image1, image2, image3, image5];
  const mobileImages = [imagemobile1, imagemobile2, imagemobile3, imagemobile4];
  const backgroundImages = isMobile ? mobileImages : desktopImages;

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = backgroundImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true); // Continue even if some images fail to load
      }
    };

    loadImages();
  }, [backgroundImages]);

  // Handle slider transitions
  useEffect(() => {
    if (!imagesLoaded) return;

    const transitionToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };

    const interval = setInterval(transitionToNext, 8000);

    return () => {
      clearInterval(interval);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, [imagesLoaded]);

  const handleMovement = () => {
    handleMoveToContactUs("contact");
  };

  const handleDotClick = (idx: number) => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    setCurrentIndex(idx);
  };

  return (
    <div className="w-full h-[932px] lg:h-[815px] overflow-hidden relative mb-5 lg:mb-[80px]">
      {/* Background images stacked with transitions */}
      {backgroundImages.map((image, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            imagesLoaded ? '' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentIndex === idx ? 1 : 0,
            zIndex: currentIndex === idx ? 1 : 0,
          }}
        />
      ))}
      
      {/* Content container */}
      <div className="relative z-10 px-6 lg:px-[108px] h-full">
        <div className="text-white lg:mt-[120px] flex flex-col items-center justify-center text-center h-full">
          <div className="pt-[150px] md:pt-0 lg:w-[609px] transition-opacity duration-500">
            <h1
              className={`text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] font-integral ${
                currentIndex === 0
                  ? "mb-6"
                  : currentIndex % 2 === 0
                  ? "mb-7"
                  : "mb-7"
              }`}
            >
              {messages[currentIndex].title}
            </h1>
            <p className="text-sm md:text-[20px] manrope-bold">
              {messages[currentIndex].message}
            </p>
          </div>
          {currentIndex !== 0 && (
            <button
              className="bg-[#12697B] text-[13px] lg:text-[18px] cursor-pointer p-2 lg:px-6 lg:py-[14px] manrope-semibold mt-3 lg:mt-8 rounded-[50px] text-white transition-opacity duration-500"
              onClick={handleMovement}
            >
              GET IN TOUCH
            </button>
          )}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {messages.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

const messages = [
  {
    title: "LAK Home Healthcare",
    message:
      "Respect, excellence service, trust, compassion, empathy, dignity and expertise.",
  },
  {
    title: "LAK Home Healthcare",
    message:
      "Accredited by the State of Ohio, the agency offers comprehensive in-home medical and non-medical care services, including senior care, post-surgery support, personal care, and companionship.",
  },
  {
    title: "Excellence",
    message:
      "The company comprises of experience knowledgeable skilled nurses in collaboration with patient's physicians and perfect home health aides in providing high quality of life, helping them regain independence and prevent frequent hospitalisation.",
  },
  {
    title: "Mission",
    message:
      "Provide highest standard of personalized holistic home care services , fostering a culture of trust and respect and dignity for seniors.",
  },
];