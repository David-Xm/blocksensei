import { Copy } from "lucide-react";
import { useState } from "react";
import Banner from "../assets/banner.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  return (
    <div className='bg-[#2a2a2a] mx-auto h-screen font-sans text-white'>
      <div className='mx-8'>
        <h3 className='py-6 font-semibold text-2xl'>Profile</h3>
        {/* Banner + Avatar */}
        <div className='relative bg-red-500 rounded-xl w-full h-48 overflow-hidden'>
          <img
            src={Banner} // replace with your avatar
            alt='avatar'
            className='w-full h-full object-cover'
          />
          <div className='right-6 bottom-4 absolute'>
            {/* <div className='shadow p-2 rounded-md text-sm'>
            <p className='mb-2'>Choose Your Avatar</p>
            <div className='flex gap-2 mb-2'>
              <img src={Banner} className='rounded-full w-8 h-8' />
              <img src={Banner} className='rounded-full w-8 h-8' />
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-full text-white text-sm'>
              Withdraw
            </button>
          </div> */}
          </div>
        </div>

        {/* Wallet Info & Stats */}
        <div className='flex flex-col gap-4 mt-12'>
          <div className='inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-md max-w-md text-sm'>
            <span>Wallet ID:</span>
            <span className='text-gray-400'>0x3fA9b2E0C...fE3d</span>
            <Copy className='cursor-pointer' />
          </div>

          <div className='flex gap-6 text-sm'>
            <div>
              <p className='text-gray-400'>Level</p>
              <p>Basic</p>
            </div>
            <div>
              <p className='text-gray-400'>Blocks Balance</p>
              <p>🪙 0 Blocks</p>
            </div>
            <div>
              <p className='text-gray-400'>Total Blocks Earned</p>
              <p>🪙 0 Blocks</p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className='flex flex-col justify-between gap-4 bg-[#2c2c2c] mt-8 p-4 rounded-xl'>
          <h3>Overview</h3>
          <div className='flex gap-6 text-sm'>
            <div className='flex justify-between items-center gap-6 p-4 border border-white/30 rounded-md'>
              <div>
                <p>⭐ 5</p>
                <p className='text-gray-400'>Leaderboard Rank</p>
              </div>
            </div>
            <div className='flex justify-between items-center gap-6 p-4 border border-white/30 rounded-md'>
              <div>
                <p>0</p>
                <p className='text-gray-400'>Completed Lessons</p>
              </div>
            </div>
            <div className='flex justify-between items-center gap-6 p-4 border border-white/30 rounded-md'>
              <div>
                <p>0</p>
                <p className='text-gray-400'>Invited Friends</p>
              </div>
              <button className='bg-blue-500 px-4 py-2 rounded-md text-white text-sm'>
                + Invite A Friend
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex gap-2 mt-8 border-gray-600 border-b'>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-4 py-2 font-medium ${
              activeTab === "achievements"
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab("nft")}
            className={`px-4 py-2 font-medium ${
              activeTab === "nft"
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            NFT Certificate
          </button>
        </div>

        {/* Tab Content */}
        <div className='mt-4 text-gray-300 text-sm'>
          {activeTab === "achievements" ? (
            <p>
              All your quest wins live here. Your bragging rights! No badges
              yet? Go earn your first!
            </p>
          ) : (
            <p>
              Here you'll see your NFT certificates for completed achievements
              and quests.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
