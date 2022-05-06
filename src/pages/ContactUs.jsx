import React from "react";
import MaroonButton from "../components/MaroonButton";

function ContactUs() {
  return (
    <div>
      <div className="min-h-[300vh] flex flex-col content-center bg-white gap-10 p-2 md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:justify-center lg:gap-44 lg:m-0 text-shadow-xl font-Lora">
        <div className="flex flex-col items-start content-center gap-5">
          <div className="self-start text-5xl text-maroon font-bold pt-[20%] md:pt-5 md:flex md:flex-col md:self-center lg:flex lg:self-start lg:text-3xl 2xl:text-6xl">
            <h2>Contact Us</h2>
          </div>
          <form
            action=""
            className="flex flex-col items-start content-center gap-5"
          >
            <input
              type="text"
              id="name"
              placeholder="NAME:"
              className=" border border-solid border-none rounded w-full h-8 pl-2"
            ></input>
            <input
              type="text"
              id="email"
              placeholder="EMAIL:"
              className="border border-solid border-none rounded w-full h-8 pl-2"
            ></input>
            <input
              type="text"
              id="subject"
              placeholder="SUBJECT:"
              className="border border-solid border-none rounded w-full h-8 pl-2"
            ></input>
            <textarea
              rows="4"
              cols="42"
              placeholder="MESSAGE"
              className="pl-2"
            ></textarea>
          </form>
          <MaroonButton>Submit</MaroonButton>
          <div className="lg:self-start md:self-center lg:pt-32">
            <span className="font-bold">Getting in touch is easy!</span> <br />
            partners@bsqlaw.com
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex md:flex-col md:items-center lg:pl-20 lg:pt-11">
          <h4 className="font-bold">Find us here!</h4>
          <div className="flex flex-col items-center content-center">
            <iframe
              className="w-80 h-72 border border-solid shadow-md border-gray md:w-96 lg:w-60 lg:h-60 xl:w-[600px] xl:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9217151329985!2d121.04287471420662!3d14.603535280921344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7d7869a44d5%3A0x1c8e36b34df81b83!2sBTTC%20Center!5e0!3m2!1sen!2sph!4v1651834797800!5m2!1sen!2sph"
              loading="lazy"
              title="bttcCenter"
            ></iframe>
          </div>
          <div className="md:flex md:flex-col md:self-center md:items-center md:w-72 lg:text-xs lg:w-80 lg:self-start font-bold">
            Unit 908 BTTC Center Ortigas Corner Roosevelt Street, Greenhills,
            1502, San Juan City, Philippines
          </div>
          <div className="md:flex md:flex-col md:self-center md:items-center md:w-72 lg:text-xs lg:w-80 lg:self-start font-bold">
            Telephone Nos: (632) 753-1473, 753-1475, 753-1819 •Telefax: (632)
            845-2371 Mobile: +639162283692
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
