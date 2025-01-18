import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const ScrollButtons = () => {
  const [visibleButtons, setVisibleButtons] = useState({
    referral: false,
    sharing: false
  });
  const [sharingTimeout, setSharingTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('#scroll-container');
      if (!container) return;

      const referralElement = document.querySelector('#referral-interface');
      const sharingElement = document.querySelector('#sharing-section');
      const containerRect = container.getBoundingClientRect();
      
      if (referralElement) {
        const referralPosition = referralElement.getBoundingClientRect();
        const relativeTop = referralPosition.top - containerRect.top;
        setVisibleButtons(prev => ({
          ...prev,
          referral: relativeTop <= window.innerHeight / 2 && relativeTop >= 0
        }));
      }

      if (sharingElement) {
        const sharingPosition = sharingElement.getBoundingClientRect();
        const relativeTop = sharingPosition.top - containerRect.top;
        if (relativeTop <= window.innerHeight / 2 && relativeTop >= 0) {
          setVisibleButtons(prev => ({ ...prev, sharing: true }));
          
          if (sharingTimeout) clearTimeout(sharingTimeout);
          
          const timeout = setTimeout(() => {
            setVisibleButtons(prev => ({ ...prev, sharing: false }));
          }, 3000);
          
          setSharingTimeout(timeout);
        }
      }
    };

    const container = document.querySelector('#scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (sharingTimeout) clearTimeout(sharingTimeout);
    };
  }, [sharingTimeout]);

  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
      <div className={`transition-opacity duration-300 ${visibleButtons.referral ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button className="bg-orange-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600">
          <MdKeyboardArrowRight className="w-6 h-6" />
        </button>
      </div>
      <div className={`transition-opacity duration-300 ${visibleButtons.sharing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button className="bg-orange-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600">
          <MdKeyboardArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ScrollButtons;