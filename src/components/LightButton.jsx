import React from "react";

const LightButton = ({ children, isScrolled }) => {
  console.log(isScrolled);
  return (
    <div>
      <button
        className={`font-bold py-4 px-8 rounded-3xl hover:text-yellow md:text-sm md:py-3 md:px-4 transition-all duration-200 ${
          isScrolled
            ? "bg-white text-black border-white border-2 hover:bg-maroon"
            : "bg-maroon text-white border-maroon border-2 hover:bg-gray hover:text-black"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default LightButton;
