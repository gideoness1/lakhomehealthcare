import map from "../assets/map.png";
import group1 from "../assets/contact1.png";
import group2 from "../assets/contact2.png";
import group4 from "../assets/contact4.png";

const ContactUs = () => {
  const services = [
    { image: group1, title: "Monday-Friday", date: "9:00 AM- 5:00 PM" },
    { image: null, title: "" },
    { image: group2, title: "Phone Number", date: "+1 (380) 225-1377" },
    { image: group4, title: "Email", date: "info@lakhomehealthcare.com" },
  ];

  const ContactCard = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-9.5">
        {services.map((item) => (
          <div className="flex  items-center gap-x-4">
            {item.image && (
              <img src={item.image} alt="group" className="w-10 lg:w-fit" />
            )}
            <div className="text-[#4E4E4E] text:[13px] lg:text-[18px] manrope-semibold">
              <p className="">{item.title}</p>
              <h1 className="text:[15px] lg:text-[24px] manrope-extrabold">
                {item.date}
              </h1>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section
      id="contact"
      className="px-6 lg:px-[103px] mb-5 lg:mb-[150px]"
    >
      <div className=" flex flex-col lg:flex-row items-center gap-x-[128px] mb-5 lg:mb-[150px]">
        <div className="lg:w-[366px] text-center lg:text-left text-[#12697B] text-[13px] lg:text-[18px] manrope-semibold space-y-2 lg:space-y-8 mb-5 lg:mb-0">
          <h1 className="text-[26px] lg:text-[36px]  font-integral capitalize">
            CONTACT US
          </h1>
          <p>
            At LAK Home Healthcare, we’re here to support you and your loved
            ones with compassionate, professional care right in the comfort of
            your home.
          </p>
        </div>
        <ContactCard />
      </div>
      <div>
        <img src={map} alt="map-logo" className="w-full" />
      </div>
    </section>
  );
};

export default ContactUs;
