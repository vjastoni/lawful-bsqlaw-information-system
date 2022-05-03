import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="font-bold py-4 px-8 rounded-3xl border-white border-2 bg-gray hover:text-yellow hover:bg-maroon text-black md:text-sm md:py-3 md:px-4">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
