import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const AvailableCashCard = () => {
  return (
    <div className="relative w-full mb-16">
      {/* Main Card */}
      <div className="flex flex-col sm:gap-[0.2rem] bg-gradient-to-br from-white to-gray-100 dark:bg-gradient-to-br dark:from-[#2D2D2D] dark:to-[#444444] rounded-2xl p-4 absolute w-full z-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 dark:border-[#555555]">
        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:text-white">Available Cash</h1>
          <button className="flex items-center text-gray-500 text-sm hover:text-blue-600 transition-all duration-200 group dark:text-gray-300 dark:hover:text-blue-500">
            History
            <MdKeyboardArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Amount */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">$8</span>
            <MdKeyboardArrowRight className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 hover:text-blue-500 transition-all duration-200 dark:text-gray-400" />
          </div>
          {/* Withdraw Button */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-700 dark:bg-gradient-to-r dark:from-[#3b82f6] dark:to-[#2563eb]">
            Withdraw
          </button>
        </div>

        {/* Info Text */}
        <div className="mt-2">
          <span className="flex flex-col sm:flex-row sm:items-center w-full gap-2 font-medium text-[#74472A] text-sm dark:text-[#f4e3a1]">
            Withdraw cash using:{" "}
            <div className="flex flex-row items-center gap-3">
              <span className="font-bold text-[#74472A] flex flex-row items-center gap-1.5 bg-orange-100/50 px-3 py-1 rounded-full dark:bg-[#444444] dark:text-[#f4e3a1]">
                <FaPaypal className="text-blue-600" /> PayPal($)
              </span>
              <span className="font-bold text-[#74472A] flex flex-row items-center gap-1.5 bg-orange-100/50 px-3 py-1 rounded-full dark:bg-[#444444] dark:text-[#f4e3a1]">
                <FaCreditCard className="text-gray-700" /> Credit($)
              </span>
            </div>
          </span>
        </div>

        {/* Status Row */}
        <div className="flex mt-4 text-sm gap-8">
          <div className="flex-1">
            <div className="text-gray-600 font-medium mb-1 dark:text-gray-300">Pending</div>
            <div className="font-medium text-lg text-black flex items-center group dark:text-white">
              $0
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 dark:text-gray-300" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-gray-600 font-medium mb-1 dark:text-gray-300">Withdrawn</div>
            <div className="font-medium text-lg text-black flex items-center group dark:text-white">
              $0
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 dark:text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-[-20rem] sm:bottom-[-16rem] left-0 right-0 transform translate-y-12 z-0">
        <div className="bg-gradient-to-r from-[#F4C464] to-[#F1A935] rounded-2xl p-4 pt-[2rem] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gradient-to-r dark:from-[#2b2b2b] dark:to-[#3e3e3e]">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F1B97E] to-[#CD9654] border-[3px] border-[#CD9654] hover:scale-110 transition-all duration-200 shadow-md">
                  <FaRankingStar className="w-6 h-6 text-[#74472A] dark:text-[#f4e3a1]" />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-xl sm:text-xl text-[#74472A] dark:text-[#f4e3a1]">
                    $10,000 Ranking Race
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#74472A] dark:text-[#f4e3a1]">Ends in 2 day(s) 13:59:29</span>
                  </div>
                </div>
              </div>
              <button className="bg-white px-8 py-2.5 rounded-full text-base text-[#74472A] border-[3px] border-[#CD9654] hover:border-[#74472A] font-bold transition-all duration-200 hover:bg-[#F1B97E] hover:text-white shadow-md hover:shadow-lg dark:bg-[#444444] dark:text-[#f4e3a1] dark:hover:bg-[#3b3b3b] dark:hover:text-white">
                Win
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCashCard;
