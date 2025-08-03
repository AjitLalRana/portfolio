import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <motion.div
      data-scroll
      data-scroll-container
      data-scroll-speed=".5"
      className="z-10 w-full h-[20vh] sm:h-[50vh] pt-10 pb-10 -mt-3 sm:mt-0 flex items-center  text-[18vw] bg-orange-700 rounded-tl-2xl rounded-tr-2xl whitespace-nowrap "
    >
      <div className="text w-full h-[15vh] sm:h-[90%] text-9xl leading-none border-zinc-900 flex items-center border-t-2 border-b-2">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
          className=" flex  items-center tracking-tighter  font-bold bg-[url(https://cdn.pixabay.com/photo/2023/10/24/11/35/boots-8338072_1280.jpg)] bg-clip-text text-transparent "
        >
          WE ARE AWESOME.
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
          className=" flex  items-center tracking-tighter  font-bold bg-[url(https://cdn.pixabay.com/photo/2023/10/24/11/35/boots-8338072_1280.jpg)] bg-clip-text text-transparent "
        >
          WE ARE AWESOME.
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default Marquee;
