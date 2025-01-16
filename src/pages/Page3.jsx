


import React, { useState, useEffect } from 'react';
import lionFace from "../assets/lionFace.jpg"
import lionImg from "../assets/lionImg.png"

const AnimatedMovieBanner = () => {
  const [slideComplete, setSlideComplete] = useState(false);
  const [stage, setStage] = useState(1);

  useEffect(() => {
    // Start slide animation after component mounts
    setTimeout(() => setSlideComplete(true), 100);
    
    // Stage transition timer
    const timer = setInterval(() => {
      setStage((prev) => (prev % 3) + 1);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl mt-[4rem] mb-[4rem]">
      <div className="relative">
        {/* Stage 1: Sliding lion with text */}
        <div
          className={`absolute w-full transition-all duration-3000 ease-in-out ${
            stage === 1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="h-24 bg-amber-950/90 rounded-[6rem] relative overflow-hidden">
            {/* Left text - fades in as lion slides */}
            <div 
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-white transition-opacity duration-1000 ${
                slideComplete ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="font-bold">Hello World</h3>
              <p className="text-sm">Left side text</p>
            </div>

            {/* Center container for lion face and sliding lion */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-20 flex items-center justify-between">
              {/* Lion face that fades out */}
              <div 
                className={`absolute right-[2rem] sm:right-[14rem] transition-opacity duration-1000 w-[15rem] h-auto bg-[white] rounded-[6rem] flex items-end justify-end ${
                  slideComplete ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <img 
                  src={lionFace}
                  alt="Lion face"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              {/* Sliding lion image */}
              <div 
                className={`absolute right-[-0.1rem] sm:right-[-10rem] transition-all duration-1000 ${
                  slideComplete 
                    ? 'translate-x-0 rotate-0' 
                    : 'translate-x-full -rotate-12'
                }`}
              >
                <img 
                  src={lionImg}
                  alt="Sliding lion"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* Right text - fades in as lion slides */}
            <div 
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-white text-right transition-opacity duration-1000 ${
                slideComplete ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="font-bold">Hello World</h3>
              <p className="text-sm">Right side text</p>
            </div>
          </div>
        </div>

        {/* Stage 2: Jumping lion */}
        <div
          className={`absolute w-full transition-all duration-700 ease-in-out ${
            stage === 2 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
          }`}
        >
          <div className="h-24 bg-amber-950/90 rounded-xl">
            <div className="flex items-center justify-between p-4">
              <div className="text-white">
                <h2 className="text-lg font-bold">Heyyy</h2>
                <p className="text-sm text-gray-300">Hello World</p>
              </div>
              <div className="w-24 h-24 relative animate-bounce">
                <img 
                  src={lionImg}
                  alt="Jumping lion"
                  className="w-full h-full object-contain transform -rotate-12"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stage 3: Landscape scene */}
        <div
          className={`transition-all duration-700 ease-in-out ${
            stage === 3 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="h-64 relative rounded-xl overflow-hidden">
            <img 
              src="/api/placeholder/800/400" 
              alt="Landscape scene"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <button className="bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  Hello Hello Hello
                  <span className="text-lg">▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
     
      </div>

      <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
        ▶
      </button>
    </div>
  );
};

export default AnimatedMovieBanner;