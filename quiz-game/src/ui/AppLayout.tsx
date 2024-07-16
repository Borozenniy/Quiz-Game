import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <div>
      <h1>AppLayout</h1>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
