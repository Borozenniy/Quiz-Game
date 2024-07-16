import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './ui/AppLayout';
import { Home } from './ui/Home';
import { Error } from './ui/Error';
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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <h1>Welcome to Quiz Game</h1>
      </div>
    </RouterProvider>
  );
}

export default App;
