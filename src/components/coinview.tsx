import Coin from "../assets/coin.png";

const CoinView = () => {
  return (
    <div className='flex items-center gap-4 border border-white/30 rounded-full text-text-primary text-sm cursor-pointer'>
      <div className='flex justify-between items-center gap-4 px-4 py-2 cursor-pointer'>
        <div>
          <img src={Coin} alt='Coin' />
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
