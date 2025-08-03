import React, { useEffect, useState } from "react";

const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    // return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-container data-scroll-speed="" className="w-[100vw] h-[100vh] sm:h-[100vh] bg-[url(https://plus.unsplash.com/premium_photo-1746420146061-0256c1335fe4?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-bg-no-repeat  flex items-center justify-center relative  overflow-x-hidden bg-fixed bg-cover -z-[999]">
      <div className="eyecontainer flex gap-5 items-center justify-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="eyeball relative w-[15vw] h-[15vw] bg-white rounded-full">
            <div className="eye w-[12vw] h-[12vw] rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-black">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="absolute px-1 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[4vw]"
              >
                <div className="absolute w-[30px] h-[30px] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eye;
