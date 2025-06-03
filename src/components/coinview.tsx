import { useModal } from "../context";
import Coin_img from "../assets/coin.png";

const CoinView = () => {
  const { openModal } = useModal();

  const handleOpenBalance = (): void => {
    openModal("balance", {
      balance: 1250.75,
      walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
      currency: "SUI",
      image: Coin_img,
    });
  };
  return (
    <div
      onClick={handleOpenBalance}
      className='flex items-center gap-4 border border-white/30 rounded-full text-light text-sm cursor-pointer'
    >
      <div className='flex justify-between items-center gap-4 px-4 py-2 cursor-pointer'>
        <div>
          <img src={Coin_img} alt='Coin' className='w-8 h-8' />
        </div>
        <div>
          <h3>Block</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default CoinView;
