import React, { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';
import profileImg from "../../../assets/profileImg.png"

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="bg-gradient-to-r from-[#F58B0D] to-[#FFA041] text-white px-6 py-2.5 rounded-full text-base font-bold 
        transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-[#FFA041] hover:to-[#F58B0D]
        flex items-center gap-2 justify-center min-w-[130px] border border-orange-200 dark:bg-gradient-to-r dark:from-[#F58B0D] dark:to-[#FFA041] dark:border-[#e4ba91]"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
};

const ShareBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[50%] bg-gradient-to-br from-[#F2E9E0] to-[#F8F0E8] p-5 
      border-2 border-[#e4d3c2] rounded-2xl shadow-md hover:scale-105 transform transition-all duration-300 hover:shadow-xl 
      dark:bg-gradient-to-br dark:from-[#2D2D2D] dark:to-[#383838] dark:border-[#444444] dark:text-white"
    >
      <div className="bg-white/90 w-full p-3 rounded-xl shadow-sm dark:bg-[#3A3A3A]/90">
        <h2 className="truncate w-full text-center text-gray-800 font-medium dark:text-white">
          {value}
        </h2>
      </div>
      <CopyButton text={value} />
    </div>
  );
};

const ShareToEarn = ({ profileImg }) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <Share2 className="w-6 h-6 text-[#F58B0D] dark:text-[#F58B0D]" />
          <h1 className="text-gray-800 font-bold text-3xl text-center transition-all duration-300 transform hover:text-[#F58B0D] dark:text-white dark:hover:text-[#F58B0D]">
            Share to Earn
          </h1>
        </div>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#F58B0D] to-[#FFA041] rounded-full dark:bg-gradient-to-r dark:from-[#F58B0D] dark:to-[#FFA041]"/>
      </div>

      <div className="p-6 flex flex-col gap-5 bg-gradient-to-br from-[#F2E9E0] to-[#F8F0E8] border-2 border-[#e4ba91] rounded-2xl shadow-xl 
        dark:bg-gradient-to-br dark:from-[#2D2D2D] dark:to-[#383838] dark:border-[#444444] dark:shadow-2xl"
      >
        <div className="flex flex-row gap-4 items-center">
          <div className="relative group">
            <div className="w-14 h-14 rounded-full border-2 border-[#e4d3c2] shadow-lg overflow-hidden
              transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl dark:border-[#444444] dark:shadow-lg dark:group-hover:scale-110 dark:group-hover:shadow-xl">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 dark:group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#F58B0D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-[#F58B0D]/10 dark:group-hover:opacity-100"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-800 text-xl font-bold transition-all duration-300 hover:text-[#F58B0D] dark:text-white dark:hover:text-[#F58B0D]">
              My Affiliate Link/Code
            </h1>
            <p className="text-gray-600 text-sm dark:text-gray-300">Share and earn rewards</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-1 w-full bg-white/90 p-5 rounded-2xl shadow-lg dark:bg-[#3A3A3A]/90 dark:border-[#444444]">
          <ShareBox 
            title="Affiliate Link" 
            value="http://www.sample.org/head" 
          />
          <ShareBox 
            title="Affiliate Code" 
            value="acj88776" 
          />
        </div>
      </div>
    </div>
  );
};

export default ShareToEarn;
