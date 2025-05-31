import { useState } from "react";
import Card from "../components/card";
import Card_img from "../assets/card_img1.png";
import Card_img1 from "../assets/card_img2.png";
import Card_img2 from "../assets/card_img3.png";
import Card_img3 from "../assets/card_img4.png";

const Learn = () => {
  const [activeTab, setActiveTab] = useState("basics");
  return (
    <div className='flex flex-col justify-center items-center gap-12 bg-gradient-to-b from-transparent to-primary mt-20 rounded-bl-4xl rounded-br-4xl'>
      <div className='m-8 mx-auto w-full'>
        {/* Tabs container */}
        <div className='relative flex justify-between items-center bg-[#1a1a1a] mx-auto p-1 rounded-full w-full max-w-sm'>
          {/* Pill background */}
          <div
            className={`absolute top-1 bottom-1 transition-all duration-300 rounded-full bg-[#3b82f6] w-1/2 ${
              activeTab === "basics" ? "left-1" : "left-1/2"
            }`}
          ></div>

          {/* Buttons */}
          <button
            onClick={() => setActiveTab("basics")}
            className={`relative z-10 flex-1 text-sm font-medium py-2 rounded-full transition-all duration-200 ${
              activeTab === "basics"
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Basics
          </button>

          <button
            onClick={() => setActiveTab("advanced")}
            className={`relative z-10 flex-1 text-sm font-medium py-2 rounded-full transition-all duration-200 ${
              activeTab === "advanced"
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Advanced
          </button>
        </div>

        {/* Content area */}
        <div className='mt-6 text-white'>
          {activeTab === "basics" ? (
            <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-8'>
              <Card imageUrl={Card_img} btn='Get Started' />
              <Card imageUrl={Card_img1} btn='Get Started' />
              <Card imageUrl={Card_img2} btn='Get Started' />
              <Card imageUrl={Card_img3} btn='Get Started' />
            </div>
          ) : (
            <p>🚀 Show Advanced content here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;
