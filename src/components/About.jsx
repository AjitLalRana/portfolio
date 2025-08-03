import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-container
      data-scroll-speed=".1"
      className="about z-10 w-screen h-auto -mt-6 sm:p-10 sm:gap-10  bg-neutral-300  rounded-tl-4xl rounded-tr-4xl text-black flex flex-col justify-between"
    >
      <div
        className="w-full h-auto 
        sm:text-xl "
      >
        <h1
          className="text-5xl p-5 font-semibold text-[24px] 
         sm:text-5xl sm:p-5 sm:font-normal"
        >
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span className="underline font-bold ">raise funds</span> ,{" "}
          <span className="underline font-bold">sell products</span>,{" "}
          <span className="underline font-bold">explain complex ideas</span>,
          and <span className="underline font-bold">hire great peoples</span>.
        </h1>
      </div>
      <div
        className="flex gap-8 pt-3 w-full h-[40vh] text-wrap rounded-4xl shadow-neutral-600
        sm:h-[60vh] sm:pl-10 
      "
      >
        <h1
          className="text-2xl pt-10 w-[30%] text-[1.5rem] hidden
         sm:block sm:text-wrap sm:w-[20vw] sm:text-3xl"
        >
          What you can aspect :
        </h1>
        <p
          className="text-[.9rem] w-[70%] h-[100%] text-wrap p-5 
        sm:w-[50vw] sm:text-2xl"
        >
          We partner with the companies and startups who make the world go round
          — they drive the net-zero economy, revolutionize crypto treasury
          management, build photonic chips, and open Michelin-starred
          restaurants. We believe the mix of strategy and design (with a bit of
          coffee) is what makes your message clear, convincing, and captivating.
        </p>
        <div className="flex items-center justify-center h-full">
          <div className="w-[1px] h-[80%] bg-zinc-900 "></div>
        </div>
        <div className=" flex flex-col gap-12 justify-center  items-center pt-8 pb-8">
          
          <a href="https://www.linkedin.com/in/ajit-lal-rana/">
            <div className="text-4xl cursor-pointer">
            <FaLinkedin />
          </div>
          </a>
          <a href="https://github.com/AjitLalRana">
            <div className="text-4xl cursor-pointer">
            <FaGithub />
          </div>
          </a>
          <a href="https://www.instagram.com/ajitlalrana/">
            <div className="text-4xl cursor-pointer">
            <FaInstagram />
          </div>
          </a>
          
        </div>
      </div>
      <div className="w-full h-[70vh] p-2 sm:p-10  border-t-2 border-zinc-600 flex justify-between items-start">
        <div className=" w-[30vw] h-full pt-10 pb-10  flex flex-col items-center gap-10">
          <div
            className="w-[20vw] px-5   flex items-center justify-center text-xl font-semibold uppercase
          sm:text-3xl sm:w-[30vw]"
          >
            OUR approach:
          </div>
          <div className=" w-[90%] sm:w-[20vw] sm:pl-9 h-[90px] mt-4 pl-5 pr-5 text-white flex  items-center justify-center sm:justify-between gap-3 bg-zinc-900 rounded-full ">
            <div className="text-[.8rem] sm:text-[1.5rem] tracking-wider">
              READ MORE
            </div>
            <div className="border-2 border-zinc-500 rounded-full rotate-45 text-3xl p-2 cursor-pointer animate-pulse hidden sm:block">
              <IoIosArrowRoundUp />
            </div>
          </div>
          <div className="border-2 border-zinc-500 rounded-full rotate-45 text-3xl p-2 cursor-pointer animate-pulse sm:hidden">
            <IoIosArrowRoundUp />
          </div>
        </div>
        <div className="w-[60vw] h-[100%]  flex items-center justify-center">
          <div className="imagecontainer w-[100%] h-[100%] bg-amber-200 rounded-3xl overflow-hidden object-cover bg-[url(https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg)] bg-cover  ease-in-out duration-175"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
