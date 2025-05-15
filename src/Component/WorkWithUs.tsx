import { useNavigate } from "react-router-dom";
import { applicationList } from "../utils/constants.tsx";
import { FiArrowRight } from "react-icons/fi";
import heroMain from "../assets/workwithus.svg";
import heroBackground from "../assets/herobackground.jpg";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[300.25px]  p-[10px] bg-white rounded-lg md:mb-[80px] lg:mb-0">
      <div className={"relative md:w-[280px]"}>
        <img
          src={imageUrl}
          alt={title}
          className=" w-full h-[204px] object-cover mb-[10px]"
        />
        <div
          className={`h-[140px] md:h-full py-4 md:p-6 bg-white rounded-lg text-left flex flex-col justify-between`}
        >
          <div className="">

          <h3 className="text-[18px] md:text-[24px] leading-[28px] manrope-semibold text-black md:w-[232.25px] md:mb-2">
            {title}
          </h3>
          <p className="text-[#666666] manropw-regular text-[14px] md:text-[16px] leading-[28px] mb-2 md:w-[232.25px] line-clamp-3">
            {description}
          </p>
          </div>
          <div
            className={`flex items-center manrope-bold text-[#12697B] gap-x-2 cursor-pointer`}
            onClick={() => navigate("/apply")}
          >
            <p
              className={` text-[14px] md:text-[18px] leading-[28px] uppercase`}
            >
              Apply now{" "}
            </p>
            <span>
              <FiArrowRight className="w-4 h-4 md:w-6 md:h-6 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkWithUS = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div
        className="w-full bg-no-repeat bg-cover bg-center md:mb-[100px]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div
          className={`w-full md:h-[530px] flex flex-col md:flex-row items-center justify-center  md:justify-between bg-[#0F4C58DE] px-[16px] py-6 md:py-0 md:pl-[64px] md:pr-[127px]`}
        >
          <div className={`md:w-[606px] text-white`}>
            <h1
              className={`text-[24px] md:text-[36px] leading-[24px] md:leading-[44px] font-integral text-center md:text-left mb-[10px]`}
            >
              Join our incredible healthcare family
            </h1>
            <p
              className={`text-[14px] md:text-[16px]  leading-6 md:leading-[28px] monrope-regular text-center md:text-left mb-[10px] md:mb-0`}
            >
              Are you excited to show off your talents and dive into something
              you love? Check out the amazing opportunities we have listed below
              and discover the ideal position for you. Your path to making an
              impact begins right here!
            </p>
          </div>
          <div>
            <img src={heroMain} alt="hero_logo" />
          </div>
        </div>
      </div>
      <div
        className={`lg:h-[1278px] px-[16px] md:px-[64px]`}
      >
        <div
          className={`flex flex-col items-center text-center mb-[10px] lg:mb-6`}
        >
          <h2
            className={`md:w-[618px] text-[24px] md:text-[28px] leading-[32px] text-[#12697B] manrope-extrabold mb-[10px]`}
          >
            Take Center Stage: Highlighted Positions Where You Can Excel and Create Change
          </h2>
          <p
            className={`md:w-[712px] text-[14px] md:text-[16px] leading-[24px] text-[#4F4F4F] plus-jakarta-sans-medium`}
          >
           Explore thrilling opportunities to showcase your talents and enthusiasm. Our highlighted positions allow you to significantly enhance the lives of our residents while progressing your career in a nurturing and vibrant setting. Join us and become part of something extraordinary!
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-[37px]">
            {applicationList.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
