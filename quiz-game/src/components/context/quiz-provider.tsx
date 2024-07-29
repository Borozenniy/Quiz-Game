import { createContext, useState } from 'react';

type QuizContextType = {};

const QuizContext = createContext<QuizContextType | null>(null);

const QuizContextProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  //const updateQuiz = (updatedQuiz) => {
  //  setQuizzes(quizzes.map(quiz => (quiz.id === updatedQuiz.id ? updatedQuiz : quiz)));
  //};

  const removeQuiz = (id: string) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };
  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes, addQuiz, removeQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContextProvider, QuizContext };
