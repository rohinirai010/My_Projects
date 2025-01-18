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
        flex items-center gap-2 justify-center min-w-[130px] border border-orange-200/50 shadow-[0_0_15px_rgba(244,129,14,0.1)]
       
        dark:from-[#F4810E] dark:to-[#F58B0D] dark:border-[#F4810E]/30 dark:hover:from-[#F58B0D] dark:hover:to-[#F4810E]
        dark:shadow-[0_0_15px_rgba(244,129,14,0.1)] dark:hover:shadow-[0_0_20px_rgba(244,129,14,0.2)]"
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
    <div className="flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[50%] bg-gradient-to-br from-[#FEF7E9] to-[#FFF4E4] p-5 
      border-2 border-orange-200/50 rounded-2xl shadow-[0_4px_20px_rgba(244,129,14,0.1)] hover:scale-105 transform transition-all duration-300 
      hover:shadow-[0_8px_25px_rgba(244,129,14,0.15)]
      dark:from-[#222222] dark:to-[#333333] dark:border-[#444444] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
      dark:hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
    >
      <div className="bg-white w-full p-3 rounded-xl shadow-[0_2px_10px_rgba(244,129,14,0.1)]
        dark:bg-[#2D2D2D] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
        <h2 className="truncate w-full text-center text-gray-800 font-medium dark:text-gray-100">
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
          <Share2 className="w-6 h-6 text-[#F4810E]" />
          <h1 className="text-gray-800 font-bold text-3xl text-center transition-all duration-300 transform 
            hover:text-[#F4810E] dark:text-gray-100 dark:hover:text-[#F4810E]">
            Share to Earn
          </h1>
        </div>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#F4810E] to-[#F58B0D] rounded-full 
          shadow-[0_0_10px_rgba(244,129,14,0.2)]
          dark:from-[#F4810E] dark:to-[#F58B0D] dark:shadow-[0_0_10px_rgba(244,129,14,0.3)]"/>
      </div>

      <div className="p-6 flex flex-col gap-5 bg-gradient-to-br from-[#FEF7E9] to-[#FFF4E4] border-2 border-orange-200/50 rounded-2xl 
        shadow-[0_8px_30px_rgba(244,129,14,0.15)]
        dark:from-[#222222] dark:to-[#333333] dark:border-[#444444] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      >
        <div className="flex flex-row gap-4 items-center">
          <div className="relative group">
            <div className="w-14 h-14 rounded-full border-2 border-orange-200/50 shadow-[0_0_15px_rgba(244,129,14,0.1)] overflow-hidden
              transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(244,129,14,0.2)]
              dark:border-[#F4810E]/30 dark:shadow-[0_0_15px_rgba(244,129,14,0.1)]
              dark:group-hover:shadow-[0_0_20px_rgba(244,129,14,0.2)]">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#F4810E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-800 text-xl font-bold transition-all duration-300 hover:text-[#F4810E] 
              dark:text-gray-100 dark:hover:text-[#F4810E]">
              My Affiliate Link/Code
            </h1>
            <p className="text-gray-600 text-sm dark:text-gray-400">Share and earn rewards</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-1 w-full bg-white/95 p-5 rounded-2xl shadow-[0_4px_20px_rgba(244,129,14,0.1)]
          dark:bg-[#2D2D2D] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
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