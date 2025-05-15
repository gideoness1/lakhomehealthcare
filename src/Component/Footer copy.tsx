import logo from "../assets/logo.svg"
import mail from '../assets/mail.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
// import {Link} from "react-router-dom";

const CopyrightFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-center gap-x-4 manrope-medium text-xs  tablet:text-sm text-gray-600">
            <span className={`text-[20px]`}>&copy;</span>
            <span>{currentYear} Amazing Health Care LLC</span>
        </div>
    );
};
export const Footer = () => {
    return (
        <footer
            className={`h-[481px] tablet:h-[362px] flex flex-col justify-end tablet:block bg-white px-[24.5px] pb-[32px] tablet:p-[64px] text-[#666666] `}
        >
            <div
                className={`tablet:flex justify-between items-end pb-3 border-gray-500 border-b mb-3`}
            >
                <div
                    className={`tablet:w-[378px] tablet:flex flex-col  mb-5 tablet:mb-0`}
                >
                    <div className={`mb-4`}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <p
                        className={`text-xs tablet:text-[14px] leading-[17.64px] plus-jakarta-sans-regular mb-4 `}
                    >
                        From elderly care to assistance for developmentally disabled individuals, our experienced and
                        compassionate team is here to enhance your quality of life.
                    </p>
                    <div className={`w-[122px] h-[25px] flex justify-between `}>
                        <div className={`w-[24px] h-[24px]`}>
                            <img
                                src={facebook}
                                alt="facebook_img"
                                className={`w-full`}
                            />
                        </div>
                        <div className={`w-[25px] h-[25px]`}>
                            <img src={mail} alt="mail_img" className={`w-full`}/>
                        </div>
                        <div className={`w-[25px] h-[25px]`}>
                            <img src={insta} alt="insta_img" className={`w-full`}/>
                        </div>
                    </div>
                </div>

                <div
                    className={`tablet:w-[378.67px] grid gap-[20px] text-xs tablet:text-[14px] plus-jakarta-sans-regular`}
                >
                    <p>Exclusive Residence, SOS Herman Gmeinner Street</p>
                    <p>Community 10-Tema</p>
                    <p>support@schoolmanagementapp.com</p>
                    <p>+233 550 044 888</p>
                </div>
            </div>
            <CopyrightFooter/>
        </footer>
    )
}