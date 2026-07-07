import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { navLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="w-full h-1 bg-linear-to-r from-blue-600 via-blue-500 to-green-500" />

      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-10">
        {/* Logo - always visible */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold text-blue-900">OneMitra</span>
        </NavLink>

        {/* Desktop nav links - hidden below lg */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs - hidden below lg */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/917383840814"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
          >
            <ChatBubbleLeftRightIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <NavLink
            to="/contact"
            className="rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Book Consultation
          </NavLink>
        </div>

        {/* Hamburger button - ALWAYS visible below lg (this is the part that was missing) */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-md text-blue-900 hover:bg-blue-50"
        >
          <Bars3Icon className="h-7 w-7" />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

export default Navbar;