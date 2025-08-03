import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const Landing = () => {
  return (
    <motion.div
      data-scroll
      data-scroll-container
      data-scroll-speed="-.9"
      className="landing w-full h-[80%] sm:h-screen bg-zinc-900  text-white pt-25 sm:pt-25"
    >
      {/* Text Heading Section */}
      <div className="flex flex-row justify-between">
        <div>
          <div className="textStructure px-6 sm:px-10 md:px-16 lg:px-20">
            {["We Create", "Eye-opening", "presentation"].map((item, index) => {
              return (
                <div
                  key={index}
                  className="masker bg-[url(https://cdn.pixabay.com/photo/2023/10/24/11/35/boots-8338072_1280.jpg)] bg-clip-text text-transparent"
                >
                  <div className="w-fit flex items-center">
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "9vw" }}
                        transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
                        className="image w-[9vw] h-[6vw] mx-1 relative top-[0.9vw] bg-amber-200 rounded "
                      ></motion.div>
                    )}
                    <h1 className="uppercase text-[12vw] sm:text-[7vw] md:text-[7vw] lg:text-[8vw] leading-none tracking-tighter">
                      {item}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:mt-35 border-t-gray-200 hidden md:block px-10 ">
            <div className="w-[60vw] h-[12vh]  border-t border-zinc-500  flex flex-row  justify-between items-center ">
              <div className="text-sm sm:text-base ">
                • For public and private companies
              </div>
              <div className="text-sm sm:text-base hidden sm:block">
                • From first pitch to IPO
              </div>
              <div className="w-auto flex gap-2 ml-10">
                <div className="border-2 px-4 py-2 text-sm  border-zinc-500 rounded-full cursor-pointer hover:bg-gray-800 transition">
                  START THE PROJECT
                </div>
                <div className="border-2 w-[40px] h-[40px] border-zinc-500 rounded-full rotate-45 text-xl p-2 cursor-pointer hover:bg-gray-800 transition">
                  <IoIosArrowRoundUp />
                </div>
              </div>
            
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-[30vw] h-[60vh] m-5">
          <img
            src="/landing-image.png "
            className="mix-blend-difference rounded-t-3xl"
            alt=""
          />
        </div>
      </div>

      <div className="image-container relative w-[100vw] h-[65vh] flex items-center justify-center  overflow-hidden p-2  inset-0 md:hidden">
        <img
          src="/landing-image.png"
          className="mix-blend-difference w-full h-full rounded-t-2xl object-cover"
          alt="Landing"
        />
      </div>

      {/* Bottom Section */}
      <div className="w-full h-[12vh] px-3 sm:px-10 md:hidden  py-6 border-t border-zinc-500  flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
        <div className="flex items-center w-[90vw] justify-between gap-4">
          <div className="border-2 px-4 py-2 text-sm sm:text-base border-zinc-500 rounded-full cursor-pointer hover:bg-gray-800 transition">
            START THE PROJECT
          </div>
          <div className="border-2 border-zinc-500 rounded-full rotate-45 text-xl p-2 cursor-pointer hover:bg-gray-800 transition">
            <IoIosArrowRoundUp />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
