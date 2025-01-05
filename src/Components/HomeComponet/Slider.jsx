import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Slider.css";

function CustomSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const handleMouseEnterNav = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPause(); // Pause the main slider autoplay
    }
  };

  const handleMouseLeaveNav = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPlay(); // Resume the main slider autoplay
    }
  };

  const settingsMain = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 3000,
    pauseOnHover: true, // Pause on hover for main slider
    arrows: false,
    fade: true,
    speed: 500,
  };

  const settingsNav = {
    vertical: true,
    slidesToShow: 5,
    focusOnSelect: true,
    arrows: false,
    swipe: false, // Disable swipe
    draggable: false, // Disable dragging
    infinite: false,
    asNavFor: nav1,
    beforeChange: (current, next) => {
      if (sliderRef1.current) {
        sliderRef1.current.slickGoTo(next); // Sync with the main slider
      }
    },
  };

  const slides = [
    {
      id: "1",
      title: "Brand & Project Hub",
      subtitle: "Single place to manage context for all your work​",
      imgUrl: "/images/slideOne.png",
      imgHeading: "Craft custom voices and AI assistants​",
      imgDescrip:
        "Bring your wildest ideas to life with AI-powered audio and visuals that push the boundaries of what’s possible.",
    },
    {
      id: "2",
      title: "Collaborative Threads",
      subtitle: "Engage in single and shared AI-enhanced chats",
      imgUrl: "/images/slideTwo.png",
      imgHeading: "Engage in single and shared AI-enhanced chats",
      imgDescrip:
        "Harness the power of collective creativity with seamless real-time AI chat with collaboration, making distance irrelevant",
    },
    {
      id: "3",
      title: "Characters & Personas",
      subtitle: "Craft custom voices and AI assistants​",
      imgUrl: "/images/slideThree.png",
      imgHeading: "Craft custom voices and AI assistants​",
      imgDescrip:
        "Harness tailored AI personas that think and respond like industry experts, offering specialised insights across marketing, creative, and content creation.",
    },
    {
      id: "4",
      title: "Multi Modal Imagination",
      subtitle:
        "Create images, music, and video together. Unlock your inner artist.",
      imgUrl: "/images/slideFour.png",
      imgHeading: "Create images, music, and videos together.",
      imgDescrip:
        "Bring your wildest ideas to life with AI-powered audio and visuals that push the boundaries of what’s possible.",
    },
    {
      id: "5",
      title: "AI Upscale & Enhance",
      subtitle: "Make Your Imaginations Magnificent.",
      imgUrl: "/images/slideFive.png",
      imgHeading: "Transform and elevate visual content",
      imgDescrip:
        "Experience boundless visual transformation through continuous creative iterations. Let AI explore endless artistic possibilities while maintaining pristine quality.",
    },
  ];


  return (
    <div className="custom-slider-container bg-[#0F153B] h-[1300px] md:h-[847px] px-2 py-16 md:px-8">
      <h2 className="text-5xl md:text-6xl text-white font-black mb-5 text-center">Euryka at a Glance</h2>
      <div className="slider-wrapper mt-3 flex flex-col md:flex-row md:my-0 md:mx-auto md:justify-center">
        {/* Navigation Slider */}
        <div
          className="slider-nav-wrapper md:w-[30%]"
          onMouseEnter={handleMouseEnterNav}
          onMouseLeave={handleMouseLeaveNav}
        >
          <Slider
            {...settingsNav}
            asNavFor={nav1}
            ref={sliderRef2}
            className="slider-nav"
          >
            {slides.map((slide) => (
              <div key={slide.id} className="nav-slide py-4 px-9 w-[80%] md:w-[68%]">
                <p className="title text-2xl mt-2 mb-4 font-bold">{slide.title}</p>
                <p className="subtile text-xs mb-4 text-bold" hidden>{slide.subtitle}</p>
                <div key={slide.id} className="navSlideImgDeatils hidden md:hidden text-center">
                  <img src={slide.imgUrl} alt={slide.title} />
                  <div className="imgInfo">
                    <h3 className="text-[#FFD600] text-2xl font-semibold">{slide.imgHeading}</h3>
                    <p className="text-lg text-white">{slide.imgDescrip}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Main Slider */}
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={sliderRef1}
          className="slider-main hidden "
        >
          {slides.map((slide) => (
            <div key={slide.id} className="main-slide text-center">
              <img src={slide.imgUrl} alt={slide.title} />
              <div className="imgInfo"><h3 className="text-[#FFD600] text-2xl">{slide.imgHeading}</h3>
                <p className="text-lg text-white">{slide.imgDescrip}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomSlider;
