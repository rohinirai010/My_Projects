import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const AvailableCashCard = () => {
  return (
    <div className="relative w-full mb-16">
      {/* Main Card */}
      <div className="flex flex-col sm:gap-[0.2rem] bg-gradient-to-br from-white via-gray-50 to-gray-100 
        dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 rounded-2xl p-4 absolute w-full z-10 
        shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] 
        hover:scale-[1.02] border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm">
        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent
            dark:from-white dark:to-gray-200 animate-fade-in">Available Cash</h1>
          <button className="flex items-center text-gray-500 text-sm hover:text-blue-600 transition-all duration-200 group
            dark:text-gray-400 dark:hover:text-blue-400 hover:scale-105">
            History
            <MdKeyboardArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Amount */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-2 group">
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent
              dark:from-blue-400 dark:to-blue-600 group-hover:scale-105 transition-transform duration-200">$8</span>
            <MdKeyboardArrowRight className="w-6 sm:w-8 h-6 sm:h-8 text-gray-400 group-hover:text-blue-500 
              transition-all duration-200 dark:text-gray-500 group-hover:translate-x-1" />
          </div>
          {/* Withdraw Button */}
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 
            text-white px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200 
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_4px_20px_rgba(29,78,216,0.3)]
            hover:scale-105 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600
            active:scale-95">
            Withdraw
          </button>
        </div>

        {/* Info Text */}
        <div className="mt-2">
          <span className="flex flex-col sm:flex-row sm:items-center w-full gap-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
            Withdraw cash using:{" "}
            <div className="flex flex-row items-center gap-3">
              <span className="font-bold flex flex-row items-center gap-1.5 bg-gray-100/80 dark:bg-gray-700/80 
                px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200 hover:bg-gray-100 
                dark:hover:bg-gray-700 shadow-sm hover:shadow-md">
                <FaPaypal className="text-blue-600 dark:text-blue-400" /> PayPal($)
              </span>
              <span className="font-bold flex flex-row items-center gap-1.5 bg-gray-100/80 dark:bg-gray-700/80 
                px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200 hover:bg-gray-100 
                dark:hover:bg-gray-700 shadow-sm hover:shadow-md">
                <FaCreditCard className="text-gray-700 dark:text-gray-400" /> Credit($)
              </span>
            </div>
          </span>
        </div>

        {/* Status Row */}
        <div className="flex mt-4 text-sm gap-8">
          <div className="flex-1 group">
            <div className="text-gray-600 font-medium mb-1 dark:text-gray-400">Pending</div>
            <div className="font-medium text-lg text-gray-900 dark:text-white flex items-center 
              group-hover:translate-x-1 transition-transform duration-200">
              $0
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 
                group-hover:translate-x-1 transition-all duration-200 dark:text-gray-500" />
            </div>
          </div>
          <div className="flex-1 group">
            <div className="text-gray-600 font-medium mb-1 dark:text-gray-400">Withdrawn</div>
            <div className="font-medium text-lg text-gray-900 dark:text-white flex items-center 
              group-hover:translate-x-1 transition-transform duration-200">
              $0
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 
                group-hover:translate-x-1 transition-all duration-200 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-[-20rem] sm:bottom-[-16rem] left-0 right-0 transform translate-y-12 z-0">
        <div className="bg-gradient-to-r from-amber-400 via-amber-450 to-amber-500 
          dark:from-gray-700 dark:via-gray-750 dark:to-gray-800 rounded-2xl p-4 pt-[2rem] 
          transition-all duration-300 hover:scale-105 
          shadow-[0_4px_20px_rgba(251,191,36,0.2)] hover:shadow-[0_8px_30px_rgba(251,191,36,0.3)]
          dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-gradient-to-br from-amber-300 to-amber-400 dark:from-amber-500 dark:to-amber-600 
                  border-[3px] border-amber-500 dark:border-amber-400 hover:scale-110 transition-all duration-200 
                  shadow-[0_4px_12px_rgba(251,191,36,0.3)] hover:shadow-[0_6px_16px_rgba(251,191,36,0.4)]
                  dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]">
                  <FaRankingStar className="w-6 h-6 text-amber-800 dark:text-amber-100" />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-xl sm:text-xl text-amber-900 dark:text-amber-100
                    hover:scale-105 transition-transform duration-200">
                    $10,000 Ranking Race
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                      Ends in 2 day(s) 13:59:29
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-white/90 dark:bg-gray-800/90 px-8 py-2.5 rounded-full text-base 
                text-amber-800 dark:text-amber-200 border-[3px] border-amber-500 dark:border-amber-400 
                hover:border-amber-600 dark:hover:border-amber-300 font-bold transition-all duration-200 
                hover:bg-amber-100 dark:hover:bg-gray-700 
                shadow-[0_4px_12px_rgba(251,191,36,0.2)] hover:shadow-[0_6px_16px_rgba(251,191,36,0.3)]
                dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]
                hover:scale-105 active:scale-95">
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