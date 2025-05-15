import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#05242A] text-white py-12 px-6 lg:py-[76.5px] lg:px-[108px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <div className=" lg:w-[392px] bg-[#0A3D48] rounded-2xl p-6 md-py-8 md-px-6 space-y-5">
          <p className="text-[10px] text-[#20D7FC] manrope-medium">FEEDBACK</p>
          <h2 className="text-[20px] md:text-[28px] manrope-regular leading-tight text-[#8BD2DD]">
            Seeking personalized support?{" "}
            <span className="text-white">Request a call from our team</span>
          </h2>
          <form className="space-y-4">
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                className="peer w-full bg-[#073E47] text-white placeholder-transparent  text-[14px] manrope-regular px-5 pt-6 pb-2 border border-[#5F8E94] rounded-xl focus:border-[red]"
              />
              <label
                htmlFor="name"
                className="absolute left-5 top-2 text-sm text-[#5F8E94] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#5F8E94] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#5F8E94]"
              >
                YOUR NAME
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                className="peer w-full bg-[#073E47] text-white placeholder-transparent  text-[14px] manrope-regular px-5 pt-6 pb-2 border border-[#5F8E94] rounded-xl focus:border-[red]"
              />
              <label
                htmlFor="name"
                className="absolute left-5 top-2 text-sm text-[#5F8E94] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#5F8E94] peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#5F8E94]"
              >
                PHONE NUMBER
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#12697B] text-white px-8 py-[10px] rounded-full hover:bg-[#176a78] transition"
            >
              Send a request
            </button>
          </form>
          <p className="text-xs text-[#8BD2DD]">Privacy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Info Columns */}
          <div className="text-sm">
            <h3 className="text-[#8BD2DD] text-[10px] mb-2 md:mb-6">INFO</h3>
            <div className="space-y-1 md:space-y-[10px] text-[14px] monrope-regular">
              <p>Resources</p>
              <p>Contact Us</p>
              <p>Services</p>
              <p>Blog</p>
            </div>
          </div>

          <div className="text-sm">
            <h3 className="text-[#8BD2DD] text-[10px] mb-2 md:mb-6">ABOUT US</h3>
            <div className="space-y-1 md:space-y-[10px] text-[14px] monrope-regular">
              <p>Join Our Team</p>
              <p>Technologies</p>
              <p>Contacts</p>
            </div>
          </div>

          <div className=" hidden md:block">
            <img src={logo} alt="logo" />
          </div>

          {/* Contact & Logo */}
            <div className="text-sm">
              <h3 className="text-[#8BD2DD] text-[10px] mb-2 md:mb-6">CONTACT US</h3>
              <div className="space-y-1 md:space-y-[10px] text-[14px] monrope-regular">
                <p>+1 (380) 225-1377</p>
                <p>info@lakhomehealthcare.com</p>
                <p>USA Columbus, Ohio</p>
              </div>
            </div>
            <div className=" block md:hidden">
            <img src={logo} alt="logo" />
          </div>
            <div className=" hidden md:block"></div>

                <div className=" hidden md:block"></div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-full border border-[#4C808A] hover:bg-[#4C808A]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-[#4C808A] hover:bg-[#4C808A]"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-[#4C808A] hover:bg-[#4C808A]"
              >
                <FaTwitter />
              </a>
            </div>
          {/* Bottom */}
          <div></div>

          <div className="tablet:mt-10 text-center text-xs text-[#8BD2DD]">
            © 2023 — 3512 Powered
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
