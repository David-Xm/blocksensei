export interface LessonSection {
  id: string;
  type: "intro" | "lesson" | "quiz" | "reward";
  title: string;
  content?: string;
  imageUrl?: string;
  videoUrl?: string;
  quiz?: {
    intro: string;
    question: string;
    options: string[];
    answer: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  description: string;
  imageUrl: string;
  time: string;
  price: string;
  sections: LessonSection[];
}
