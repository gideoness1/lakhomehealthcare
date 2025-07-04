import mapsheet from "../assets/mapsheet.png";
import group1 from "../assets/Group1.svg";
import group2 from "../assets/Group2.svg";
import group3 from "../assets/Group3.svg";
import group4 from "../assets/Group4.svg";
import group5 from "../assets/Group5.svg";
import group6 from "../assets/Group6.svg";
import group7 from "../assets/Group7.svg";
import group8 from "../assets/Group8.svg";
import group10 from "../assets/Group10.svg";

const services = [
  { image: group1, title: "24/7 Care" },
  { image: group2, title: "Skilled Nursing (RNs and LPNs)" },
  { image: group3, title: "Home Health Aides" },
  { image: group4, title: "Personal Care" },
  { image: group5, title: "Short Term Care" },
  { image: group6, title: "Medical Transportation" },
  { image: group7, title: "Long Term Care" },
  { image: group8, title: "Medication management" },
  { image: group10, title: "Disability Support" },
];

const ServicesCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8.5 gap-x-[32px]">
      {services.map((item) => (
        <div className="flex  items-center gap-x-4">
          <img
            src={item.image}
            alt="group"
            className="w-6 lg:w-fit object-contain"
          />
          <p className="text-[#4E4E4E] text-[14px] lg:text-[18px] manrope-semibold ">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="relative mx-6 lg:mx-0 lg:px-[103px] mb-[110px] lg:mb-[150px]"
    >
      <div className=" flex flex-col lg:flex-row items-center gap-x-[58px] mb-[110px] lg:mb-[150px]">
        <div className="lg:w-[366px] text-[#12697B] text-[14px] lg:text-[18px] manrope-semibold space-y-2 lg:space-y-8 mb-6 lg:mb-0">
          <h1 className="text-[24px] lg:text-[36px] font-integral capitalize">
            Our services
          </h1>
          <p className="text-[#0A0A0A]">
            Whether you’re looking for compassionate in-home care for a loved
            one or need support managing daily health needs, LAK Home Healthcare
            is ready to help.
          </p>
        </div>
        <ServicesCards />
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[548px] text-[#12697B] text-[14px] lg:text-[20px] manrope-semibold space-y-2 lg:space-y-8 mb-5 lg:mb-0">
          <h1 className="text-[26px] lg:text-[36px] font-integral capitalize">
            Areas of service
          </h1>
          <p className="text-[#0A0A0A]">
            Columbus, Franklin county, Fairfield County, Pickaway county,Licking
            county, Delaware county, Perry county, Scioto, Marion, Madison,
            Logan, Fayette and all the communities in Ohio.
          </p>
        </div>
        <div>
          <img src={mapsheet} alt="map logo" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
