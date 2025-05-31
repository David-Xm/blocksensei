import type React from "react";
import Button from "./button";

interface CardProps {
  imageUrl: string;
  btn: string | React.ReactNode;
  title?: string;
  content?: string;
  time?: string;
  price?: string;
}
const Card: React.FC<CardProps> = ({ imageUrl, btn }) => {
  return (
    <div className='relative flex justify-center items-center bg-gradient-to-r from-primary to-secondary p-[2px] rounded-2xl'>
      <div className='flex flex-col items-center gap-4 bg-bg shadow-md p-8 border- rounded-2xl max-w-[280px]'>
        <img src={imageUrl} alt='icon' />
        <Button title={btn} />
      </div>
    </div>
  );
};

export default Card;
