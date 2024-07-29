import { QuizItem } from './QuizItem';
import { useQuiz } from '../../services/hooks/use-quiz';

export function Quizzes() {
  const { quizzes } = useQuiz();

  return (
    <div>
      <h1>Quizzes</h1>
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <QuizItem key={quiz.id} quiz={quiz} /> // quiz={quiz}
        ))
      ) : (
        <div>
          <h1>You don't have any quizzes yet</h1>
        </div>
      )}
    </div>
  );
}
