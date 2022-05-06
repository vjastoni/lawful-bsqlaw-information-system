import React, { useState } from "react";
import { Link } from "react-router-dom";
import LightButton from "./LightButton";

function NavigationBar() {
  let Links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "FAQS", path: "/faqs" },
    { name: "CONTACT US", path: "/contactus" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const changeNavBarcolor = () => {
    if (window.scrollY >= 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavBarcolor);
  return (
    <div className="w-full fixed top-0 left-0 z-[999] text-shadow-md font-bold">
      <div
        className={`md:flex items-center justify-between ${
          isScrolled ? "bg-maroon text-white" : "bg-transparent text-maroon"
        } py-4 md:px-10 px-7`}
      >
        <div
          className={`font-bold text-2xl md:text-3xl cursor-pointer flex items-center font-Lora ${
            isScrolled ? "text-white" : "bg-text-maroon"
          }`}
        >
          <div className="hover:text-yellow transition-all duration-200">
            <Link to="/">BSQLOGO</Link>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden hover:text-yellow "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center lg:justify-end md:justify-between lg:gap-10 md:gap-6 gap-16 font-Lora text-2xl md:text-xs lg:py-0 md:py-8 pb-12 absolute lg:static bg-transparent ${
            isScrolled ? "bg-maroon text-white" : "bg-transparent text-maroon"
          } md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9 lg:pr-0 md:pr-4  ease-in ${
            open ? "top-20" : "top-[-400px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 text-2xl md:my-0 my-7" key={link.name}>
              <Link
                to={link.path}
                className="hover:text-yellow transition-all duration-200"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <LightButton isScrolled={isScrolled}>GET STARTED</LightButton>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
