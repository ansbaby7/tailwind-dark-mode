import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme,setTheme] = useState(localStorage.theme);
  const handleClick = () => {
    setTheme(theme === 'dark'? 'light':'dark');
  };

  useEffect(()=>{
    if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
    localStorage.setItem('theme',theme)
  },[theme])

  return (
    <div className="bg-gray-100 dark:bg-slate-800 h-screen"><Navbar theme={theme} onButtonClick={handleClick} /><Hero /></div>
  );
};

export default App;
