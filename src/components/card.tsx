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
    <div className='flex flex-col items-center gap-4 bg-bg shadow-md p-8 rounded-2xl max-w-[280px]'>
      <img src={imageUrl} alt='icon' />
      <Button title={btn} />
    </div>
  );
};

export default Card;
