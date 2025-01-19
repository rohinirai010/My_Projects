// import React, { useState, useEffect, useRef } from "react";
// import lionFace from "../assets/lionFace.jpg";
// import lionImg from "../assets/lionImg.png";
// import video from "../assets/video.mp4";

// const AnimatedMovieBanner = () => {
//   const [slideComplete, setSlideComplete] = useState(false);
//   const [stage, setStage] = useState(1);
//   const [isMuted, setIsMuted] = useState(true);
//   const [videoProgress, setVideoProgress] = useState(0);
//   const [showPlayButton, setShowPlayButton] = useState(false);
//   const videoRef = useRef(null);
//   const intervalRef = useRef(null);

//   const startAnimation = () => {
//     // Initial animation setup
//     setSlideComplete(false);
//     setTimeout(() => setSlideComplete(true), 200); // Slight delay for smoother start

//     // Set up stage transition with longer delay for smoother experience
//     intervalRef.current = setTimeout(() => {
//       setStage(2);
//     }, 6000); // Increased delay for better visibility of stage 1
//   };

//   // Initial animation on mount
//   useEffect(() => {
//     startAnimation();
//     return () => {
//       if (intervalRef.current) {
//         clearTimeout(intervalRef.current);
//       }
//     };
//   }, []);

//   // Handle video play when entering stage 2
//   useEffect(() => {
//     if (stage === 2 && videoRef.current) {
//       setVideoProgress(0);
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   }, [stage]);

//   const handleVideoEnd = () => {
//     console.log("Video ended");
//     setShowPlayButton(true);
//     // Stop at current stage, don't continue animation
//     if (intervalRef.current) {
//       clearTimeout(intervalRef.current);
//     }
//   };

//   const updateProgress = () => {
//     if (videoRef.current) {
//       const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
//       setVideoProgress(progress);
//     }
//   };

//   const handlePlayButtonClick = () => {
//     // Clear any existing timeouts
//     if (intervalRef.current) {
//       clearTimeout(intervalRef.current);
//     }

//     // Reset states
//     setShowPlayButton(false);
//     setStage(1); // Make sure stage is reset to 1 to start the animation

//     // Start animation from the sliding lion onwards
//     startAnimation();
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl mt-[4rem] mb-[4rem] bg-[#29292B]">
//       <div className="relative mt-[3rem]">
//         {/* Stage 1: Sliding lion with text */}
//         <div
//           className={`w-full transition-all duration-[1500ms] ease-out ${
//             stage === 1
//               ? "relative opacity-100"
//               : "absolute bottom-0 translate-y-[16rem] opacity-100 z-10"
//           } ${stage === 2 ? "pointer-events-none" : ""}`}
//         >
//           <div className="h-24 bg-amber-950/90 rounded-[6rem] relative">
//             {/* Left Text */}
//             <div
//               className={`absolute left-4 top-1/2 -translate-y-1/2 text-white transition-opacity duration-1000 ${
//                 slideComplete ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <h3 className="font-bold">Hello World</h3>
//               <p className="text-sm">Left side text</p>
//             </div>

//             {/* Sliding Lion */}
//             <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-20 flex items-center justify-between">
//               <div
//                 className={`absolute right-[2.5rem] sm:right-[14rem] transition-opacity duration-1500 w-[14rem] h-20 rounded-[6rem] flex items-end justify-end ${
//                   slideComplete ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 <img
//                   src={lionFace}
//                   alt="Lion face"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//                 <div className="relative bottom-[1.5rem] right-4 text-3xl">
//                   ⬅️
//                 </div>
//               </div>

//               <div
//                 className={`absolute right-[3.3rem] sm:right-[-10rem] bottom-1 transition-all duration-[2000ms] ease-out ${
//                   slideComplete
//                     ? "translate-x-0 rotate-0"
//                     : "translate-x-full rotate-7"
//                 }`}
//               >
//                 <img
//                   src={lionImg}
//                   alt="Sliding lion"
//                   className="w-[15rem] h-[6rem]"
//                 />
//               </div>
//             </div>

//             {/* Right Text */}
//             <div
//               className={`absolute right-4 top-1/2 -translate-y-1/2 text-white text-right transition-opacity duration-1000 ${
//                 slideComplete ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <h3 className="font-bold">Hello World</h3>
//               <p className="text-sm">Right side text</p>
//             </div>
//           </div>
//         </div>

//         {/* Stage 2: Video Player */}
//         <div
//           className={`transition-all duration-1000 ease-out ${
//             stage === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
//           }`}
//         >
//           <div className="h-64 relative rounded-xl overflow-hidden">
//             <video
//               className="w-full h-full object-cover"
//               src={video}
//               muted={isMuted}
//               autoPlay={stage === 2}
//               loop={false}
//               ref={videoRef}
//               onEnded={handleVideoEnd}
//               onTimeUpdate={updateProgress}
//             />

//             <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/30 via-transparent to-black/60 p-4">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center space-x-2 text-white">
//                   <span className="text-sm">22/4</span>
//                 </div>
//                 <button
//                   onClick={() => setIsMuted(!isMuted)}
//                   className="text-white hover:bg-black/20 rounded-full p-1"
//                 >
//                   {isMuted ? "🔇" : "🔊"}
//                 </button>
//               </div>

//               <div className="space-y-2">
//                 <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-blue-400 rounded-full"
//                     style={{ width: `${videoProgress}%` }}
//                   />
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
//                     <span>Lion King</span>
//                     <span>▶</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Play Button - Positioned above video */}
//             {showPlayButton && (
//               <div className="absolute top-[9.8rem] left-0 right-0 -translate-y-full p-4 flex justify-center">
//                 <button
//                   onClick={handlePlayButtonClick}
//                   className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
//                 >
//                   Play Again
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedMovieBanner;




  import { useState, useEffect } from "react";
  import lionFace from "../assets/lionFace.jpg";
  import lionImg from "../assets/lionImg.png";
  import videoFile from "../assets/video.mp4";

  const Page3 = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [moveDown, setMoveDown] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setShowText(true);
          setTimeout(() => {
            setMoveDown(true);
            setTimeout(() => {
              setShowVideo(true);
            }, 2000); // Wait for move-down animation to complete
          }, 3000); // Time to show text before moving down
        }, 3000);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-1">
        <div className="relative w-full max-w-2xl">
          <div className={`relative rounded-[6rem] shadow-xl transition-all duration-700 ${
            isAnimating ? "bg-[#66503B]" : "bg-[#ebe5e5]"
          } ${moveDown ? "animate-move-down-fade-out" : ""}`}>
            <div className="relative h-[100px] sm:h-[130px] md:h-[140px] flex items-center">
              
              {/* Text Container with Shrink Animation */}
              <div className="relative z-20 px-8 sm:px-16 py-8 text-white ">
                <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                  isAnimating ? "animate-shrinkText" : ""
                }`}>
                  The Lion King
                </h1>
                <p className={`text-sm sm:text-base opacity-90 ${
                  isAnimating ? "animate-shrinkText" : ""
                }`}>Hello World</p>
              </div>

              {/* Image Container with Shrink Animation */}
              <div className="absolute right-0 top-0 h-full w-2/3 flex items-center justify-end">
                <div className={`absolute right-[50%] top-1/2 -translate-y-1/2 w-full max-w-2xl h-[100px] sm:h-[130px] md:h-[140px] rounded-[6rem] p-2 origin-right ${
                  isAnimating ? "animate-shrink" : ""
                }`}>
                  <img
                    src={lionFace}
                    alt="Lion Face"
                    className="h-full w-full rounded-[6rem] border-4 border-[#353333]"
                  />
                </div>

                {!showVideo && (
                  <div className={`absolute right-2 top-[35%] -translate-y-1/2 w-24 sm:w-40 md:w-44 h-28 sm:h-36 md:h-44 ${
                    isAnimating && !moveDown ? "animate-move-to-center" : ""
                  }`}>
                    <img
                      src={lionImg}
                      alt="Lion Side Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Text animations */}
          {showText && !showVideo && (
            <>
              <div className={`absolute left-[1rem] sm:left-[3rem] top-[3rem] sm:top-[45%] -translate-y-1/2 text-[#ffffff] opacity-0 animate-fade-in ${isAnimating ? "animate-shrink" : ""}`}>
                <h3 className="text-base sm:text-3xl font-semibold">
                  Majestic Beast
                </h3>
                <p className="text-sm">King of the Jungle</p>
              </div>
              <div className={`absolute right-[1rem] sm:right-[3rem] top-[3rem] sm:top-[45%] -translate-y-1/2 text-[#ffffff] opacity-0 animate-fade-in text-right ${isAnimating ? "animate-shrink" : ""}`}>
                <h3 className="text-base sm:text-3xl font-semibold">
                  Noble Spirit
                </h3>
                <p className="text-sm">Pride of Africa</p>
              </div>
            </>
          )}
          
          {/* Video Section */}
          {showVideo && (
            <div className="relative mt-8 rounded-lg shadow-lg overflow-hidden bg-black">
              <video
                src={videoFile}
                controls
                className="w-full"
                muted
                autoPlay
                loop
              />
              <div className=" bottom-0 left-0 right-0 bg-[#66503B] text-white p-4">
                <h3 className="text-lg font-bold">The Lion King</h3>
                <p className="text-sm">Preorder and receive your exclusive goods!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Page3;
