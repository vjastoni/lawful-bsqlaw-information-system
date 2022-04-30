import React from "react";

function NavigationBar() {
  return (
    <div className="bg-maroon p-6 flex justify-between items-center font-Lora font-semibold">
      <div className="">
        BSQ Logo
      </div>
      <div className="flex justify-around padding-2 text-white gap-20 font-semibold text-2xl items-center">
        <li className="list-none hover:text-yellow">
          <a href="#">
            Home
          </a>
        </li>
        <li className="list-none hover:text-yellow">
          <a href="#">
            About
          </a>
        </li>
        <li className="list-none hover:text-yellow">
          <a href="#">
            FAQs
          </a>
        </li>
        <li className="list-none hover:text-yellow">
          <a href="#">
            Contact
            Us
          </a>
        </li>
        <li className="list-none ">
          <button className="font-bold py-4 px-8 rounded-3xl border-white border-2 bg-gray hover:text-yellow hover:bg-maroon text-black">
            Get
            Started
          </button>
        </li>
      </div>
    </div>
  );
}

export default NavigationBar;
