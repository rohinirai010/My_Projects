import React, { useState } from "react";
import { Share, Download, Gift, Ticket, Zap } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { RiDownload2Fill } from "react-icons/ri";
import { FaCartShopping, FaShareFromSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const ReferralInterface = () => {
  const [activeTab, setActiveTab] = useState("earn");

  const EarnContent = () => (
    <div className="relative space-y-3 px-4 pt-6">
      <div className="flex flex-col gap-[0.5rem] text-amber-900 dark:text-amber-400">
        <div className="flex flex-row items-center justify-start gap-[1rem]">
          <div className="text-sm sm:text-base font-bold text-[#F4810E] dark:text-[#F4810E]">
            Refer users with your Affiliate Link/Code{" "}
          </div>
          <span className="flex flex-row items-center justify-center cursor-pointer hover:text-[#F4810E] dark:hover:text-[#F4810E]">
            Details <MdKeyboardArrowRight className="w-5 h-5 transition-all duration-300 transform hover:rotate-90" />
          </span>
        </div>
        <div className="text-xs mt-1 space-y-1.5 text-amber-800 dark:text-amber-300">
          <div className="flex items-center gap-1 text-sm text-[#fff]">
            <IoPersonSharp className="w-4 h-4" />
            <span className="font-bold text-base">New app users </span> (first
            download)
          </div>
          <div className="flex items-center gap-1 text-sm text-[#fff]">
            <RiDownload2Fill className="w-4 h-4" />
            <h1>
              <span className="font-bold text-base"> Reinstalled users</span>{" "}
              (uninstalled over 14 days)
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full relative">
        <div className="flex-1 w-[100%] sm:w-[50%] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border-2 border-[#F58B0D] dark:border-[#F58B0D] relative transition-all duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:bg-gray-700 dark:hover:border-[#F4810E]">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-base text-gray-600 dark:text-gray-300">Up to</h2>
            <FaCartShopping className="w-6 h-6 text-[#F4810E]" />
          </div>

          <div className="flex items-baseline">
            <span className="text-4xl font-bold">20</span>
            <span className="text-lg font-bold">%</span>
            <span className="text-lg sm:text-base font-bold ml-1">
              commission
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1 dark:text-gray-400">
            on{" "}
            <span className="font-bold text-[#F4810E] dark:text-[#F4810E] ">
              orders placed within 24 hours{" "}
            </span>
            of your referral downloading the app
          </div>
        </div>

        <div className="flex-1 w-[100%] sm:w-[50%] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border-2 border-[#F58B0D] dark:border-[#F58B0D] relative transition-all duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:bg-gray-700 dark:hover:border-[#F4810E]">
          <div className="flex flex-row justify-between items-center">
            <div className="absolute top-0 left-0 bg-orange-500 text-white text-[14px] font-semibold px-2 py-0.5 rounded-tl-lg rounded-br-xl">
              Extra
            </div>
            <RiDownload2Fill className="w-6 h-6 text-[#F4810E] absolute right-2 top-2 " />
          </div>

          <div className="flex items-baseline mt-6">
            <span className="text-lg font-bold">$</span>
            <span className="text-4xl font-bold">5</span>
            <span className="text-lg sm:text-[11px] font-bold">
              Download Reward
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div>
              for every referral who{" "}
              <span className=" font-bold text-[#F4810E] dark:text-[#F4810E] ">
                download & login{" "}
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-[1.6rem] h-[1.6rem] border-2 border-[#ffffff] bg-[#F58B0D] text-[#ffffff] rounded-full -rotate-6 absolute top-[8.5rem] sm:top-[5.3rem] left-[8.5rem] sm:left-[10.8rem] transition-all duration-300 transform hover:scale-110">
          <FiPlus className="-rotate-6" />
        </div>
      </div>

      <button className="relative bottom-0 top-[0.7rem] w-full bg-orange-500 text-white py-2.5 rounded-full text-lg font-bold flex items-center justify-center gap-[0.5rem] shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:translate-y-2 hover:bg-orange-600 hover:ring-4 hover:ring-orange-300 hover:ring-opacity-50 group">
        <FaShareFromSquare className="w-5 h-5 transition-all duration-300 transform group-hover:rotate-180 group-hover:scale-125" />
        <span className="transition-all duration-300 transform hover:scale-110 hover:text-white">
          Share to Earn
        </span>
      </button>
    </div>
  );

  const ReferralsContent = () => (
    <div className="space-y-2 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl px-4 py-6 flex flex-col gap-3 sm:gap-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:bg-gray-700">
        <div className="rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between transition-all duration-300 transform hover:scale-105 border-b-2 sm:border-b-0 dark:border-gray-600">
          <div className="flex flex-row items-center gap-3">
            <div className="text-amber-600 w-[2.3rem] h-[2.3rem] bg-[#F3E7C7] border border-[#e0b99d] flex items-center justify-center rounded-full shadow-md">
              <Ticket className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-bold text-[#5C2701] dark:text-[#F3E7C7]">
                $100 Coupon Bundle
              </div>
              <div className="text-[10px] p-[3px] bg-[#F3E7C7] border border-[#e0b99d] text-[#5c2701f0] rounded-md">
                New App/Reinstalled User
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition-all shadow-xl hover:scale-105 mb-4 sm:mb-0">
            Share
          </button>
        </div>

        <div className="rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between transition-all duration-300 transform hover:scale-105 border-b-2 sm:border-b-0 dark:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="text-amber-600 w-[2.3rem] h-[2.3rem] bg-[#F3E7C7] border border-[#e0b99d] flex items-center justify-center rounded-full shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-bold text-[#5C2701] dark:text-[#F3E7C7]">
                Free Gifts
              </div>
              <div className="text-[10px] p-[3px] bg-[#F3E7C7] border border-[#e0b99d] text-[#5c2701f0] rounded-md">
                New App User
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition-all shadow-xl hover:scale-105 mb-4 sm:mb-0">
            Share
          </button>
        </div>

        <div className="rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between transition-all duration-300 transform hover:scale-105 border-b-2 sm:border-b-0 dark:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="text-amber-600 w-[2.3rem] h-[2.3rem] bg-[#F3E7C7] border border-[#e0b99d] flex items-center justify-center rounded-full shadow-md">
              <Ticket className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-bold text-[#5C2701] dark:text-[#F3E7C7]">30% Off</div>
              <div className="text-[10px] p-[3px] bg-[#F3E7C7] border border-[#e0b99d] text-[#5c2701f0] rounded-md">
                New App/Reinstalled User
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition-all shadow-xl hover:scale-105 mb-4 sm:mb-0">
            Share
          </button>
        </div>

        <div className="rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between transition-all duration-300 transform hover:scale-105 border-b-2 sm:border-b-0 dark:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="text-amber-600 w-[2.3rem] h-[2.3rem] bg-[#F3E7C7] border border-[#e0b99d] flex items-center justify-center rounded-full shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-bold text-[#5C2701] dark:text-[#F3E7C7]">
                Flash Sales
              </div>
              <div className="text-[10px] p-[3px] bg-[#F3E7C7] border border-[#e0b99d] text-[#5c2701f0] rounded-md">
                New App User
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition-all shadow-xl hover:scale-105 mb-4 sm:mb-0">
            Share
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`max-w-md w-full h-auto mx-auto ${activeTab === "earn" ? "bg-[#F5E198]" : "bg-[#F58B0D]"} dark:bg-gradient-to-br dark:from-[#2D2D2D] dark:to-[#444444] dark:border-[#555555] dark:text-white rounded-xl shadow-lg`}
    >
      <div className="flex justify-between relative">
        <div className="absolute inset-0 bg-orange-100/50 rounded-lg" />

        {/* Tab Container */}
        <div className="flex w-full gap-4">
          <div
            className="w-1/2 py-2 px-3 cursor-pointer relative z-10 text-base sm:text-lg italic text-center font-bold
              bg-[#F5E198] text-[#5C2701] dark:bg-[#F58B0D] dark:text-white rounded-lg"
            onClick={() => setActiveTab("earn")}
          >
            You can earn
          </div>

          <div
            className="w-1/2 py-2 px-3 cursor-pointer relative z-10 text-base sm:text-lg italic text-center font-bold
                 text-[#ffffff] bg-[#F58B0D] dark:bg-[#F58B0D] dark:text-white"
            onClick={() => setActiveTab("referrals")}
          >
            Referrals can get
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "earn" ? <EarnContent /> : <ReferralsContent />}
    </div>
  );
};

export default ReferralInterface;
