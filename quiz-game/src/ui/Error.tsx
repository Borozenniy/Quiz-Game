import { useNavigate } from 'react-router-dom';

export function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
