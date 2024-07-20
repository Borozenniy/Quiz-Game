import { NavLink } from 'react-router-dom';

export const Header = () =>  {
  return (
    <header>
      <h1>Header</h1>
      <nav className=''>
        <NavLink to='/create_quiz'>Create Quiz</NavLink>
        <NavLink to='/quizzes'>Quizzes</NavLink>
      </nav>
    </header>
  );
};