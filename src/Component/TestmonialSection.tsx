import { TestimonialCard } from "./TestimonialCard";
import groupedImage from "../assets/Images.png";
import shadowup from "../assets/shadowup.svg";
import shadowdown from "../assets/shadowdown.svg";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Mensah",
      rating: 5,
      message:
        "The caregivers at have been kind, professional, and a true blessing in helping my mother stay safe and comfortable at home",
    },
    {
      name: "John Smith",
      rating: 4,
      message:
        "Thanks to LAK Home Healthcare, my father gets the care he needs at home, and our whole family has peace of mind.",
    },
    {
      name: "Emily Clark",
      rating: 4,
      message:
        "The team at LAK Home Healthcare has made a big difference in our lives with their reliable, compassionate care.",
    },
    {
      name: "Hassan Mohammed",
      rating: 5,
      message:
        "I’m so grateful for the support and kindness LAK Home Healthcare provides every day — they truly treat us like family.",
    },
  ];

  return (
    <section
      id="blog"
      className="relative overflow-hidden flex flex-col-reverse lg:flex-row bg-[#12697B] text-white py-12 px-6 lg:px-[100px] lg:py-[71.5px] mb-[60px] lg:mb-[150px]"
    >
      <div className="absolute bottom-[-180px] md:top-[200px] left-[-150px] md:left-[-50px]">
        <img src={shadowup} alt="logo" />
      </div>
      <div className="absolute bottom-[70px] right-[-220px] md:right-[-50px]">
        <img src={shadowdown} alt="logo" />
      </div>
      <div>
        <h2 className=" text-[24px] lg:text-3xl font-integral mb-5 lg:w-[330px] capitalize  ">
          WHAT OUR CLIENTS HAVE TO SAY
        </h2>
        <div className="grid md:grid-cols-2 gap-[52px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div className=" relative">
        <img src={groupedImage} alt="Grouped Image " />
      </div>
    </section>
  );
};
