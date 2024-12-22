"use client"
import React from 'react'
import Link from "next/link";

import { useState } from "react";
import navMenu from "./navData";
import { usePathname } from 'next/dist/client/components/navigation';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { SearchBar } from './Search/Search';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className='relative flex items-center justify-between w-full h-20 gap-6 px-8 md:px-6 lg:px-10 drop-shadow-2xl bg-white'>
        <div className="relative z-10 flex flex-row items-center md:justify-center justify-between w-full px-0 text-center text-black md:px-5 lg:px-10">
          <div className="flex items-center overflow-hidden">
            <Image
              height={500}
              width={500}
              src='/culturallogo.png'
              className="w-20 h-8 cursor-pointer md:w-24 md:h-10 lg:w-26 lg:h-20 overflow-hidden pb-2"
              alt="Cultural Compass"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:justify-center md:flex md:flex-grow">
            <div className="flex items-center justify-center gap-x-6 md:gap-x-4 lg:gap-x-10">
              {navMenu.map((menu, index) => (
                <div
                  key={index}
                  className="relative"
                  
                >
                  <Link
                    href={menu.link}
                    className={`flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:text-red-500 ${pathname === menu.link ? 'text-red-500 underline font-semibold':'text-black'}`}
                  >
                    <span className="flex items-center justify-center group">
                      <span className="ml-1 text-lg scale-90 cursor-pointer white font- md:text-sm lg:text-lg">
                        {menu.title}
                      </span>
                      
                    </span>
                  </Link>
                </div>
              ))}
              <SearchBar/>
            </div>
          </div>
          <div className="z-50 flex md:hidden">
            {menuOpen ? (
              <IoCloseOutline className="opacity-0 size-1" />
            ) : (
              <IoMenu
                className="mr-6 text-black scale-150 cursor-pointer sm:size-7 size-6"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            )}
          </div>
        </div>
      </div>
    {/* Small Screen Menu */}
    <div
    className={`fixed inset-y-0 left-0 z-40 w-4/5 transform ${
      menuOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out bg-white shadow-lg md:hidden`}
  >
    <div className="relative flex flex-col items-center w-auto h-auto pt-6">
      <IoCloseOutline
        className="absolute text-gray-700 scale-150 cursor-pointer sm:size-7 size-6 top-4 right-5"
        onClick={() => setMenuOpen(false)}
      />
      <div className="flex flex-col items-center w-full h-full max-h-[77vh] mt-10 gap-y-1">
        {navMenu.map((menu, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-center w-full p-4 pl-0 text-xl font-semibold scale-90 rounded-xl hover:text-primary hover:bg-gray-200 `}
          >
            <div className="flex flex-row pl-[8%] justify-between items-center w-full ">

                <Link href={menu.link}>
                  <div
                    className="flex flex-row items-center gap-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                    }}
                  >
                    <span>{menu.icon}</span>
                    <span>{menu.title}</span>
                  </div>
                </Link>
              
            </div>

            
          </div>
        ))}
        {/* <div className="w-full px-4 pb-10">
          <Link href="/home">
            <button
              className="w-full h-12 pb-1 mt-3 text-lg text-white duration-500 bg-[#FEC601] hover:scale-105 hover:ease-in-out hover:transition-transform hover:shadow-xl hover:from-[#F5365C] hover:to-[#FB6340] hover:text-white transition-all ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  </div>

  {menuOpen && (
    <div
      className="fixed inset-0 z-30 bg-black bg-opacity-20 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    ></div>
  )}
    </>
  
  );
}

export default Navbar;
