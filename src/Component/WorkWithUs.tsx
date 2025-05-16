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
    <div className="w-full md:w-[300.25px] p-[10px] bg-white rounded-lg md:mb-[80px] lg:mb-0 flex flex-col">
    <div className="relative md:w-[280px] flex flex-col h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full md:h-[204px] object-cover mb-[10px]"
      />
      <div className="flex flex-col justify-between flex-1 bg-white rounded-lg text-left py-4 md:p-6">
        <div>
          <h3 className="text-[18px] md:text-[24px] leading-[28px] manrope-semibold text-black md:w-[232.25px] md:mb-2">
            {title}
          </h3>
          <p className="text-[#666666] manropw-regular text-[14px] md:text-[16px] leading-[28px] mb-2 md:w-[232.25px] line-clamp-3">
            {description}
          </p>
        </div>
  
        <div
          className="flex items-center manrope-bold text-[#12697B] gap-x-2 cursor-pointer mt-4"
          onClick={() => navigate("/apply", { state: { title } })}
        >
          <p className="text-[14px] md:text-[18px] leading-[28px] uppercase">
            Apply now
          </p>
          <FiArrowRight className="w-4 h-4 md:w-6 md:h-6" />
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
          className={`w-full md:h-[530px] flex flex-col-reverse md:flex-row items-center justify-center  md:justify-between bg-[#0F4C58DE] px-[16px] py-6 md:py-0 md:pl-[64px] md:pr-[127px]`}
        >
          <div className={`mb-[50px] md:mb-0 md:w-[606px] text-white`}>
            <h1
              className={`text-[24px] md:text-[36px] leading-[24px] md:leading-[44px] font-integral text-center md:text-left mb-[10px]`}
            >
              Join our incredible healthcare family
            </h1>
            <p
              className={`text-[14px] md:text-[16px]  leading-6 md:leading-[28px] monrope-regular text-center md:text-left mb-[10px] md:mb-0`}
            >
              Are you excited to show off your talents and dive into something
              you love? Check out the Lak Home opportunities we have listed
              below and discover the ideal position for you. Your path to making
              an impact begins right here!
            </p>
          </div>
          <div className="mb-[64px] md:mb-0">
            <img src={heroMain} alt="hero_logo" />
          </div>
        </div>
      </div>
      <div className={`py-[100px] px-[16px] md:px-[64px]`}>
        <div
          className={`flex flex-col justify-center items-center mb-[60px] lg:mb-6`}
        >
          <h2
            className={`md:w-[618px] text-[24px] md:text-[28px] leading-[32px] text-[#12697B] manrope-extrabold mb-[10px]`}
          >
            Take Center Stage: Highlighted Positions Where You Can Excel and
            Create Change
          </h2>
          <p
            className={`md:w-[712px] text-[14px] md:text-[16px] leading-[24px] text-[#4F4F4F] plus-jakarta-sans-medium`}
          >
            Explore thrilling opportunities to showcase your talents and
            enthusiasm. Our highlighted positions allow you to significantly
            enhance the lives of our residents while progressing your career in
            a nurturing and vibrant setting. Join us and become part of
            something extraordinary!
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 lg:gap-x-10 2xl:gap-x-0 gap-4">
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
