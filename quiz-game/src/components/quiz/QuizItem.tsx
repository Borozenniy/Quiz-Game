import { useNavigate } from 'react-router-dom';

type QuizItemProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  questionNumber: number;
};

export function QuizItem({ quiz }: QuizItemProps) {
  console.log(quiz);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/quiz:${quiz.id}`);
  }
  return (
    <div>
      <h1>{quiz?.title}</h1>
      <p>{quiz?.name}</p>
      <p>{quiz?.descriptiom}</p>
      <p>{quiz?.questionNumber}</p>
      <button onClick={handleNavigate}>Start Quiz</button> //TODO: remove and
      add button as component
    </div>
  );
}
