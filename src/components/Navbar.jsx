import React from "react";

const Navbar = () => {
  return (
    <div className="nav bg-zinc-400/10 backdrop-blur-xs fixed z-[999] text-indigo-100   w-full pl-5 pr-10 py-4 flex justify-between items-center leeding-none rounded-full mt-2
     sm:px-10 sm:mr-10 sm:ml-0 sm:mt-2">
      <div className="logo  font-mono">
        <h1 className="font-semibold text-green-100 text-2xl cursor-pointer">ᗩᒚᖇ</h1>
        
      </div>
      <div className="links flex items-center text-[.7rem] md:text-xl sm:block">
        {["Services", "projects", "About", "Contacts"].map(
          (item, index) => (
            <a
              key={index}
              href=""
              className={` font-sans ml-10 capitalize font-light cursor-pointer ${
                index === 3 && "sm:ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
