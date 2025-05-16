import archeryLogo from "../assets/arch.png";
import archery from "../assets/archerymobile.svg";
import shadowup from "../assets/shadowblack.svg";

const Values = () => {
  return (
    <div className="relative overflow-hidden lg:h-[363px] bg-[#D0F7FF] flex flex-col md:flex-row md:gap-x-[112.8px] mb-[60px] md:mb-[150px] pb-[90px] md:pb-0 px-6 md:p-0">
      <div className="absolute top-[-80px] right-[-190px]">
        <img src={shadowup} alt="logo" />
      </div>
      <img src={archeryLogo} alt="" className="mb-10 md:mb-0 hidden md:block" />
      <img src={archery} alt="" className="mb-10 md:mb-0 md:hidden" />
      <div className="w-full h-full flex items-center ">
        <div className=" md:gap-x-[52px] lg:flex space-y-[52px] lg:space-y-0">
          <div className="md:w-[266px] text-[14px] text-[#12697B]">
            <h1 className="mb-3 lg:mb-0 text-[24px] lg:text-[30px] font-integral uppercase">
              our mission
            </h1>
            <p>
              Our mission at LAK Home Healthcare is to provide highest standard
              of personalized holistic home care services , fostering a culture
              of trust and respect and dignity for seniors.
            </p>
          </div>
          <div className="md:w-[280px] text-[14px] r text-[#12697B]">
            <h1 className="mb-3 lg:mb-0 text-[24px] lg:text-[30px] font-integral uppercase">
              our Vision
            </h1>
            <p>
              Our vision is to be the trusted and preferred compassionate home
              healthcare ,lighting up homes across our community.
            </p>
          </div>
          <div className="md:w-[270px] text-[14px] r text-[#12697B]">
            <h1 className="mb-3 lg:mb-0 text-[24px] lg:text-[30px] font-integral uppercase  ">
              our values
            </h1>
            <p>
              Respect, excellence service, trust, compassion, empathy, dignity
              and expertise.
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Values;
