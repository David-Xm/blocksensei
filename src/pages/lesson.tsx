"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Card_img from "../assets/card_img1.png";
import Coin_img from "../assets/coin.png";
import { useModal } from "../context/modalContext";

interface LessonSection {
  id: string;
  type: "intro" | "content" | "quiz" | "objectives";
  title: string;
  content?: string;
  quiz?: {
    intro: string;
    question: string;
    options: string[];
    correctAnswer: number;
    answer?: string;
  };
  objectives?: string[];
}

const lessonSections: LessonSection[] = [
  {
    id: "objectives",
    type: "objectives",
    title: "What's All the Hype About?",
    content: "Web1 to Web3 - How we got here.",
    objectives: [
      "Discover the history of the web and learn about the evolution of Web1, Web2, and Web3.",
      "Take a quick quiz to lock in what you've learned.",
      "Earn and claim tokens.",
    ],
  },
  {
    id: "evolution",
    type: "content",
    title: "The Evolution Of The Internet",
    content:
      "The internet didn't always look like this. We've gone through three big stages:",
  },
  {
    id: "quiz",
    type: "quiz",
    title: "Before You Go...",
    quiz: {
      intro:
        "You've seen how the web has evolved, it's time to prove what you've learned. Your first Quiz is waiting. Ready to show off your Web3 smarts?",
      question: "What's the biggest difference between Web2 and Web3?",
      options: [
        "Web3 has more social media apps",
        "Web2 doesn't allow you to interact with content",
        "Web3 lets you own your data and assets",
      ],
      correctAnswer: 2,
      answer: "Web3 lets you own your data and assets",
    },
  },
];

export default function LessonInterface() {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const section = lessonSections[currentSection];
  const { openModal } = useModal();

  const handleOpenReward = (): void => {
    openModal("reward", {
      title: "Achievement Unlocked!",
      message: "You've completed the lesson successfully!",
      rewardAmount: 500,
      rewardType: "tokens",
      image: Coin_img,
    });
  };

  const handleNext = () => {
    if (currentSection < lessonSections.length - 1) {
      setCurrentSection(currentSection + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const correctOption = section.quiz?.options[section.quiz.correctAnswer];
    setIsCorrect(option === correctOption);
    setShowFeedback(true);
  };

  return (
    <div className='bg-[#333333] mt-20 md:mt-0 min-h-screen text-white'>
      {/* Header is commented out as in the user's version */}
      {/* <div className='flex justify-between items-center p-6'>
        <div className='flex items-center gap-3'>
          <div className='flex justify-center items-center bg-blue-600 rounded-lg w-8 h-8'>
            <span className='font-bold text-white text-sm'>B</span>
          </div>
          <span className='font-bold text-white text-lg'>BLOCKSENSEI</span>
        </div>

        <div className='flex items-center gap-4'>
          <span className='font-medium text-white'>What Even Is Web 3?</span>
          <button
            onClick={handleClose}
            className='font-light text-white hover:text-gray-300 text-2xl'
          >
            ×
          </button>
        </div>
      </div> */}

      {/* Main Content */}
      <div className='flex justify-center items-center min-h-[calc(100vh-120px)]'>
        {section.type === "objectives" && (
          <div className='flex flex-col justify-center items-center w-full text-center'>
            {/* Character Image */}
            <div className='bg-black mb-8 w-full'>
              <img
                src={Card_img}
                alt='Character'
                width={300}
                height={300}
                className='mx-auto'
              />
            </div>

            {/* Title and Subtitle */}
            <h1 className='mb-2 font-bold text-4xl'>{section.title}</h1>
            <p className='mb-8 text-gray-300 text-xl'>{section.content}</p>

            {/* Objectives Box */}
            <div className='bg-gradient-to-r from-primary/30 to-secondary/30 mb-8 p-8 rounded-2xl max-w-2xl text-left'>
              <h3 className='mb-6 font-semibold text-xl text-center'>
                What You will do In this lesson
              </h3>
              <div className='space-y-4'>
                {section.objectives?.map((objective, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <div className='flex-shrink-0 bg-white mt-3 rounded-full w-2 h-2'></div>
                    <p className='text-gray-200 leading-relaxed'>{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={handleNext}
              className='bg-gradient-to-r from-primary to-secondary mb-4 px-8 py-3 rounded-full font-semibold text-lg transition-colors'
            >
              Start Learning
            </button>
          </div>
        )}

        {section.type === "content" && (
          <div className='w-full max-w-4xl'>
            <div className='p-8 border border-gray-600 rounded-2xl'>
              <h1 className='mb-8 font-bold text-4xl text-center'>
                {section.title}
              </h1>

              <div className='space-y-6 text-center'>
                <p className='mb-8 text-gray-300 text-xl'>{section.content}</p>

                <div className='space-y-4 text-lg'>
                  <div className='flex justify-center items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    <span>Web1: Just reading.</span>
                  </div>
                  <div className='flex justify-center items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    <span>Web2: Reading + posting.</span>
                  </div>
                  <div className='flex justify-center items-center gap-2'>
                    <span className='text-green-400'>•</span>
                    <span>Web3: Owning + controlling.</span>
                  </div>
                </div>

                <p className='mt-8 text-gray-300 text-lg'>
                  Each one changed how we live, create, and connect.
                </p>
              </div>

              {/* Navigation */}
              <div className='flex justify-between items-center mt-12'>
                <button
                  onClick={handleBack}
                  className='bg-[#A4A4A466] hover:bg-gray-500 px-4 py-2 rounded-full font-medium transition-colors'
                >
                  Back
                </button>

                <div className='flex gap-2'>
                  <div className='bg-gray-600 rounded-full w-2 h-2'></div>
                  <div className='bg-gray-600 rounded-full w-2 h-2'></div>
                  <div className='bg-gray-600 rounded-full w-2 h-2'></div>
                </div>

                <button
                  onClick={handleNext}
                  className='bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full font-medium transition-colors'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {section.type === "quiz" && (
          <div className='w-full md:max-w-4xl'>
            <div className='p-2 md:p-8 border border-gray-600 rounded-2xl'>
              <h1 className='mb-8 font-bold text-4xl text-center'>
                {section.title}
              </h1>

              <div>
                <div className='flex flex-col items-center mb-4 text-center'>
                  <h3 className='mb-4 font-semibold'>Before You go...</h3>
                  <p className='text-sm'>
                    {section.quiz?.intro || "Let's test your knowledge!"}
                  </p>
                </div>
                <div className='flex flex-col bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl overflow-hidden'>
                  <div className='p-4'>
                    <p className='mb-4 font-medium text-lg'>
                      {section.quiz?.question}
                    </p>
                    <ul className='space-y-3'>
                      {section.quiz?.options.map((opt, idx) => (
                        <li
                          key={idx}
                          className='flex items-center rounded-lg transition-all duration-200 cursor-pointer'
                          onClick={() => handleOptionClick(opt)}
                        >
                          <div
                            className={`
                              flex items-center text-sm md:text-base justify-center h-5 w-5 rounded border-2 border-secondary bg-[#020202] mr-3 transition-all duration-200
                              ${
                                selectedOption === opt && isCorrect
                                  ? "bg-secondary"
                                  : ""
                              }
                              ${
                                selectedOption === opt && !isCorrect
                                  ? "bg-red-500"
                                  : ""
                              }
                            `}
                          >
                            {selectedOption === opt && isCorrect && (
                              <Check size={16} className='text-white' />
                            )}
                            {selectedOption === opt && !isCorrect && (
                              <X size={16} className='text-white' />
                            )}
                          </div>
                          <span className='text-gray-200'>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feedback Section - Conditionally displayed */}
                  {showFeedback && (
                    <div className='bg-secondary px-6 py-4 font-medium text-sm'>
                      {isCorrect ? (
                        <p>
                          Exactly! The correct answer is: {section.quiz?.answer}
                          .
                        </p>
                      ) : (
                        <p>That's not quite right.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className='flex justify-between items-center mt-12'>
                <button
                  onClick={handleBack}
                  className='bg-[#A4A4A466] hover:bg-gray-500 px-4 py-2 rounded-full font-medium transition-colors'
                >
                  Back
                </button>

                <div className='flex gap-2'>
                  <div className='bg-gray-600 rounded-full w-2 h-2'></div>
                  <div className='bg-gray-600 rounded-full w-2 h-2'></div>
                  <div className='bg-gray-600 rounded-full w-2 h-2'></div>
                </div>

                <button
                  onClick={handleOpenReward}
                  disabled={!showFeedback}
                  className='disabled:bg-gray-600 bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
