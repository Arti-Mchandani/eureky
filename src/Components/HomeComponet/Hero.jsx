import React from "react";
// import "./Hero.css"; // CSS file for styling

const Hero = ({ backgroundImage, title, subtitle, children }) => {
  return (
    <div
      className="hero max-w-full h-[500px] bg-[#0F153B]"

    >
      <div className="hidden md:block h-full w-full overflow-hidden">
        <video src={`${backgroundImage}`} autoPlay muted loop className="h-full w-full object-cover max-w-full"></video>
      </div>
      <div className="hero-content h-[460px] content-center  md:h-auto md:bg-transparent md:absolute md:top-1/2 md:bottom-1/2 md:left-0 md:right-0 md:my-0 md:mx-auto md:-translate-y-1/2 text-white  text-center px-3">
        {title && <h1 className="hero-title text-[44px] leading-15 font-black leading-none mb-2 ">{title}</h1>}
        {subtitle && <p className="hero-subtitle text-2xl font-normal ">{subtitle}</p>}
        <div className="hero-children">{children}</div>
      </div>
    </div>
  );
};

export default Hero;