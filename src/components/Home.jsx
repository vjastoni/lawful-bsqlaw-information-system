import React from "react";
import NavigationBar from "./NavigationBar";

function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="bg-white h-screen font-Lora ">
        <div className="ml-[20%] flex flex-col gap-16">
          <div>
            <span className="text-[5vw] text-maroon">
              B
            </span>
            <span className="text-4xl text-maroon">
              erberabe
            </span>
          </div>
          <div>
            <span className="text-[5vw] text-maroon">
              S
            </span>
            <span className="text-4xl text-maroon">
              antos
            </span>
          </div>
          <div>
            <span className="text-[5vw] text-maroon">
              Q
            </span>
            <span className="text-4xl text-maroon">
              uiñones
            </span>
          </div>
          <div>
            <span className="text-[5vw] text-maroon">
              LAW
              FIRM
            </span>
          </div>
        </div>
        <div className="mt-[2%] text-center text-3xl text-black">
          An
          Affordable
          Legal Help
        </div>
      </div>
    </div>
  );
}

export default Home;
