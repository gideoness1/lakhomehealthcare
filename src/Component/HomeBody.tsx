import hero from "../assets/hero1.svg"
import Button from "./ui/Button.tsx";
import {FiArrowRight} from "react-icons/fi";
import {cardList, Offers, Values} from "../utils/constants.tsx";
import healthteam from "../assets/healthteam.svg"
import grouped from "../assets/groupedpictures.svg"
import {useNavigate} from "react-router-dom";

type CardProps = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    apply?: boolean
};

export const Card: React.FC<CardProps> = ({
                                              id,
                                              title,
                                              description,
                                              imageUrl,
                                              apply = false
                                          }) => {
    const navigate = useNavigate()
    return (
        <div
            className="w-full tablet:w-[300.25px] h-[338px] p-[10px] bg-white rounded-lg mb-[16px] tablet:mb-[80px] desktopMd:mb-0">
            <div className={'relative tablet:w-[280px]'}>
                <img
                    src={imageUrl}
                    alt={title}
                    className=" w-full h-[204px] object-cover mb-[10px]"
                />
                <span
                    className={`w-[42px] h-[42px] tablet:w-[57px] tablet:h-[57px] bg-primary absolute top-[58%] tablet:top-[45%] left-[45%] tablet:left-[36%]   text-white text-[24px] plus-jakarta-sans-regular flex items-center justify-center rounded-lg`}>
          {id}
        </span>
                <div className={`h-[100px] tablet:h-full py-4 tablet:p-6 bg-white rounded-lg text-left`}>
                    <h3 className="text-[18px] tablet:text-[24px] leading-[28px] gelasio-regular text-black tablet:w-[232.25px] tablet:mb-2">{title}</h3>
                    <p className="text-gray plus-jakarta-sans-regular text-[14px] tablet:text-[16px] leading-[28px] mb-2 tablet:w-[232.25px] line-clamp-3">{description}</p>
                    {apply &&
                        <div className={`flex text-primary gap-x-2 cursor-pointer`}
                             onClick={() => navigate('/apply')}>
                            <p className={`gelasio-bold text-[14px] tablet:text-[18px] leading-[28px] uppercase`}>Apply
                                now </p>
                            <span><FiArrowRight
                                className="w-4 h-4 tablet:w-6 tablet:h-6 "/></span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
        ;
};


interface ValueItemProps {
    id: number;
    title: string;
    description: string;
    className?: string
}

/* Child Component */
const ValueItem: React.FC<ValueItemProps> = ({id, title, description, className}) => (
    <div className={`flex items-start gap-x-[10px] tablet:w-[544px] mb-[10px] tablet:mb-[37px] ${className}`}>
        <div
            className="w-[42px] h-[42px] tablet:w-[57px] tablet:h-[57px] bg-primary text-white text-[18px] tablet:text-[24px] plus-jakarta-sans-regular flex items-center justify-center rounded-lg">
            {id}
        </div>
        <div className={`w-[350px] tablet:w-[457px] `}>
            <h3 className="text-[18px] tablet:text-[24px] gelasio-regular leading-[28px] mb-2">
                {title}
            </h3>
            <p className="text-[#666666] plus-jakarta-sans-regular tablet:w-[477px] text-[14px] tablet:text-[16px] leading-[28px]">
                {description}
            </p>
        </div>
    </div>
);


export const HomeBody = () => {
    const navigate = useNavigate()

    const handleWorkWithUsNavigation = () => {
        navigate('/work-with-us')
    }

    return (<>
        <section className={`tablet:h-[591px] tablet:py-[92px] tablet:px-[95.5px] tablet:flex-between-start`}>
            <div className={`mb-6 tablet:mb-0`}>
                <img src={hero} alt="hero_logo"/>
            </div>
            <div className={`px-4 flex items-center justify-between`}>

                <div
                    className={`tablet:w-[605px] flex flex-col items-center justify-center tablet:block mb-[10px] tablet:mb-0`}>
                    <h1 className={`text-[24px] tablet:text-[45px] leading-[24px] tablet:leading-[44px] gelasio-semibold mb-3 tablet:mb-6`}> Join
                        the Amazing Healthcare Family</h1>
                    <p className={` text-gray-800 tablet:text-[22px] leading-[24px] tablet:leading-[32px] tablet:plus-jakarta-sans-regular  plus-jakarta-sans-semibold mb-6`}>Make
                        a difference in lives
                        while growing your career with a compassionate and dynamic team.</p>
                    <p className={`text-[14px] tablet:text-[16px] text-gray-800  leading-6 tablet:leading-[32px] plus-jakarta-sans-regular mb-6`}>At
                        Amazing Healthcare, we’re
                        not just a care provider—we’re a family. We’re looking for passionate, skilled, and dedicated
                        individuals to join our team and help us deliver exceptional, personalized care to our
                        clients.</p>

                    <Button variant={'primary'} className={`!w-[172px] tablet:!w-[208px]`}
                            onClick={handleWorkWithUsNavigation}>Join Our
                        Team</Button>
                </div>
            </div>
        </section>
        <section className={`bg-graybg desktopMd:h-[796px] py-[24px] tablet:py-[76.5px] px-[16px] tablet:px-[64px] `}>
            <div className={`flex flex-col items-center text-center`}>
                <h3 className={`text-[14px] tablet:text-[16px] text-gray plus-jakarta-sans-bold mb-[10px]`}>Why Work
                    With Us</h3>
                <h2 className={`text-[20px] tablet:text-[28px] leading-[32px] text-black gelasio-semibold mb-[10px]`}>Comprehensive
                    Care
                    Designed for Everybody</h2>
                <p className={`tablet:w-[559px] text-gray text-[14px] tablet:text-[16px] plus-jakarta-sans-regular mb-[10px]`}>At
                    Amazing Healthcare, we offer
                    a wide range of in-home care services to meet the diverse needs of our clients. These include:</p>
                <div className={`p-[22px] flex-center text-primary gap-x-2 mb-[10px] cursor-pointer`}
                     onClick={handleWorkWithUsNavigation}>
                    <p className={`gelasio-bold text-[14px] tablet:text-[18px] leading-[28px] uppercase`}>Join US
                        Today </p>
                    <span> <FiArrowRight
                        className="w-4 h-4 tablet:w-6 tablet:h-6 "
                    /></span>
                </div>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 desktopMd:grid-cols-4 gap-x-[37px]">
                {cardList.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </section>
        <section className={`bg-white tablet:h-[768px] py-[24px] tablet:py-[36.5px]  tablet:px-[64px]`}>
            <div className={`flex flex-col items-center text-center mb-6 px-[16px] tablet:px-0`}>
                <h2 className={`text-[20px] tablet:text-[28px] leading-[32px] text-black gelasio-semibold mb-[10px]`}>Meet
                    the Heart of
                    Amazing Healthcare</h2>
                <p className={`desktop:w-[902px] text-[14px] tablet:text-[16px] text-gray leading-[24px] plus-jakarta-sans-regular mb-[10px]`}> At
                    Amazing
                    Healthcare, we are
                    proud to have a team of skilled, compassionate, and experienced professionals who share a common
                    mission: enhancing lives through personalized care. Each member of our team brings unique expertise
                    and a deep commitment to creating safe, supportive, and nurturing environments for our clients.</p>
                <div className={`w-[313px] h-[56px] flex-center text-primary gap-x-2 mb-[10px] cursor-pointer`}
                     onClick={handleWorkWithUsNavigation}>
                    <p className={`gelasio-bold text-[14px] tablet:text-[18px] leading-[28px] uppercase`}>Join Our Team
                        today </p>
                    <span><FiArrowRight
                        className="w-4 h-4 tablet:w-6 tablet:h-6 "/></span>
                </div>
            </div>
            <div className={`tablet:h-[491px] tablet:flex  gap-x-[48px]`}>
                <div className={`mb-6 tablet:mb-0`}>

                    <img src={healthteam} alt="health_logo" className={`object-cover tablet:w-[720px]`}/>
                </div>
                <div className={`px-[16px] tablet:px-0`}>
                    {Values.map((value) => (
                        <ValueItem key={value.id} {...value} />
                    ))}
                </div>
            </div>
        </section>

        <section className={`bg-graybg tablet:h-[768px] py-[24px] tablet:py-[59.5px] tablet:px-[64px]`}>
            <div className={`flex flex-col items-center text-center px-[16px] tablet:px-0`}>
                <h2 className={`text-[20px] tablet:text-[28px] leading-[32px] text-black gelasio-semibold mb-[10px]`}>Why
                    Families Choose
                    Amazing Healthcare</h2>
                <p className={`tablet:w-[620px] text-[14px] tablet:text-[16px] text-gray plus-jakarta-sans-regular mb-[10px]`}>Compassionate
                    care.
                    Professional expertise. Unwavering reliability
                    Choosing Amazing Healthcare means trusting a team that prioritizes family needs above all else.
                    Here’s why we stand out</p>
                <div className={`p-[22px] flex-center text-primary gap-x-2 mb-[10px] cursor-pointer`}
                     onClick={handleWorkWithUsNavigation}>
                    <p className={`gelasio-bold text-[14px] tablet:text-[18px] leading-[28px] uppercase`}>start your
                        career journey
                        today</p>
                    <span><FiArrowRight
                        className="w-4 h-4 tablet:w-6 tablet:h-6 "/></span>
                </div>
            </div>

            <div className={`tablet:h-[445px] tablet:flex gap-x-[48px] `}>
                <div className={`px-[16px] tablet:px-0`}>
                    {Offers.map((value) => (
                        <ValueItem key={value.id} {...value} className={`p-[10px]`}/>
                    ))}
                </div>
                <div>
                    <img src={grouped} alt="health_logo" className={`object-cover tablet:w-[726px]`}/>
                </div>
            </div>
        </section>
    </>)
}