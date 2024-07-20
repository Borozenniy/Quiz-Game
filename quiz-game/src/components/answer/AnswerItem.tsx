//import { useStae } from 'react';
import { AnswerProps } from './types/answer';

type AnswerItemProps = {
  answer: AnswerProps;
  chooseCorrectAnswer: () => void;
};

export const AnswerItem = ({answer, chooseCorrectAnswer}) : AnswerItemProps  => {

  
  const handleCorrectAnswer = (id: number) => {
    chooseCorrectAnswer(id);
  }
  return (
    <div className="p-1">
      <div onClick={() => handleCorrectAnswer(answer.id)} className={`border-2 rounded-md p-2 ${answer.isCorrect ? 'border-green-500' : 'hover:border-blue-500'}`}>
        <p>{answer.answer}</p>
      </div>
    </div>
  )
};
