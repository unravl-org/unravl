import './App.css';
import AppRouter from './routes/AppRouter';
import { useEffect, useState } from 'react';

function App() {
  const [setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen min-w-screen
        bg-cover bg-center bg-secondary dark:bg-secondary-dark
        animate-bg-move transition-all duration-300
        dark:text-primary-dark dark:border-accent-dark`}
    >
      <AppRouter />
    </div>
  );
}
export default App;
