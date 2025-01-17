import React, { useState, useEffect, useRef } from "react";
import lionFace from "../assets/lionFace.jpg";
import lionImg from "../assets/lionImg.png";
import video from "../assets/video.mp4";

const AnimatedMovieBanner = () => {
  const [slideComplete, setSlideComplete] = useState(false);
  const [stage, setStage] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false); // State to control play button visibility
  const videoRef = useRef(null);

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setSlideComplete(true), 100);

    // Cycle between stages
    const timer = setInterval(() => {
      setStage((prev) => {
        if (prev === 1) {
          return 2;
        } else {
          setSlideComplete(false); // Reset animation
          setTimeout(() => setSlideComplete(true), 100); // Restart animation
          return 1;
        }
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (stage === 2) {
      setVideoProgress(0); // Reset progress bar
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Reset video
        videoRef.current.play();
      }
    }
  }, [stage]);

  const handleVideoEnd = () => {
    console.log("Video ended. Show play button.");

    // Temporarily disable animation for resetting the stage
    setSlideComplete(false);

    // Show the play button when the video ends
    setShowPlayButton(true);
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  const handlePlayButtonClick = () => {
    // Reset to stage 1 when play button is clicked
    setStage(1);
    setShowPlayButton(false); // Hide the play button
    setSlideComplete(false); // Restart the animation

    setTimeout(() => {
      setSlideComplete(true); // Enable animation again
    }, 300); // Adjust delay if needed

    // Restart video playback from the beginning
    setTimeout(() => {
      setStage(2);
    }, 500); // Transition to stage 2 after animation reset
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl mt-[4rem] mb-[4rem] bg-[#29292B]">
      <div className="relative mt-[3rem]">
        {/* Stage 1: Sliding lion with text */}
        <div
          className={`w-full transition-all duration-1000 ease-in-out ${
            stage === 1
              ? "relative opacity-100"
              : "absolute bottom-0 translate-y-[16rem] opacity-100 z-10"
          } ${stage === 2 ? "pointer-events-none" : ""}`}
        >
          <div className="h-24 bg-amber-950/90 rounded-[6rem] relative ">
            {/* Left and Right Text */}
            <div
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-white transition-opacity duration-1000 ${
                slideComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="font-bold">Hello World</h3>
              <p className="text-sm">Left side text</p>
            </div>

            {/* Sliding Lion */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-20 flex items-center justify-between">
              <div
                className={`absolute right-[2.5rem] sm:right-[14rem] transition-opacity duration-1000 w-[14rem] h-20 rounded-[6rem] flex items-end justify-end ${
                  slideComplete ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={lionFace}
                  alt="Lion face"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="relative bottom-[1.5rem] right-4 text-3xl">
                  ⬅️
                </div>
              </div>

              <div
                className={`absolute right-[3.3rem] sm:right-[-10rem] bottom-1 transition-all duration-1000 ${
                  slideComplete
                    ? "translate-x-0 rotate-0"
                    : "translate-x-full rotate-7"
                }`}
              >
                <img
                  src={lionImg}
                  alt="Sliding lion"
                  className="w-[15rem] h-[6rem]"
                />
              </div>
            </div>

            <div
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-white text-right transition-opacity duration-1000 ${
                slideComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="font-bold">Hello World</h3>
              <p className="text-sm">Right side text</p>
            </div>
          </div>
        </div>

        {/* Stage 2: Video Player */}
        <div
          className={`transition-all duration-700 ease-in-out ${
            stage === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="h-64 relative rounded-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={video}
              muted={isMuted}
              autoPlay
              loop={false}
              ref={videoRef}
              onEnded={handleVideoEnd}
              onTimeUpdate={updateProgress} // Update progress
            />

            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/30 via-transparent to-black/60 p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-white">
                  <span className="text-sm">22/4</span>
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-black/20 rounded-full p-1"
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
              </div>

              <div className="space-y-2">
                {/* Progress Bar */}
                <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-400 rounded-full"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
                    <span>예매하고 굿즈 받자</span>
                    <span>▶</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Play Button after video ends */}
            {showPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayButtonClick}
                  className="bg-white/50 hover:bg-white/30 text-white text-lg px-6 py-3 rounded-lg"
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMovieBanner;
