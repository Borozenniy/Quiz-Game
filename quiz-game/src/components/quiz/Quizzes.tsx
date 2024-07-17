import { QuizItem } from './QuizItem';

export function Quizzes() {
  const quizzes = [
    {
      id: 1,
      title: 'Quiz 1',
      name: 'React',
      description: 'Learn React',
      questionNumber: 10,
    },
    {
      id: 2,
      title: 'Quiz 1',
      name: 'React',
      description: 'Learn React',
      questionNumber: 10,
    },
    {
      id: 3,
      title: 'Quiz 1',
      name: 'React',
      description: 'Learn React',
      questionNumber: 10,
    },
  ];
  return (
    <div>
      <h1>Quizzes</h1>
      {quizzes.map((quiz) => (
        <QuizItem key={quiz.id} quiz={quiz} /> // quiz={quiz}
      ))}
    </div>
  );
}
