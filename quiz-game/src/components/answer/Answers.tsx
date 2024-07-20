import { AnswerItem } from './AnswerItem';
import { AnswerProps } from './types/answer';


//TODO: do types in a better way and replace general type in one file
//TODO: and do import from that file

type AnswersProps = {
  answers: AnswerProps[];
  chooseCorrectAnswer:() => void;

};

export function Answers({ answers, chooseCorrectAnswer }: AnswersProps) {
  return (
    <div>
      {answers.map((answer) => (
        <AnswerItem key={answer.id} answer={answer} chooseCorrectAnswer={chooseCorrectAnswer} />
        
      ))}
    </div>
  );
}
