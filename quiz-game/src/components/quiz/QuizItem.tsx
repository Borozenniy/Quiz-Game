import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';

type QuizItemProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  questionsNumber: number;
};

export function QuizItem({ quiz }: QuizItemProps) {

  const { removeQuiz } = useQuiz();
  const { name, description, questionsNumber, hasTimer, timer } = quiz;
  const navigate = useNavigate();

  console.log(quiz);

  const handleRemoveQuiz = (id: string) => {
    removeQuiz(id);
  }

  function handleNavigate() {
    navigate(`/quiz:${quiz.id}`);
  }
  //TODO: remove andadd button as component
  return (
    <div>
      <h1>{name}</h1>
      <p>Description: {description ? description : 'No description'}</p>
      <p>Number of quesitons: {questionsNumber}</p>
      <p>With timer: {hasTimer ? 'Yes' : 'No'}</p>
      {hasTimer && <p> Timer: {timer.minutes}:{timer.seconds || '00'}</p>}
      <button onClick={handleNavigate}>Start Quiz</button>
    </div>
  );
}
