import { useState, useEffect } from "react";
import lionFace from "../assets/lionFace.jpg"
import lionImg from "../assets/lionImg.png"

const AnimatedMovieBanner = () => {
  const [animationState, setAnimationState] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationState((prev) => (prev % 3) + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 flex mt-[5rem] mb-[3rem] overflow-hidden">
      {/* First State - Lions with text */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out h-[8rem] ${
          animationState === 1 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-amber-900/90 rounded-3xl p-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={lionFace}
              alt="Lion face" 
              className="rounded-full w-12 h-12" 
            />
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Hello World</h2>
              <p className="text-sm">Hiii</p>
            </div>
          </div>
          <img
            src={lionImg}
            alt="Jumping lion cub"
            className="transform -rotate-12 w-32 h-32"
          />
        </div>
      </div>

      {/* Second State - Lion cub */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          animationState === 2 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-amber-900/90 rounded-3xl p-6 h-full flex items-center justify-between">
          <div className="text-white">
            <h2 className="text-2xl font-bold">Hiiii</h2>
            <p className="text-sm">Hello</p>
          </div>
          <img
            src="/api/placeholder/200/200"
            alt="Jumping lion cub"
            className="transform -rotate-12 w-48 h-48"
          />
        </div>
      </div>

      {/* Third State - Landscape scene */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          animationState === 3
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="relative h-full rounded-3xl overflow-hidden">
          <img
            src="/api/placeholder/800/400"
            alt="Sunset landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <button className="bg-amber-900 text-white px-4 py-2 rounded-lg">
              Hello Hello ▶
            </button>
          </div>
        </div>
      </div>

      {/* Play button overlay */}
      <button className="absolute top-4 right-4 bg-white/20 rounded-full p-2">
        <div className="w-6 h-6 flex items-center justify-center">▶</div>
      </button>
    </div>
  );
};

export default AnimatedMovieBanner;