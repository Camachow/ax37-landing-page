import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const ls = localStorage.getItem("theme");
    if (ls) return ls;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 border rounded-md"
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
    </button>
  );
}
