import { useNavigate } from "react-router";
import joinImage from "../assets/joinImage.png";

const JoinTeam = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-6 lg:mx-0 lg:px-[103px] mb-5 lg:mb-[150px]">
      <div
        className={`w-full flex flex-col lg:flex-row justify-center lg:space-x-[44px]`}
      >
        <div>
          <img src={joinImage} alt="joinImage" className="w-full mb-[44px] md:mb-0" />
        </div>
        <div className="mb-5 lg:mb-0">
          <div className="lg:w-[579px] text-[#12697B] text-[14px] lg:text-[20px] manrope-semibold space-y-2 lg:space-y-8">
            <h1 className="text-[26px] lg:text-[36px] font-integral capitalize">
              join our team
            </h1>
            <p className="text-[#4F4F4F]">
              LAK Home Healthcare provides equal job opportunity for all. We
              safeguard employees and job applicants from discrimination on the
              basis of their race, color, religion, gender identity, sexual
              orientation, national origin, age, disability, family medical
              history, political affiliation ,or other non-merit based factors.
            </p>
          </div>
          <button onClick={()=>navigate("/work-with-us")} className="bg-[#12697B] text-[13px] lg:text-[18px] cursor-pointer p-2 px-6 py-[14px] manrope-semibold mt-3 lg:mt-8 rounded-[50px] text-white">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
