"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Places = ({ images, alt, cityId }) => {
  const sliderRef = useRef(null);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleImageClick = (imageId) => {
    // Redirect to the about page with the city id and image id
    router.push(`/top?id=${cityId}&imageId=${imageId}`);
  };

  return (
    <div className="w-full h-full lg:h-full xl:px-28 lg:px-24 md:px-12 px-6 py-16 overflow-hidden bg-[#FFFAFA]">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-14">
        <div className="w-full md:h-16 h-14 border-l-8 border-red-500 flex justify-start items-center px-6">
          <h1 className="md:text-4xl text-2xl text-black font-bold">
            Popular Attractions
          </h1>
        </div>
        <div className="relative w-full h-full">
          <button
            className="absolute lg:top-[35%] md:top-[28%] lg:left-[-20px] md:left-[-15px] z-10 bg-black text-white text-2xl lg:text-3xl pb-[6px] hover:bg-gray-400 rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 hidden md:flex items-center justify-center"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            &#8592;
          </button>

          {/* Custom Next Arrow */}
          <button
            className="absolute lg:top-[35%] md:top-[28%] lg:right-[-20px] md:right-[-15px] z-10 bg-black text-white text-2xl lg:text-3xl pb-[6px] hover:bg-gray-400 rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 hidden md:flex items-center justify-center"
            onClick={() => sliderRef.current?.slickNext()}
          >
            &#8594;
          </button>
          <div>
            <Slider ref={sliderRef} {...settings}>
              {images.map((item) => (
                <div
                  key={item.id} // Use the image id as key for each slide
                  className="flex flex-col items-center gap-4 cursor-pointer pl-2 pr-2"
                  onClick={() => handleImageClick(item.id)} // Pass the image id on click
                >
                  <div className="flex items-center justify-center overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={alt}  // Alt text passed from Readmore
                      width={500}
                      height={500}
                      className="object-cover w-[1500px] h-[400px]"
                    />
                  </div>
                  <p className="mt-2 lg:text-2xl font-medium md:text-xl text-sm">{item.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
