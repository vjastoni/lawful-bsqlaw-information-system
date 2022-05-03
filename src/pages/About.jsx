import React from "react";

function About() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center content-center justify-center font-Lora mx-3">
        <div className="self-start text-5xl text-maroon font-bold pt-10 md:pt-5">
          <h2>About</h2>
        </div>
        <div className="w-auto text-justify text-lg md:text-2xl ">
          <div className="h-screen">
            <span className="font-bold">
              Berberabe Santos & Quiñones &nbsp;
            </span>
            or simply &nbsp;
            <span className="font-bold">"BSQ"</span>
            &nbsp; was founded by three law partners, Dickson, Gilbert and
            Bayan, who worked together at a major Makati law firm. After a
            combined twenty five years of legal practice, they decided to
            establish a law firm, more grounded on their shared values and a
            deeper concern for their clients.
          </div>
          <div className="h-screen">
            BSQ is engaged in general law practice, which enables it to service
            the full and comprehensive range of its clients' legal needs. BSQ is
            likewise a multi-specialty firm, with each of the three partners
            spearheading their own fields of specialty, such as Corporate
            Housekeeping, Compliance and Reorganization, Labor and Employment,
            Civil and Commercial Claims, and Criminal Prosecution and Defense.
          </div>
          <div className="h-screen">
            BSQ distinguishes itself from other law firms by its multi-faceted
            and out-of-the-box approach to achieving legal solutions. BSQ also
            cultivates deeper and enduring relationships with its clients, who
            are considered constant partners in mutual growth and development.
          </div>
          <div className="h-screen">
            BSQ believes that the practice of our profession should be defined
            by and grounded upon our relationship with our clients. Click on the
            link below and let us start building our relationship.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
