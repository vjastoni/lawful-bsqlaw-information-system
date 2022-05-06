import React from "react";

function Faqs() {
  return (
    <div>
      <div className="min-h-screen flex flex-col content-center bg-white p-2">
        <div className="md:w-[550px] md:text-xl md:flex md:flex-col md:self-center lg:flex lg:flex-row lg:gap-10 lg:w-[900px] lg:h-screen lg:items-center ">
          <div className="flex flex-col gap-4">
            <div className="self-start text-5xl text-maroon font-bold pt-5 gap-20 md:pt-5 md:flex md:flex-col md:self-center lg:flex lg:self-start lg:text-3xl">
              <h2>FAQs</h2>
            </div>
            <div className="text-justify">
              <span className="font-bold">
                1. What shouldIbring to the consultation or first meeting?
              </span>{" "}
              People may not know what they need to bring with them, or that
              they need to bring anything at all. Of course, the exact paperwork
              or documents you need may vary depending on the specific claim or
              case they have, but you can at least providea general answer here.
              Let them know that they should bring any relevant paperwork, their
              ID, any existing legal documentation (including police records),
              and so forth.
            </div>
            <div className="text-justify">
              <span className="font-bold">
                2. Will there be more than one attorney working on my case?
              </span>{" "}
              Some law firms have teams or partners that work on cases together,
              while others assign cases to one attorney, and they are the only
              one who handles it. Clients, naturally, may also havea preference
              here or at least may want to know what to expect. Make sure that
              you provide this question and answer it honestly.
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 lg:pt-[70px]">
            <div className="text-justify">
              <span className="font-bold">
                3. What is the typical legal process like?
              </span>{" "}
              Everyone wants to know what to expect. The problem is that no
              legal process is "typical". While proceedings can be similar, and
              while case lengths can havealimited range in some instances, every
              single case is different. We know what you're thinking: so why
              offer this Q&A?
            </div>
            <div className="text-justify">
              <span className="font-bold">
                4.What types of cases does your law firm handle?
              </span>{" "}
              This one should be pretty obvious. People need to know what you
              do. Not all lawyers handle all types of cases-make sure you make
              it clear for people, so you don't waste their time. When it comes
              to legal issues, people have enough to worry about. Trying to
              figure out whether or not you'll handle their case is not
              something they want to add to their list.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
