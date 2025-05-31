import { useEffect, useState } from "react";
import Card from "../components/card";
import Card_img from "../assets/card_img1.png";
// import Card_img1 from "../assets/card_img2.png";
// import Card_img2 from "../assets/card_img3.png";
// import Card_img3 from "../assets/card_img4.png";

interface Lesson {
  id: string;
  title: string;
  content: string;
  description: string;
  imageUrl: string;
  time: string;
  price: string;
  // ... other lesson specific data
}

const Learn: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basics");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [startedLessons, setStartedLessons] = useState<string[]>([]); // Stores IDs of started lessons
  const [showModal, setShowModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

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
      },
      // ... more lessons
    ];
    setLessons(mockLessons);
  }, []);

  useEffect(() => {
    // Save started lessons to local storage whenever it changes
    localStorage.setItem("startedLessons", JSON.stringify(startedLessons));
  }, [startedLessons]);

  const handleStartLesson = (lessonId: string) => {
    // Mark the lesson as started
    setStartedLessons((prev) => [...prev, lessonId]);
    // Close modal and navigate to the lesson content
    setShowModal(false);
    // In a real application, you'd use react-router-dom or similar to navigate:
    // navigate(`/lessons/${lessonId}`);
    console.log(`Starting lesson: ${lessonId}`);
  };

  const handleContinueLesson = (lessonId: string) => {
    // Just navigate to the lesson content
    // navigate(`/lessons/${lessonId}`);
    setShowModal(false);
    console.log(`Continuing lesson: ${lessonId}`);
  };

  const openLessonModal = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLesson(null);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-12 bg-gradient-to-b from-transparent to-primary mt-20 rounded-bl-4xl rounded-br-4xl'>
      <div className='m-8 mx-auto w-full'>
        {/* Tabs container */}
        <div className='relative flex justify-between items-center bg-[#1a1a1a] mx-auto p-1 rounded-full w-full max-w-sm'>
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
        <div className='flex justify-center items-center mx-auto mt-6 text-white container'>
          {activeTab === "basics" ? (
            <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-8'>
              {lessons.map((lesson) => (
                <div key={lesson.id} onClick={() => openLessonModal(lesson)}>
                  <Card
                    imageUrl={lesson.imageUrl}
                    btn={
                      startedLessons.includes(lesson.id) ? "Continue" : "Start"
                    }
                    title={lesson.title} // Use dynamic title
                    content={lesson.content} // Use dynamic content
                    time={lesson.time}
                    price={lesson.price}
                    lessonId={lesson.id}
                    onStartLesson={handleStartLesson} // These callbacks will be used in the modal
                    onContinueLesson={handleContinueLesson} // These callbacks will be used in the modal
                    isLessonStarted={startedLessons.includes(lesson.id)} // Pass the status
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>🚀 Show Advanced content here</p>
          )}
        </div>

        {showModal && selectedLesson && (
          <div className='z-50 fixed inset-0 flex justify-center items-center bg-black/50 bg-opacity-50'>
            <div className='bg-bg p-8 rounded-lg w-full max-w-md'>
              <h2 className='mb-4 font-bold text-xl'>{selectedLesson.title}</h2>
              <p className='mb-6'>{selectedLesson.description}</p>
              <div className='flex justify-end gap-4'>
                <button
                  onClick={closeModal}
                  className='bg-gray-300 px-4 py-2 rounded'
                >
                  Close
                </button>
                {startedLessons.includes(selectedLesson.id) ? (
                  <button
                    onClick={() => handleContinueLesson(selectedLesson.id)}
                    className='bg-blue-500 px-4 py-2 rounded text-white'
                  >
                    Continue Lesson
                  </button>
                ) : (
                  <button
                    onClick={() => handleStartLesson(selectedLesson.id)}
                    className='bg-blue-500 px-4 py-2 rounded text-white'
                  >
                    Start Lesson
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
