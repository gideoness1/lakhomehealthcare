import {FiArrowLeft} from "react-icons/fi";
import Button from "./ui/Button.tsx";
import ApplicationModal from "./ApplicationModal.tsx";
import {useNavigate} from "react-router-dom";
import { useModal } from "../hooks/useModal.tsx";

export const Apply = () => {
    const navigate = useNavigate();
    const {isModalActive, showModal} = useModal();
    const openUploadFileModal = () => showModal("showUploadFileModal");
    return (
        <div className={`bg-[#F5F5F5] p-4 tablet:px-[64px] tablet:py-[48px] tablet:flex justify-between`}>
            {isModalActive("showUploadFileModal") && <ApplicationModal/>}
            <div className={`bg-white tablet:w-[785px] tablet:h-[1029px] p-4 tablet:py-6 rounded-lg flex-center mb-5 tablet:mb-0 `}>
                <div className={`tablet:w-[737px]`}>
                    <div className={`flex items-center gap-x-[10px] mb-6 cursor-pointer`} onClick={()=>navigate('/work-with-us')}>
                        <FiArrowLeft size={24} color={`#9A1E23`}/> <p
                        className={`plus-jakarta-sans-regular leading-[24px] text-gray`}>Job Opening</p>
                    </div>
                    <h1 className={`text-[28px] leading-[32px] gelasio-semibold mb-6`}>Nursing Home Attendant</h1>
                    <p className={`text-gray leading-[24px] plus-jakarta-sans-regular mb-6`}>Are you passionate about
                        making a
                        difference in the lives of others? Amazing Healthcare is looking for compassionate and dedicated
                        Nursing Home Attendants to join our dynamic team!</p>
                    <h3 className={`leading-[32px] gelasio-bold mb-6`}>About the Role</h3>
                    <p className={`text-gray leading-[24px] plus-jakarta-sans-regular mb-6`}>As a Nursing Home Attendant,
                        you’ll
                        play a
                        vital role in providing top-quality care to our residents, ensuring their comfort, safety, and
                        well-being. From assisting with daily activities to offering emotional support, your work will
                        be at the heart of creating a nurturing and positive environment.</p>
                    <h3 className={`leading-[32px] gelasio-bold mb-6`}>Key Responsibilities</h3>
                    <ul className={`text-gray leading-[24px] plus-jakarta-sans-regular mb-6 `}>
                        <li>Assist residents with personal care needs, including bathing, dressing, and grooming.</li>
                        <li>Support residents with mobility, transfers, and daily activities.</li>
                        <li>Maintain a clean and safe living environment.</li>
                        <li>Monitor and report changes in residents’ health or behavior to the nursing team.</li>
                        <li>Provide companionship and build meaningful relationships with residents.</li>
                        <li>Ensure residents’ dignity, independence, and privacy at all times.</li>
                    </ul>
                    <h3 className={`leading-[32px] gelasio-bold mb-6`}>What We’re Looking For</h3>
                    <ul className={`text-gray leading-[24px] plus-jakarta-sans-regular mb-6`}>
                        <li>A caring and empathetic nature with a passion for helping others.</li>
                        <li>Strong communication and interpersonal skills.</li>
                        <li>Ability to work effectively as part of a team.</li>
                        <li>
                            Previous experience in caregiving or healthcare is a plus, but we’re willing to
                            train the right candidate!
                        </li>
                        <li>Flexibility to work shifts, including weekends and holidays.</li>
                    </ul>
                    <h3 className={`leading-[32px] gelasio-bold mb-6`}>Why Join Amazing Healthcare?</h3>
                    <ul className={`text-gray leading-[24px] plus-jakarta-sans-regular mb-6 `}>
                        <li>Competitive salary and benefits.</li>
                        <li>Comprehensive training and opportunities for professional growth.</li>
                        <li>A supportive, team-oriented work environment.</li>
                        <li>The chance to make a meaningful impact in the lives of our residents every day.</li>
                    </ul>

                </div>

            </div>
            <div className={`bg-white tablet:w-[503px] tablet:h-[528px] p-4 tablet:py-6 flex-center`}>
                <div className={`tablet:w-[455px] text-gray`}><p
                    className={`leading-[24px] plus-jakarta-sans-regular mb-6`}>Don’t miss
                    this opportunity to join a
                    team that values your dedication and passion. Apply now and start a fulfilling career with Amazing
                    Healthcare!</p>
                    <Button variant={`primary`} className={`mb-6`} onClick={openUploadFileModal}>Apply This Job</Button>

                    <div className={`mb-4`}>
                        <h3 className={`leading-[24px] plus-jakarta-sans-bold`}>Location
                        </h3>
                        <span className={`leading-[24px] plus-jakarta-sans-regular`}>
                        Accra, Greater Accra
                        </span>
                    </div>
                    <div className={`w-full h-[1px] bg-[#E7E7E7] mb-4`}></div>
                    <div className={`mb-4`}>
                        <h3 className={`leading-[24px] plus-jakarta-sans-bold`}>Department
                        </h3>
                        <span className={`leading-[24px] plus-jakarta-sans-regular`}>
                        Healthcare
                        </span>
                    </div>
                    <div className={`w-full h-[1px] bg-[#E7E7E7] mb-4`}></div>
                    <div className={`mb-4`}>
                        <h3 className={`leading-[24px] plus-jakarta-sans-bold`}>Employment Type
                        </h3>
                        <span className={`leading-[24px] plus-jakarta-sans-regular`}>
                            Full Time / Part-Time/ On-Call
                        </span>
                    </div>
                    <div className={`w-full h-[1px] bg-[#E7E7E7] mb-4`}></div>
                    <div className={`mb-4`}>
                        <h3 className={`leading-[24px] plus-jakarta-sans-bold`}>Minimum Experience
                        </h3>
                        <span className={`leading-[24px] plus-jakarta-sans-regular`}>
                        Experienced
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};