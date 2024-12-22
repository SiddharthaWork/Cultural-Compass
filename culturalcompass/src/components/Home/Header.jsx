"use client"

import CustomButton from "../Button/CustomButton";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const backgroundImages = [
    "lakhey.jpg",
    "Homebg1.png",
    "Homebg1.jpg",
  ];

  const slideDuration = 400;
  const autoSlideInterval = 4000

  

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setIsSliding(false);
    }, slideDuration);
  };

  const handlePrevious = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1);
      setIsSliding(false);
    }, slideDuration);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  });

  return ( 
  <div className=" bg-gray-400">
    <div className={`relative flex flex-row items-center justify-center overflow-hidden transition-all duration-500 ${isSliding ? "translate-x-0" : ""}`}
     style={{
      backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="w-[10%] flex md:justify-center justify-end items-center">
        <GrPrevious onClick={handlePrevious} className="bg-[#2B2B2B] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#FEC601] hover:font-bold hover:text-black lg:w-[60px] md:p-4 p-2 lg:p-5 lg:h-[60px] md:w-12 md:h-12 w-8 h-8 rounded-full text-white text-xl"/>
      </div>
      <div className="flex flex-col w-[80%] md:py-28 py-16 gap-4 lg:pl-32 md:pl-24 pl-12">
        <h2 className="text-white md:text-6xl text-5xl lg:text-7xl font-semibold"><span className="text-red-500">Explore</span>Nepal</h2>
        <p className="text-white lg:text-3xl md:text-2xl text-xl font-normal">A Journey Through Culture, Adventure, and Serenity</p>
        <p className="text-white lg:text-lg md:text-base text-sm font-normal md:w-[70%] w-[80%]"> Discover the rich heritage, breathtaking landscapes, and vibrant traditions of Nepal. From the majestic Himalayas to serene temples, embark on an unforgettable cultural and travel experience.</p>
        <CustomButton buttonText="Plan Your Trip"/>
      </div>
      <div className="w-[10%] flex md:justify-center justify-start items-center ">
        <GrNext onClick={handleNext} className="bg-[#2B2B2B] cursor-pointer hover:font-bold transition-all duration-300 ease-in-out hover:bg-[#FEC601] lg:w-[60px] md:p-4 p-2 lg:p-5 lg:h-[60px] md:w-12 md:h-12 w-8 h-8 rounded-full hover:text-black text-white text-xl"/>
      </div>
    </div>


  </div>
  )
};

export default Header;
