import React, { useEffect, useState } from "react";

function index() {
  const [windowWidth, setWindowWidth] = useState(true);

  window.addEventListener("resize", function () {
    var width = document.documentElement.clientWidth;

    if (width > 768) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false);
    }
  });

  return (
    <div
      className="w-full flex items-center h-[100vh] md:h-[60rem] container-padding justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(./${
          windowWidth ? "desktop" : "mobile"
        }/image-hero.jpg)`,
      }}
    >
      <div className="max-w-[1200px] w-full flex justify-between items-start">
        <div className="max-w-[70rem] mt-[7rem] w-full flex items-start justify-start flex-col p-10 border-2 border-white border-solid">
          <h1 className="text-[3.8rem] md:text-[7.3rem] font-light text-white font-atana tracking-widest leading-none">
            IMMERSIVE
          </h1>

          <h1 className="text-[3.8rem] md:text-[7.3rem] font-light text-white font-atana tracking-widest leading-none">
            EXPERIENCES
          </h1>

          <h1 className="text-[3.8rem] md:text-[7.3rem] font-light text-white font-atana tracking-widest leading-none">
            THAT DELIVER
          </h1>
        </div>
      </div>
    </div>
  );
}

export default index;
