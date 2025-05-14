import { useEffect, useState } from "react";
import image1 from "../assets/slider6.svg";
import image2 from "../assets/slider2.svg";
import image3 from "../assets/slider4.svg";
import image5 from "../assets/slider5.svg";

const HeroSection = ({
  handleMoveToContactUs,
}: {
  handleMoveToContactUs: (id: string) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [image1, image2, image3, image5];

  const bgImage = backgroundImages[currentIndex % backgroundImages.length];

  const handleMovement = () => {
    handleMoveToContactUs("contact");
  };
  return (
    <div
      className="w-full h-[500px] lg:h-[815px] overflow-hidden relative bg-no-repeat bg-center lg:bg-cover transition-all px-6 lg:px-[108px] mb-5 lg:mb-[80px]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className={`text-white lg:mt-[120px] flex flex-col items-center justify-center text-center ${
          currentIndex === 0
            ? "lg:items-center lg:text-center"
            : currentIndex % 2 === 0
            ? "lg:items-start lg:text-left"
            : "lg:items-end lg:text-right"
        } h-full`}
      >
        <div className=" lg:w-[609px]">
          <h1
            className={` text-[30px] md:text-[40px] lg:text-[48px] leading-[100%] font-integral ${
              currentIndex === 0
                ? "mb-6"
                : currentIndex % 2 === 0
                ? " mb-7"
                : "mb-7"
            }`}
          >
            {messages[currentIndex].title}
          </h1>
          <p className="md:text-[20px] manrope-bold">
            {messages[currentIndex].message}
          </p>
        </div>
        {currentIndex !== 0 && (
          <button
            className="bg-[#12697B] text-[13px] lg:text-[18px] cursor-pointer p-2 lg:px-6 lg:py-[14px] manrope-semibold mt-3 lg:mt-8 rounded-[50px] text-white"
            onClick={handleMovement}
          >
            GET IN TOUCH
          </button>
        )}
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
