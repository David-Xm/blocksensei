import { Copy } from "lucide-react";
import { useState } from "react";
import Banner from "../assets/banner.png";
import Coin_img from "../assets/coin.png";
import { useModal } from "../context";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const { openModal } = useModal();

  const handleOpenTransfer = (): void => {
    openModal("transfer", {
      balance: 1250.75,
      currency: "SUI",
      onTransfer: async (address: string, amount: number) => {
        console.log(`Transferring ${amount} to ${address}`);
        return new Promise<{ success: boolean; error?: string }>((resolve) => {
          setTimeout(() => {
            if (amount > 1000) {
              resolve({ success: false, error: "Transaction limit exceeded" });
            } else {
              resolve({ success: true });
            }
          }, 1500);
        });
      },
      image: Coin_img,
    });
  };
  return (
    <div className='bg-[#2a2a2a] h-full text-white'>
      <div className='mx-2 md:mx-8'>
        <h3 className='py-6 font-semibold text-2xl'>Profile</h3>
        {/* Banner + Avatar */}
        <div className='relative bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-64 overflow-hidden'>
          <img
            src={Banner} // replace with your avatar
            alt='avatar'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Wallet Info & Stats */}
        <div className='flex flex-col gap-4 mt-12'>
          <div className='flex md:flex-row flex-col justify-between md:items-center gap-3'>
            <div className='flex items-center gap-3 px-4 py-2 border border-white/30 rounded-full text-sm'>
              <span>Wallet ID:</span>
              <span className='text-gray-400'>0x3fA9b2E0C...fE3d</span>
              <Copy className='cursor-pointer' />
            </div>
            <div className='text-sm'>
              <p className='text-gray-400'>Joined 30th May 2025</p>
            </div>
          </div>

          <div className='flex md:flex-row flex-col justify-between md:items-center gap-3'>
            <div className='flex gap-6 text-sm'>
              <div>
                <p>Basic</p>
                <p className='text-gray-400'>Level</p>
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <img
                    src={Coin_img} // replace with your avatar
                    alt='avatar'
                    className='w-4 h-4 object-center object-contain'
                  />
                  <p>0 Blocks</p>
                </div>
                <p className='text-gray-400'>Blocks Balance</p>
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <img
                    src={Coin_img} // replace with your avatar
                    alt='avatar'
                    className='w-4 h-4 object-center object-contain'
                  />
                  <p>0 Blocks</p>
                </div>
                <p className='text-gray-400'>Total Blocks Earned</p>
              </div>
            </div>
            <div>
              <button
                onClick={handleOpenTransfer}
                className='bg-gradient-to-r from-primary to-secondary mb-4 px-8 py-3 rounded-full text-white text-sm'
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className='flex flex-col justify-between gap-4 mt-8 rounded-xl'>
          <h3>Overview</h3>
          <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-sm'>
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
              NFT certificates are earned completing lessons. You haven’t gotten
              any yet, Finish a lesson and claim yours!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
