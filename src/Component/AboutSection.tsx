import aboutImage from "../assets/aboutImage.png";
import aboutmobile from "../assets/aboutmobile.svg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-6 lg:px-[103px] mb-5 lg:mb-[150px]"
    >
      <div className="w-full flex lg:flex-row justify-center flex-col items-center lg:space-x-[44px]">
        <div>
          <img src={aboutImage} alt="aboutImage" className="w-full hidden md:block"  />
          <img src={aboutmobile} alt="aboutImage" className="w-full mb-10 block md:hidden" />
        </div>
        <div>
          <div className="lg:w-[579px] text-[#0A0A0A]  text-[14px] lg:text-[20px] manrope-semibold space-y-4 lg:space-y-8">
            <h1 className="text-[24px] text-[#12697B] lg:text-[36px] text-left font-integral capitalize">
              About us
            </h1>
            <p>
              LAK Home Healthcare located in Columbus, Ohio is accredited and
              certified by the State of Ohio to provide medical , non-medical ,
              skilled and non-skilled home care services to families and their
              love ones in the comfort of their own homes with senior care,
              short term home care after changes in medical condition, after
              surgery, companionship, caregiving, personal care , ADLs e.t.c.
            </p>

            <p>
              The company comprises of experience knowledgeable skilled nurses
              in collaboration with patient's physicians and perfect home health
              aides in providing high quality of life, helping them regain
              independence and prevent frequent hospitalisation.
            </p>
          </div>
          <button className="bg-[#12697B] text-[13px] lg:text-[18px] px-6 py-[14px] manrope-semibold mt-3 lg:mt-8 rounded-[50px] text-white">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
