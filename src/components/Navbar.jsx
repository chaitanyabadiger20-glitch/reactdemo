import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Help", path: "/help" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#1F1105] z-50">
      
      {/* LOGO */}
      <button
        onClick={() => navigate("/")}
        className="text-[#D97706] text-xl font-bold"
      >
        MIRAGE
      </button>

      {/* LINKS */}
      <div className="flex gap-6 text-[#D4AF85]">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => navigate(link.path)}
            className={`transition-colors ${
              location.pathname === link.path
                ? "text-[#FCD34D]"
                : "hover:text-[#FCD34D]"
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

    </nav>
  );
}