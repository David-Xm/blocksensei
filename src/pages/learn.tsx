import { useEffect, useState } from "react";
import Card from "../components/card";
import Card_img from "../assets/card_img1.png";
import Coin_img from "../assets/coin.png";
import LessonModal from "../components/lessonModal";
import type { Lesson } from "../types";
// import Card_img1 from "../assets/card_img2.png";
// import Card_img2 from "../assets/card_img3.png";
// import Card_img3 from "../assets/card_img4.png";

const Learn: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basics");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [startedLessons, setStartedLessons] = useState<string[]>([]); // Stores IDs of started lessons
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load started lessons from local storage on component mount
    const storedStartedLessons = localStorage.getItem("startedLessons");
    if (storedStartedLessons) {
      setStartedLessons(JSON.parse(storedStartedLessons));
    }

    // Fetch or define your lesson data here
    const mockLessons: Lesson[] = [
      {
        id: "web3-intro",
        title: "What Even Is Web3?",
        content: "What’s All the Hype About? Web1 to Web3 - How we got here.",
        description:
          "Dive deep into the evolution of the internet from its humble beginnings to the decentralized future of Web3. Understand the key concepts, technologies, and implications.",
        imageUrl: Card_img,
        time: "15",
        price: "800",
        sections: [
          {
            id: "web3-intro-1",
            type: "intro",
            title: "Welcome to Web3",
            content:
              "This module introduces Web3 and how the internet has evolved.",
            imageUrl: Card_img,
          },
          {
            id: "web3-intro-2",
            type: "lesson",
            title: "Web1 → Web2 → Web3",
            content:
              "Web1 was read-only, Web2 added interaction, and Web3 is all about decentralization.",
          },
          {
            id: "web3-intro-3",
            type: "quiz",
            title: "Quick Quiz: Web Evolution",
            quiz: {
              intro:
                "You’ve seen how the web has evolved, it’s time to prove what you’ve learned.Your first Quiz  is waiting. Ready to show off your Web3 smarts?",
              question: "What is a key characteristic of Web3?",
              options: [
                "Static pages",
                "Social media",
                "Decentralization",
                "Forums",
              ],
              answer: "Decentralization",
            },
          },
          {
            id: "web3-intro-4",
            type: "reward",
            title: "Congratulations!",
            content:
              "Congratulations! You've completed the introduction to Web3.",
            imageUrl: Coin_img,
          },
        ],
      },
      {
        id: "blockchain-basics",
        title: "Blockchain 101",
        content: "Understand how blockchain works and why it matters.",
        description:
          "Explore the fundamentals of blockchain technology: blocks, chains, consensus, and decentralization.",
        imageUrl: Card_img,
        time: "20",
        price: "1000",
        sections: [
          {
            id: "blockchain-1",
            type: "intro",
            title: "Intro to Blockchain",
            content: "Blockchain is a decentralized, immutable ledger.",
          },
          {
            id: "blockchain-2",
            type: "lesson",
            title: "How Blockchain Works",
            content:
              "Each block contains data, a hash, and the hash of the previous block — ensuring integrity.",
            videoUrl: "/videos/blockchain-explained.mp4",
          },
          {
            id: "blockchain-3",
            type: "quiz",
            title: "Quick Quiz: Blockchain",
            quiz: {
              intro:
                "You’ve seen how the web has evolved, it’s time to prove what you’ve learned.Your first Quiz  is waiting. Ready to show off your Web3 smarts?",
              question: "What connects blocks in a blockchain?",
              options: [
                "Shared files",
                "Internet",
                "Hashes",
                "Smart contracts",
              ],
              answer: "Hashes",
            },
          },
          {
            id: "blockchain-4",
            type: "reward",
            title: "Congratulations!",
            content:
              "Great job! You're now familiar with the basics of blockchain.",
            imageUrl: Coin_img,
          },
        ],
      },
      {
        id: "smart-contracts",
        title: "Intro to Smart Contracts",
        content: "Learn what smart contracts are and how they automate trust.",
        description:
          "Smart contracts are self-executing code that runs on the blockchain. Learn their power and limitations.",
        imageUrl: Card_img,
        time: "18",
        price: "900",
        sections: [
          {
            id: "smart-1",
            type: "intro",
            title: "What Are Smart Contracts?",
            content:
              "They allow trustless execution of code without intermediaries.",
          },
          {
            id: "smart-2",
            type: "lesson",
            title: "Smart Contract Use Cases",
            content:
              "Finance, identity, gaming, real estate — smart contracts are everywhere.",
          },
          {
            id: "smart-3",
            type: "quiz",
            title: "Quick Quiz: Smart Contracts",
            quiz: {
              intro:
                "You’ve seen how the web has evolved, it’s time to prove what you’ve learned.Your first Quiz  is waiting. Ready to show off your Web3 smarts?",
              question:
                "Which language is commonly used to write Ethereum smart contracts?",
              options: ["Python", "Solidity", "Java", "Rust"],
              answer: "Solidity",
            },
          },
          {
            id: "smart-4",
            type: "reward",
            title: "Congratulations!",
            content: "Smart move! You've completed the smart contracts lesson.",
            imageUrl: Coin_img,
          },
        ],
      },
      {
        id: "wallets-setup",
        title: "Wallets and Web3 Identity",
        content: "Setup and manage your crypto wallet securely.",
        description:
          "Your wallet is your gateway to the Web3 world. Learn to set up MetaMask and stay safe.",
        imageUrl: Card_img,
        time: "10",
        price: "700",
        sections: [
          {
            id: "wallet-1",
            type: "intro",
            title: "Why You Need a Wallet",
            content:
              "Wallets help you interact with dApps and manage crypto assets.",
          },
          {
            id: "wallet-2",
            type: "lesson",
            title: "Installing MetaMask",
            content:
              "Visit metamask.io, install the extension, and create your wallet securely.",
            imageUrl: "/images/metamask-install.png",
          },
          {
            id: "wallet-3",
            type: "quiz",
            title: "Quiz: Wallet Safety",
            quiz: {
              intro:
                "You’ve seen how the web has evolved, it’s time to prove what you’ve learned.Your first Quiz  is waiting. Ready to show off your Web3 smarts?",
              question: "What's the best way to secure your seed phrase?",
              options: [
                "Screenshot it",
                "Share with friends",
                "Write it on paper",
                "Email it to yourself",
              ],
              answer: "Write it on paper",
            },
          },
          {
            id: "wallet-4",
            type: "reward",
            title: "Congratulations!",
            content: "You're ready to explore Web3 with your new wallet!",
            imageUrl: Coin_img,
          },
        ],
      },
    ];
    setLessons(mockLessons);
  }, []);

  useEffect(() => {
    // Save started lessons to local storage whenever it changes
    localStorage.setItem("startedLessons", JSON.stringify(startedLessons));
  }, [startedLessons]);

  //
  const handleCardClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setActiveSectionIndex(0);
  };

  const openLessonModal = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setActiveSectionIndex(0);
    setIsModalOpen(true);
  };

  // const closeLessonModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedLesson(null);
  // };

  const closeModal = () => {
    setSelectedLesson(null);
  };

  const handleNext = () => {
    if (
      selectedLesson &&
      activeSectionIndex < selectedLesson.sections.length - 1
    ) {
      setActiveSectionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeSectionIndex > 0) {
      setActiveSectionIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className='flex flex-col justify-center items-center gap-12 bg-gradient-to-b from-transparent to-primary rounded-bl-4xl rounded-br-4xl'
      data-aos='fade-up'
    >
      <div className='m-8 mx-auto w-full'>
        {/* Tabs container */}
        <div
          className='relative flex justify-between items-center bg-[#1a1a1a] mx-auto p-1 rounded-full w-full max-w-sm'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {/* Pill background */}
          <div
            className={`absolute top-1 bottom-1 transition-all duration-300 rounded-full bg-[#3b82f6] w-1/2 ${
              activeTab === "basics" ? "left-1" : "left-1/2"
            }`}
          ></div>

          {/* Buttons */}
          <button
            onClick={() => setActiveTab("basics")}
            className={`relative z-10 flex-1 text-sm font-medium py-2 rounded-full transition-all duration-200 ${
              activeTab === "basics"
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Basics
          </button>

          <button
            onClick={() => setActiveTab("advanced")}
            className={`relative z-10 flex-1 text-sm font-medium py-2 rounded-full transition-all duration-200 ${
              activeTab === "advanced"
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Advanced
          </button>
        </div>

        {/* Content area */}
        <div
          className='flex justify-center items-center mt-6 text-white'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          {activeTab === "basics" ? (
            <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4'>
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => openLessonModal(lesson)}
                  data-aos='fade-up'
                  data-aos-delay={`${200 + lessons.indexOf(lesson) * 100}`}
                >
                  <Card
                    key={lesson.id}
                    imageUrl={lesson.imageUrl}
                    btn='Start'
                    title={lesson.title}
                    content={lesson.content}
                    time={lesson.time}
                    price={lesson.price}
                    onStartLesson={() => handleCardClick(lesson)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>🚀 Show Advanced content here</p>
          )}
        </div>

        {isModalOpen && selectedLesson && (
          <LessonModal
            lesson={selectedLesson}
            activeSectionIndex={activeSectionIndex}
            onClose={closeModal}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </div>
  );
};

export default Learn;
