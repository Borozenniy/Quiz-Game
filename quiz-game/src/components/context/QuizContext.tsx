import { createContext, useState } from 'react';

type QuizContextType = {};

//const fakeQuizzes = [
//  {
//    id: 1,
//    title: 'Quiz 1',
//    name: 'React',
//    description: 'Learn React',
//    questionNumber: 10,
//  },
//  {
//    id: 2,
//    title: 'Quiz 1',
//    name: 'React',
//    description: 'Learn React',
//    questionNumber: 10,
//  },
//  {
//    id: 3,
//    title: 'Quiz 1',
//    name: 'React',
//    description: 'Learn React',
//    questionNumber: 10,
//  },
//];

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
