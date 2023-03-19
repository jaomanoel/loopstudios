import React from "react";

function index() {
  return (
    <div className="w-full flex justify-center items-center container-padding py-[130px]">
      <div className="max-w-[1200px] w-full flex justify-center md:justify-start items-center flex-col md:flex-row relative">
        <picture className="w-full">
          <source
            media="(min-width: 768px)"
            srcSet="./desktop/image-interactive.jpg"
          />
          <img
            className="h-[350px] w-full md:h-[500px] md:w-[731px]"
            src="./mobile/image-interactive.jpg"
            alt="Interactive vr"
          />
        </picture>

        <div className="py-68 px-[48px] md:w-600 md:absolute xl:translate-x-[570px] md:translate-x-1/4 top-2/4 bg-white">
          <h1 className="text-[3rem] text-center font-alana text-black uppercase font-light leading-none pb-12">
            The leader in interactive VR
          </h1>

          <p className="font-josefin text-center text-[1.8rem] w-250 font-medium text-dark-gray">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
