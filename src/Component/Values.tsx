import archeryLogo from "../assets/arch.png";
const Values = () => {
  return (
    <div className="lg:h-[363px] bg-[#D0F7FF] flex flex-col md:flex-row md:gap-x-[112.8px] mb-5 md:mb-[150px] p-6 md:p-0">
      <img src={archeryLogo} alt="" className="mb-10 md:mb-0" />
      <div className="w-full h-full flex items-center ">

      <div className=" md:gap-x-[52px] lg:flex space-y-5 lg:space-y-0">
        <div className="md:w-[266px] text-[14px] r text-[#12697B]">
          <h1 className="text-center md:text-left text-[24px] lg:text-[30px] font-integral uppercase">our mission</h1>
          <p>
            Our mission at LAK Home Healthcare is to provide highest standard of
            personalized  holistic home care services , fostering a culture of
            trust and respect and dignity for seniors.
          </p>
        </div>
        <div className="md:w-[280px] text-[14px] r text-[#12697B]">
          <h1 className="text-center md:text-left text-[24px] lg:text-[30px] font-integral uppercase">our Vision</h1>
          <p>
            Our vision is to be the trusted and preferred compassionate home
            healthcare ,lighting up homes across our community.
          </p>
        </div>
        <div className="md:w-[270px] text-[14px] r text-[#12697B]">
          <h1 className="text-center md:text-left text-[24px] lg:text-[30px] font-integral uppercase  ">
            our values
          </h1>
          <p>
          Respect, excellence service, trust, compassion, empathy, dignity and expertise.
          </p>
        </div>{" "}
      </div>
      </div>
    </div>
  );
};

export default Values;
