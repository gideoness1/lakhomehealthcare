import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/mainlogopng.png";
import { useNavigate } from "react-router";

const Navbar = ({
  handleSetScroll,
}: {
  handleSetScroll: (id: string) => void;
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const [show, setShow] = useState(false);
  const toggleShowNavbarMenu = () => {
    setShow(!show);
  };

  const handleScroll = (id: string) => {
    navigate(`/`);
    setActiveTab(id);
    handleSetScroll(id);
  };

  return (
    <div id="home">
      {show && (
        <div className="w-full h-full absolute top-0 left-0 z-50 bg-white py-5 px-[22px] shadow-lg">
          <div className={`w-full flex justify-end mb-[10px]`}>
            <IoMdClose
              color={"#000000"}
              size={24}
              onClick={toggleShowNavbarMenu}
            />
          </div>
          <ul className=" flex flex-col gap-y-4 px-[13px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  handleScroll(tab.id);
                  toggleShowNavbarMenu();
                }}
                className={`cursor-pointer manrope-semibold text-left text-2xl ${
                  activeTab === tab.id ? `manrope-bold` : ""
                }`}
              >
                {tab.name}
              </button>
            ))}
          </ul>
          <button
            className="px-6 py-3.5 rounded-[50px] text-white text-[13px] md:text-[18px] manrope-bold mt-10"
            style={{ backgroundColor: "#12697B" }}
            onClick={() => {
              navigate("/work-with-us");
              toggleShowNavbarMenu();
            }}
          >
            JOIN OUR TEAM
          </button>
        </div>
      )}
      <nav className="flex items-center justify-between bg-[#12697B] text-white h-[80px] px-[20px] md:px-[48px]">
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
        <div className="monrope-semibold text-[14px] hidden lg:flex items-center">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => handleScroll(tab.id)}
              className={`cursor-pointer manrope-semibold md:w-[133px]`}
            >
              {tab.name}
            </button>
          ))}
          {window.location.pathname !== "/work-with-us" &&
            window.location.pathname !== "/apply" && (
              <button
                className="px-6 py-3.5 bg-[#00000033] rounded-[50px] hidden lg:flex text-white text-[13px] md:text-[18px] manrope-bold cursor-pointer"
                onClick={() => navigate("/work-with-us")}
              >
                JOIN OUR TEAM
              </button>
            )}
        </div>
        <div className={"lg:hidden"}>
          <TiThMenu
            size={30}
            onClick={() => {
              toggleShowNavbarMenu();
              window.scrollTo({
                top: 0,
              });
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const tabs = [
  { id: "home", name: "Home" },
  { id: "about", name: "About us" },
  { id: "services", name: "Our Services" },
  { id: "blog", name: "Blog" },
  { id: "contact", name: "Contact Us" },
];
