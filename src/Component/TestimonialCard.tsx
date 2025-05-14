import { FaRegStar, FaStar } from "react-icons/fa";

type TestimonialCardProps = {
    name: string;
    rating: number;
    message: string;
  };
  
  export const TestimonialCard = ({ name, rating, message }: TestimonialCardProps) => {
    return (
      <div className="max-w-xs space-y-[10px]">
        <div className="flex space-x-1 text-[#FF9D00]">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
          ))}
        </div>
        <h3 className="manrope-bold text-white text-[20px]">{name}</h3>
        <p className="manrope-regular">{message}</p>
      </div>
    );
  };
  