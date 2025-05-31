import type React from "react";
import Button from "./button";
import Price from "./price";
import Time from "./time";
import Logo from "../assets/Logo.png";

interface CardProps {
  imageUrl: string;
  btn: string | React.ReactNode;
  title?: string;
  content?: string;
  time?: string | "0";
  price?: string | "0";
  lessonId?: string; // To uniquely identify the lesson
  onStartLesson?: (lessonId: string) => void; // Callback when lesson starts
  onContinueLesson?: (lessonId: string) => void; // Callback when lesson continues
  isLessonStarted?: boolean; // New prop to indicate if the lesson has been started
}

const Card: React.FC<CardProps> = ({ imageUrl, btn, time, price }) => {
  return (
    <div className='relative flex justify-center items-center bg-gradient-to-r from-primary to-secondary p-[2px] rounded-2xl max-w-[282px]'>
      <div className='flex flex-col items-center gap-4 bg-bg shadow-md p-8 border- rounded-2xl max-w-[280px]'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4 w-full'>
            {time && <Time time={time} />}
            {price && <Price price={price} />}
          </div>
        </div>

        <div className='w-40 h-40'>
          <img src={imageUrl} alt='icon' />
        </div>

        <div className='flex flex-col items-center gap-2'>
          <h3 className='font-Sora font-semibold'>What Even Is Web3?</h3>
          <p className='text-sm text-center'>
            What’s All the Hype About? Web1 to Web3 - How we got here.
          </p>
        </div>
        <div className='flex justify-between items-center gap-3 w-full'>
          <img src={Logo} alt='Logo' className='w-1/3' />
          <div className='flex-1'>
            <Button title={btn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
