import { motion } from "framer-motion";
import { IoIosArrowRoundUp } from "react-icons/io";

const page1 = () => {
  

  return (
    <motion.div data-scroll data-scroll-container data-scroll-speed=".1"   className="w-full h-screen bg-cyan-500 flex flex-col  items-center justify-center ">
      <div className=" w-[15vw] h-[70px] mt-4 py-2 text-white flex justify-between px-5  items-center gap-3 bg-zinc-900 rounded-full hover:bg-gray-800">
        <div className="text-xl tracking-wider">READ MORE</div>
        <div className="border-2 border-zinc-500 rounded-full rotate-45 text-3xl p-2 cursor-pointer animate-pulse hover:bg-gray-800">
          <IoIosArrowRoundUp />
        </div>
      </div>
    </motion.div>
  );
};

export default page1;
