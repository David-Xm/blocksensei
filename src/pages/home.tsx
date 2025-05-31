import Card from "../components/card";
import Card_img from "../assets/card_img1.png";
import Divier from "../components/divier";

const Home = () => {
  return (
    <main className='flex justify-center items-center bg-gradient-to-b from-transparent to-primary rounded-bl-4xl rounded-br-4xl h-full'>
      <div className='flex flex-col justify-center items-center gap-12 my-16'>
        <div className='flex flex-col items-center gap-4 px-4 text-center'>
          <h1 className='font-Sora font-bold text-4xl'>
            Learn Web3 the Fun Way — Guided by Your Sensei.
          </h1>
          <p>
            Web 3 is hard, we make it simple through a gamified interactive
            learning experience that simplifies Web3 and rewards learners <br />
            by letting them earn in Web 3 while learning.
          </p>
        </div>
        <Card imageUrl={Card_img} btn='Get Started' />
        <div className='flex flex-col items-center gap-2 text-xs'>
          <h3 className='font-semibold'>The Block Sensei Journey</h3>
          <div className='flex items-center gap-4 w-full text-accent'>
            <p>Basics</p>
            <Divier />
            <p> Do Web 3 Stuff</p>
            <Divier />
            <p>Advanced</p>
            <Divier />
            <p>NFT Certificates</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
