import { Ticket } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { LuLink } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";

const SharingItem = ({ icon: Icon, text, highlight }) => {
  return (
    <div className="flex flex-row items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-200 cursor-pointer group dark:hover:bg-[#444444]/70">
      <div className="p-2 rounded-lg bg-orange-50 dark:bg-[#2D2D2D]">
        <Icon className="w-5 h-5 text-[#F58B0D] dark:text-[#F58B0D]" />
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[#000] text-base font-semibold dark:text-white">
          {text} <span className="text-[#F58B0D]">{highlight}</span>
        </p>
        <MdKeyboardArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 dark:text-white" />
      </div>
    </div>
  );
};

const Sharing = () => {
  const sharingItems = [
    { icon: RiCoupon2Fill, text: "Submit to", highlight: "coupon sites" },
    { icon: FaFacebook, text: "Share in", highlight: "facebook groups" },
    { icon: BiBookContent, text: "Publish on", highlight: "content sites" },
    { icon: AiFillMessage, text: "Send to", highlight: "your friends" },
    { icon: BiBookContent, text: "Add the link to", highlight: "your bio" },
    { icon: LuLink, text: "Include the link/code in", highlight: "your post" }
  ];

  return (
    <div className="max-w-md w-full h-auto mx-auto flex flex-col gap-[1.3rem] bg-gradient-to-b from-[#F4E6D3] to-[#fff] rounded-xl p-4 sm:p-6 border-2 border-[#f4bf8d] shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-gradient-to-b dark:from-[#333333] dark:to-[#444444] dark:border-[#555555] dark:shadow-xl dark:hover:shadow-2xl">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-[#F58B0D] rounded-full dark:bg-[#F58B0D]" />
          <h1 className="text-[#3A2919] font-bold text-2xl dark:text-white">
            Simplify Sharing
          </h1>
        </div>
        <p className="text-sm font-normal text-gray-800 ml-3 dark:text-gray-300">
          Effortlessly copy and share content! It's the easiest way to earn!
        </p>
      </div>
      
      <div className="flex flex-col divide-y divide-orange-100 dark:divide-[#555555]">
        {sharingItems.map((item, index) => (
          <SharingItem
            key={index}
            icon={item.icon}
            text={item.text}
            highlight={item.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default Sharing;
