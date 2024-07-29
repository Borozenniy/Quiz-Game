import { useContext } from 'react';
import { QuizContext } from '../../components/context/quiz-provider';

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw Error('useQuizContext must be used within a QuizContextProvider');
  }
  return context;
};

export { useQuiz };
