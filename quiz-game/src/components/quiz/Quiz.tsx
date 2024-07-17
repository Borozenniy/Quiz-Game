import { useParams } from 'react-router-dom';

export function Quiz() {
  const quiz = useParams();
  console.log(quiz);

  return (
    <div>
      <h1>Quiz Game</h1>
      <p>{'3'}</p>
    </div>
  );
}
