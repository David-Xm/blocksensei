export interface Quiz {
  intro: string;
  question: string;
  options: string[];
  answer: string;
}

export interface LessonSection {
  id: string;
  type: "intro" | "lesson" | "quiz" | "reward";
  title: string;
  content?: string;
  imageUrl?: string; // Optional image for section
  videoUrl?: string; // Optional video for section
  quiz?: Quiz; // Optional quiz object for quiz sections
}

export interface Lesson {
  id: string;
  title: string;
  content?: string;
  description: string;
  imageUrl: string;
  time: string;
  price: string;
  sections: LessonSection[];
  learningObjectives?: string[]; // <--- ADD THIS LINE
}
