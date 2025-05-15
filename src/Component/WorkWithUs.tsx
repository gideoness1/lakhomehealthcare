import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { applicationList } from "../utils/constants.tsx";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import heroMain from "../assets/hero slider 3.svg";

type CardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full tablet:w-[300.25px]  p-[10px] bg-white rounded-lg tablet:mb-[80px] desktopMd:mb-0">
      <div className={"relative tablet:w-[280px]"}>
        <img
          src={imageUrl}
          alt={title}
          className=" w-full h-[204px] object-cover mb-[10px]"
        />
        <span
          className={`w-[42px] h-[42px] tablet:w-[57px] tablet:h-[57px] bg-primary absolute top-[52%] tablet:top-[39%] left-[45%] tablet:left-[36%]   text-white text-[24px] plus-jakarta-sans-regular flex items-center justify-center rounded-lg`}
        >
          {id}
        </span>
        <div
          className={`h-[140px] tablet:h-full py-4 tablet:p-6 bg-white rounded-lg text-left`}
        >
          <h3 className="text-[18px] tablet:text-[24px] leading-[28px] gelasio-regular text-black tablet:w-[232.25px] tablet:mb-2">
            {title}
          </h3>
          <p className="text-gray plus-jakarta-sans-regular text-[14px] tablet:text-[16px] leading-[28px] mb-2 tablet:w-[232.25px] line-clamp-3">
            {description}
          </p>
          <div
            className={`flex items-center text-primary gap-x-2 cursor-pointer`}
            onClick={() => navigate("/apply")}
          >
            <p
              className={`gelasio-bold text-[14px] tablet:text-[18px] leading-[28px] uppercase`}
            >
              Apply now{" "}
            </p>
            <span>
              <FiArrowRight className="w-4 h-4 tablet:w-6 tablet:h-6 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkWithUS = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const itemsPerRound = 8;

  const totalRounds = Math.ceil(applicationList.length / itemsPerRound);

  const getCurrentRoundCards = () => {
    const startIndex = currentRound * itemsPerRound;
    return applicationList.slice(startIndex, startIndex + itemsPerRound);
  };

  const handleNextRound = () => {
    setCurrentRound((prev) => (prev < totalRounds - 1 ? prev + 1 : 0));
  };

  const handlePrevRound = () => {
    setCurrentRound((prev) => (prev > 0 ? prev - 1 : totalRounds - 1));
  };

  return (
    <div>
      <div className={`w-full bg-hero-pattern bg-no-repeat bg-cover `}>
        <div
          className={`w-full tablet:h-[530px] flex flex-col tablet:flex-row items-center justify-center  tablet:justify-between bg-[#9A1E23]/90 px-[16px] py-6 tablet:py-0 tablet:pl-[64px] tablet:pr-[127px]`}
        >
          <div className={`tablet:w-[606px] text-white`}>
            <h1
              className={`text-[24px] tablet:text-[45px] leading-[24px] tablet:leading-[44px] gelasio-semibold text-center tablet:text-left mb-[10px] tablet:mb-0`}
            >
              {" "}
              Become a Part of the Amazing Healthcare Team!
            </h1>
            <p
              className={`text-[14px] tablet:text-[16px]  leading-6 tablet:leading-[28px] monrope-regular text-center tablet:text-left mb-[10px] tablet:mb-0`}
            >
              At Ready to showcase your skills and bring your passion to the
              table? Explore our exciting opportunities below and find the
              perfect role for you. Your journey to making a difference starts
              here!
            </p>
          </div>
          <div>
            <img src={heroMain} alt="hero_logo" />
          </div>
        </div>
      </div>
      <div
        className={`desktopMd:h-[1278px] bg-[#F5F5F5] px-[16px] tablet:px-[64px] pt-[48px] pb-[40px]`}
      >
        <div
          className={`flex flex-col items-center text-center mb-[10px] desktopMd:mb-6`}
        >
          <h2
            className={`tablet:w-[618px] text-[24px] tablet:text-[28px] leading-[32px] text-black gelasio-semibold mb-[10px] desktopMd:mb-6`}
          >
            Step Into the Spotlight: Featured Roles Where You Can Shine and Make
            an Impact
          </h2>
          <p
            className={`tablet:w-[738px] text-[14px] tablet:text-[16px] leading-[24px] text-gray plus-jakarta-sans-regular`}
          >
            Discover exciting opportunities to bring your skills and passion to
            the forefront. Our featured roles offer the chance to make a
            meaningful difference in the lives of our residents while advancing
            your career in a supportive, dynamic environment. Join us and be
            part of something amazing!
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktopMd:grid-cols-4 gap-5 tablet:gap-[37px]">
            {getCurrentRoundCards().map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 mt-5">
            <button
              onClick={handlePrevRound}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FiArrowLeft size={24} color={"#9A1E23"} />
            </button>

            <div className="flex space-x-2">
              {[...Array(totalRounds)].map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentRound ? "bg-[#FFA903]" : "bg-[#D9D9D9]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextRound}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FiArrowRight size={24} color={"#9A1E23"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
