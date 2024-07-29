import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QuizContextProvider } from './components/context/quiz-provider';
import { AppLayout } from './ui/AppLayout';
import { Home } from './ui/Home';
import { Error } from './ui/Error';
import { Quizzes } from './components/quiz/Quizzes';
import { QuizItem } from './components/quiz/QuizItem';
import { CreateQuiz } from './components/quiz/CreateQuiz';
import { Quiz } from './components/quiz/Quiz';
import './App.css';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/create_quiz',
        element: <CreateQuiz />,
      },
      {
        path: '/quizzes',
        element: <Quizzes />,
        children: [],
      },
      {
        path: '/quiz:id',
        element: <Quiz />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QuizContextProvider>
        <RouterProvider router={router}></RouterProvider>;
      </QuizContextProvider>
    </>
  );
}

export default App;
