import { MdKeyboardArrowRight } from "react-icons/md";
import AvailableCashCard from "./page2components/AvailableCashCard";
import ReferralInterface from "./page2components/ReferralInterface";
import Sharing from "./page2components/Sharing";
import profileImg from "../../assets/profileImg.png";
import { FaShareFromSquare } from "react-icons/fa6";
import ShareToEarn from "./page2components/ShareToEarn";
import { useEffect } from "react";
import ThemeToggle from "../../components/ThemeToggle";

const Page2 = () => {
  useEffect(() => {
     
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen bg-gray-600/40 dark:bg-gray-800/80">
      <ThemeToggle />
      <div className="flex flex-col gap-[22rem] sm:gap-[18rem] w-full max-w-md min-h-screen mx-4 bg-gradient-to-b from-[#E68E39] to-[#F3F5F5] dark:from-[#1A202C] dark:to-[#2D3748] rounded-[1.5rem] px-[1.5rem] py-[1rem]">
        <AvailableCashCard />

        <div className="flex flex-col gap-[3rem]">
          <ReferralInterface />
          <Sharing />

          <ShareToEarn profileImg={profileImg}/>

          <button className="w-full py-2.5 rounded-full text-lg font-bold flex items-center justify-center gap-[0.5rem] bg-gradient-to-r from-orange-400 to-orange-500 dark:from-orange-300 dark:to-orange-400 text-white shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:from-orange-500 hover:to-orange-400 hover:shadow-2xl hover:ring-4 hover:ring-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400">
            <FaShareFromSquare className="w-5 h-5 transform transition duration-300 ease-in-out group-hover:rotate-180" />
            <span className="group-hover:translate-x-2 transition-all">
              Share to Earn
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
