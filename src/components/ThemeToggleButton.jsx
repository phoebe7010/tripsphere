import React, { useEffect, useState } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />

      {/* 해 아이콘 */}
      <div className="btn btn-ghost btn-circle swap-on fill-current">
        <BiSun className="h-5 w-5" />
      </div>

      {/* 달 아이콘 */}
      <div className="btn btn-ghost btn-circle swap-off fill-current">
        <BiMoon className="h-5 w-5" />
      </div>
    </label>
  );
};

export default ThemeToggleButton;
