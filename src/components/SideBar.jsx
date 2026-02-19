import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "about", path: "/" },
    { name: "works", path: "/works" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">joelinton.</div>

      <div className="menu">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div
        className="dark-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "🌙 Light mode" : "☀ Dark mode"}
      </div>
    </div>
  );
}
