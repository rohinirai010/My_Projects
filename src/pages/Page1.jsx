import freeProductsImg from "../assets/productsImg.png";
import couponsImg from "../assets/couponImg.png";
import commissionImg from "../assets/commissionImg.png";
import appDownloadImg from "../assets/downloadImg.png";
import qrCodeImg from "../assets/qrImg.png";
import bgImg from "../assets/bgImg.png";

const Page1 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
       
      <div className="relative w-full max-w-lg mx-4 bg-gradient-to-r from-[#ffe0ef] via-[#fff9df] to-[#ffcec7] dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
        <img
          src={bgImg}
          alt=""
          className="absolute right-[-1.2rem] top-[2rem] -rotate-45 opacity-80 w-[10rem] h-[10rem] animate-pulse dark:opacity-30"
        />

        {/* Header with Logo and Title */}
        <div className="p-6 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[1rem] mb-2 sm:pr-[3rem]">
            <div className="bg-orange-500 text-white p-2 rounded-xl hover:scale-110 transition-transform duration-300 hover:rotate-6">
              <img src="" className="w-12 h-10" />
            </div>
            <h1 className="text-2xl font-extrabold italic text-[#47341f] dark:text-white mb-2 transition-colors duration-300">
              Welcome to TEMU Influencer Program
            </h1>
          </div>

          <p className="text-[#8f837b] dark:text-gray-300 text-base mb-6 sm:pr-[6rem] hover:text-[#47341f] dark:hover:text-white transition-colors duration-300">
            We are looking for content creators to help us spread the word about
            Temu on social media!
          </p>

          {/* Grid of Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Free Products */}
            <div className="relative bg-white dark:bg-gray-700 hover:bg-gradient-to-r from-[#fff9e3] via-[#ffe0ef] to-[#ffcec7] dark:hover:bg-gradient-to-r dark:hover:from-gray-600 dark:hover:via-gray-500 dark:hover:to-gray-600 rounded-xl overflow-hidden h-auto shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <div className="relative w-full h-full">
                <p className="text-[#8c7a70] dark:text-gray-200 text-xl font-semibold p-4 pr-4 pb-14 text-left leading-tight group-hover:text-[#853b3b] dark:group-hover:text-white transition-colors duration-300">
                  Up to{" "}
                  <span className="text-[#f02c3d] dark:text-red-400 text-2xl font-bold">
                    $300
                  </span>
                  <br />
                  of Free Products
                </p>
                <img
                  src={freeProductsImg}
                  alt="Free Products"
                  className="absolute bottom-[-0.7rem] right-[-0.3rem] w-14 h-14 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                />
              </div>
            </div>

            {/* Coupons */}
            <div className="relative bg-white dark:bg-gray-700 hover:bg-gradient-to-r from-[#ffe0ef] via-[#ffcec7] to-[#fff9e3] dark:hover:bg-gradient-to-r dark:hover:from-gray-600 dark:hover:via-gray-500 dark:hover:to-gray-600 rounded-xl overflow-hidden h-auto shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-full">
                <p className="text-[#8c7a70] dark:text-gray-200 text-xl font-semibold p-4 pr-4 pb-14 text-left leading-tight group-hover:text-[#853b3b] dark:group-hover:text-white transition-colors duration-300">
                  <span className="text-[#f02c3d] dark:text-red-400 text-2xl font-bold">
                    50%{" "}
                    <br />
                  </span>
                  OFF Coupons for your followers
                </p>
                <img
                  src={couponsImg}
                  alt="Coupons"
                  className="absolute bottom-[-0.7rem] right-[-1.8rem] w-22 h-20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                />
              </div>
            </div>

            {/* Commission */}
            <div className="relative bg-white dark:bg-gray-700 hover:bg-gradient-to-r from-[#fff9e3] via-[#ffe0ef] to-[#ffcec7] dark:hover:bg-gradient-to-r dark:hover:from-gray-600 dark:hover:via-gray-500 dark:hover:to-gray-600 rounded-xl overflow-hidden h-auto shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-full">
                <p className="text-[#8c7a70] dark:text-gray-200 text-xl font-semibold p-4 pr-4 pb-14 text-left leading-tight group-hover:text-[#853b3b] dark:group-hover:text-white transition-colors duration-300">
                  Up to{" "}
                  <span className="text-[#f02c3d] dark:text-red-400 text-2xl font-bold">
                    20%
                    <br />
                  </span>
                  commission per new user order
                </p>
                <img
                  src={commissionImg}
                  alt="Commission"
                  className="absolute bottom-[-0.7rem] right-[-1rem] w-16 h-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                />
              </div>
            </div>

            {/* App Download */}
            <div className="relative bg-white dark:bg-gray-700 hover:bg-gradient-to-r from-[#ffe0ef] via-[#ffcec7] to-[#fff9e3] dark:hover:bg-gradient-to-r dark:hover:from-gray-600 dark:hover:via-gray-500 dark:hover:to-gray-600 rounded-xl overflow-hidden h-auto shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-full">
                <p className="text-[#8c7a70] dark:text-gray-200 text-xl font-semibold p-4 pr-4 pb-14 text-left leading-tight group-hover:text-[#853b3b] dark:group-hover:text-white transition-colors duration-300">
                  <span className="text-[#f02c3d] dark:text-red-400 text-2xl font-bold">5%{" "}</span>
                  per new App download and login
                </p>
                <img
                  src={appDownloadImg}
                  alt="App Download"
                  className="absolute bottom-[-0.3rem] right-[0rem] w-12 h-12 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* How to Join Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-6 px-10 mt-4">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between items-center h-full">
            <div className="space-y-3 relative">
              <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 hover:text-[#f02c3d] dark:hover:text-red-400 transition-colors duration-300">
                How to join?
              </h2>
              {/* Vertical connecting lines */}
              <div className="absolute left-3 top-14 w-[2px] h-[28px] bg-orange-500"></div>
              <div className="absolute left-3 top-[90px] w-[2px] h-[28px] bg-orange-500"></div>

              <div className="flex items-center gap-2 hover:text-[#f02c3d] dark:hover:text-red-400 transition-all duration-200 group">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm relative z-10 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-lg group-hover:translate-x-1 transition-transform duration-300">Scan QR code</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#f02c3d] dark:hover:text-red-400 transition-all duration-200 group">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm relative z-10 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-lg group-hover:translate-x-1 transition-transform duration-300">Join the program</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#f02c3d] dark:hover:text-red-400 transition-all duration-200 group">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm relative z-10 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-lg group-hover:translate-x-1 transition-transform duration-300">Post & earn</span>
              </div>
            </div>
            <div className="w-[9.5rem] h-[9.5rem] border-8 dark:border-gray-600 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <img src={qrCodeImg} alt="QR Code" className="w-full h-full dark:invert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;