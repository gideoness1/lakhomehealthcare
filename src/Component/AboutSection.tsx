import aboutImage from "../assets/aboutImage.png";

const AboutSection = () => {
  return (
    <section id="about" className="mx-6 lg:mx-0 lg:px-[103px] mb-5 lg:mb-[150px]">
      <div className="w-full flex lg:flex-row justify-center flex-col-reverse items-center lg:space-x-[44px]">
        <div>
          <img src={aboutImage} alt="aboutImage" className="w-full" />
        </div>
        <div>
          <div className="lg:w-[579px] text-[#12697B] text-[13px] lg:text-[20px] manrope-semibold space-y-2 lg:space-y-8">
            <h1 className="text-[26px] lg:text-[36px] text-center lg:text-left font-integral capitalize">About us</h1>
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
          <button className="bg-[#12697B] text-[13px] lg:text-[18px] p-2 lg:px-6 lg:py-[14px] manrope-semibold mt-3 lg:mt-8 rounded-[50px] text-white">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
