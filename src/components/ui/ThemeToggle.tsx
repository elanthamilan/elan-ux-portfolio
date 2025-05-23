import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button.tsx';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  // Don't render anything until theme is initialized
  if (theme === null) return null;

  return (
    <Button
      onClick={e => { handleRipple(e); toggleTheme(); }}
      className="m3-btn relative overflow-hidden bg-primary text-on-primary hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors shadow-elevation-2 text-base font-medium py-3 px-6 rounded-full flex items-center gap-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 9999px;
          transform: scale(0);
          animation: ripple 500ms linear;
          background: rgba(25, 118, 210, 0.18);
          pointer-events: none;
          z-index: 10;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
      {theme === 'light' ? (
        <span className="material-symbols-outlined text-on-primary text-xl">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined text-on-primary text-xl">light_mode</span>
      )}
      <span className="relative z-10">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </Button>
  );
};

export default ThemeToggle;
