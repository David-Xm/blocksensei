import React, { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import type { Lesson } from "../types";

interface LessonModalProps {
  lesson: Lesson;
  activeSectionIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  activeSectionIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const section = lesson.sections[activeSectionIndex];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCorrect(false);
  }, [activeSectionIndex]);

  const handleOptionClick = (option: string) => {
    // if (!showFeedback) {
    // }
    // Prevent changing selection after feedback is shown
    setSelectedOption(option);
    setShowFeedback(true);
    if (section.quiz) {
      setIsCorrect(option === section.quiz.answer);
    }
  };

  return (
    <div className='z-50 fixed inset-0 flex justify-center items-center bg-[#333333E0] px-4 py-2'>
      <div className='relative flex flex-col bg-[#020202] my-6 p-6 rounded-2xl w-full max-w-xl overflow-hidden text-white'>
        {/* Header */}
        <div className='flex justify-between items-center pb-4'>
          <div className='flex-grow text-center'>
            <h2 className='font-semibold text-xl'>{section.title}</h2>
          </div>
          <button onClick={onClose} className='top-6 right-6 absolute'>
            <X size={20} className='text-gray-400 hover:text-white' />
          </button>
        </div>

        {/* Image Section */}

        {section.imageUrl && (
          <img
            src={section.imageUrl}
            alt='Web 2.0 Illustration'
            className='w-full object-cover'
            style={{ height: "200px" }} // Adjusted height to match the image visually
          />
        )}

        {/* Content Section */}
        {/* <div className='space-y-4 p-6 pt-4 text-gray-300 text-sm'>
          <p className='font-bold text-white text-lg leading-tight'>
            Web2: The Social Era
          </p>
          <p className='leading-relaxed'>
            Then came Web2, things got fun. You could post, like, share, and
            comment. The "read + write" era.
          </p>

          <div>
            <p className='mb-2 font-semibold text-white'>Welcome to:</p>
            <ul className='space-y-1 ml-4 list-disc list-inside'>
              <li>
                Social media (Facebook, TikTok, etc.), Blogs, YouTube, Mobile
                apps & logins.
              </li>
            </ul>
          </div>

          <div>
            <p className='mb-2 font-semibold text-white'>But the catch?</p>
            <p className='leading-relaxed'>
              You created the content, but big companies owned your data. They
              tracked everything — and monetized it.
            </p>
          </div>

          <p className='font-bold text-white leading-relaxed'>
            In short: Web2 was interactive but centralized. You joined in, they
            stayed in control.
          </p>
        </div> */}
        {/* Content / Quiz */}
        {section.type === "quiz" && section.quiz ? (
          <div>
            <div className='flex flex-col items-center mb-4 text-center'>
              <h3 className='mb-4 font-semibold'>Before You go...</h3>
              <p className='text-sm'>
                {section.quiz.intro || "Let's test your knowledge!"}
              </p>
            </div>
            <div className='flex flex-col bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl overflow-hidden'>
              <div className='p-4'>
                <p className='mb-4 font-medium text-lg'>
                  {section.quiz.question}
                </p>
                <ul className='space-y-3'>
                  {section.quiz.options.map((opt, idx) => (
                    <li
                      key={idx}
                      className={`
                      flex items-center rounded-lg cursor-pointer transition-all duration-200
                    
                   
                  
                    `}
                      onClick={() => handleOptionClick(opt)}
                    >
                      <div
                        className={`
                      flex items-center justify-center h-5 w-5 rounded border-2 border-secondary bg-[#020202] mr-3 transition-all duration-200
                      ${
                        selectedOption === opt && isCorrect
                          ? "bg-secondary"
                          : ""
                      }
                      ${
                        selectedOption === opt && !isCorrect
                          ? "bg-red-500 "
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
                <div className={" bg-secondary px-6 py-4 text-sm font-medium"}>
                  {isCorrect ? (
                    <p>
                      Exactly! The correct answer is: {section.quiz?.answer}.
                    </p>
                  ) : (
                    <p>That's not quite right.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className='mb-4 text-gray-700'>{section.content}</p>
        )}

        {/* Navigation & Dots */}
        <div className='flex justify-between pt-4'>
          <button
            onClick={onPrev}
            disabled={activeSectionIndex === 0}
            className='bg-[#333333] hover:bg-[#444444] focus:ring-opacity-50 disabled:opacity-50 px-5 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 font-semibold text-white transition-colors duration-200'
          >
            Back
          </button>
          <div className='flex gap-1'>
            {/* Ellipsis for the dots as per the image */}
            <span className='text-gray-500 text-2xl leading-none'>...</span>
          </div>
          <button
            onClick={onNext}
            disabled={activeSectionIndex === lesson.sections.length - 1}
            className='bg-[#4A72FF] hover:bg-[#3A62EF] focus:ring-opacity-50 disabled:opacity-50 px-5 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-white transition-colors duration-200'
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
