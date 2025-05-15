import { FiArrowLeft } from "react-icons/fi";
import Button from "./ui/Button.tsx";
import ApplicationModal from "./ApplicationModal.tsx";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal.tsx";
import { useLocation } from "react-router";
import { useEffect } from "react";

export const Apply = () => {
  const location = useLocation();
  const state = location.state as { title: string };
  const navigate = useNavigate();
  const { isModalActive, showModal } = useModal();
  const openUploadFileModal = () => showModal("showUploadFileModal");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`bg-[#F5F5F5] p-4 pb-[48px] md:p-0 md:px-[64px] md:py-[48px] md:flex justify-between`}
    >
      {isModalActive("showUploadFileModal") && <ApplicationModal />}
      <div
        className={`bg-white md:w-[785px] md:h-[1029px] p-4 md:p-6 rounded-lg flex-center mb-5 md:mb-0 `}
      >
        <div className={`md:w-[737px]`}>
          <div
            className={`flex items-center gap-x-[10px] mb-6 cursor-pointer`}
            onClick={() => navigate("/work-with-us")}
          >
            <FiArrowLeft size={24} color={`#0E5462`} />{" "}
            <p className={`manrope-medium leading-[24px] text-[#4F4F4F]`}>
              Job Opening
            </p>
          </div>
          <h1 className={`text-[32px] leading-[32px] manrope-bold mb-6`}>
            {state.title}
          </h1>
          <p className={`text-[#4F4F4F] leading-[24px] manrope-medium mb-6`}>
            Are you passionate about making a difference in the lives of others?
            Lak Home Healthcare is looking for compassionate and dedicated
            Nursing Home Attendants to join our dynamic team!
          </p>
          <h3 className={`leading-[32px] manrope-bold mb-6`}>About the Role</h3>
          <p className={`text-[#4F4F4F] leading-[24px] manrope-medium mb-6`}>
            As a Nursing Home Attendant, you’ll play a vital role in providing
            top-quality care to our residents, ensuring their comfort, safety,
            and well-being. From assisting with daily activities to offering
            emotional support, your work will be at the heart of creating a
            nurturing and positive environment.
          </p>
          <h3 className={`leading-[32px] manrope-bold mb-6`}>
            Key Responsibilities
          </h3>
          <ul className={`text-[#4F4F4F] leading-[24px] manrope-medium mb-6 `}>
            <li>
              Assist residents with personal care needs, including bathing,
              dressing, and grooming.
            </li>
            <li>
              Support residents with mobility, transfers, and daily activities.
            </li>
            <li>Maintain a clean and safe living environment.</li>
            <li>
              Monitor and report changes in residents’ health or behavior to the
              nursing team.
            </li>
            <li>
              Provide companionship and build meaningful relationships with
              residents.
            </li>
            <li>
              Ensure residents’ dignity, independence, and privacy at all times.
            </li>
          </ul>
          <h3 className={`leading-[32px] manrope-bold mb-6`}>
            What We’re Looking For
          </h3>
          <ul className={`text-[#4F4F4F] leading-[24px] manrope-medium mb-6`}>
            <li>
              A caring and empathetic nature with a passion for helping others.
            </li>
            <li>Strong communication and interpersonal skills.</li>
            <li>Ability to work effectively as part of a team.</li>
            <li>
              Previous experience in caregiving or healthcare is a plus, but
              we’re willing to train the right candidate!
            </li>
            <li>
              Flexibility to work shifts, including weekends and holidays.
            </li>
          </ul>
          <h3 className={`leading-[32px] manrope-bold mb-6`}>
            Why Join Lak Home Healthcare?
          </h3>
          <ul className={`text-[#4F4F4F] leading-[24px] manrope-medium mb-6 `}>
            <li>Competitive salary and benefits.</li>
            <li>
              Comprehensive training and opportunities for professional growth.
            </li>
            <li>A supportive, team-oriented work environment.</li>
            <li>
              The chance to make a meaningful impact in the lives of our
              residents every day.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`bg-white md:w-[503px] md:h-[528px] p-4 md:py-6 flex-center`}
      >
        <div className={`md:w-[455px] text-[#4F4F4F]`}>
          <p className={`leading-[24px] manrope-medium mb-6`}>
            Don’t miss this opportunity to join a team that values your
            dedication and passion. Apply now and start a fulfilling career with
            Lak Home Healthcare!
          </p>
          <Button
            variant={`primary`}
            className={`mb-6 !bg-[#12697B] !text-white !text-[18px] !uppercase`}
            onClick={openUploadFileModal}
          >
            Apply Now
          </Button>

          <div className={`mb-4`}>
            <h3 className={`leading-[24px] manrope-bold`}>Location</h3>
            <span className={`leading-[24px] manrope-medium`}>
              Accra, Greater Accra
            </span>
          </div>
          <div className={`w-full h-[1px] bg-[#E7E7E7] mb-4`}></div>
          <div className={`mb-4`}>
            <h3 className={`leading-[24px] manrope-bold`}>Department</h3>
            <span className={`leading-[24px] manrope-medium`}>Healthcare</span>
          </div>
          <div className={`w-full h-[1px] bg-[#E7E7E7] mb-4`}></div>
          <div className={`mb-4`}>
            <h3 className={`leading-[24px] manrope-bold`}>Employment Type</h3>
            <span className={`leading-[24px] manrope-medium`}>
              Full Time / Part-Time/ On-Call
            </span>
          </div>
          <div className={`w-full h-[1px] bg-[#E7E7E7] mb-4`}></div>
          <div className={`mb-4`}>
            <h3 className={`leading-[24px] manrope-bold`}>
              Minimum Experience
            </h3>
            <span className={`leading-[24px] manrope-medium`}>Experienced</span>
          </div>
        </div>
      </div>
    </div>
  );
};
