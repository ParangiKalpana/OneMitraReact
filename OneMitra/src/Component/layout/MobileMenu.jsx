import { NavLink } from "react-router-dom";
import { XMarkIcon, ChatBubbleLeftRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { navLinks } from "./navLinks";

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-ink-900/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* gradient header, matches navbar accent */}
        <div className="flex items-center justify-between bg-linear-to-r from-brand-900 to-brand-700 px-6 py-5">
          <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
            OneMitra
          </span>
          <button  
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-white/90 hover:bg-white/10"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-md px-4 py-3.5 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-700 hover:bg-ink-50 hover:text-brand-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <ArrowRightIcon
                    className={`h-4 w-4 transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-ink-100 px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <a
            href="https://wa.me/917383840814"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <NavLink to="/contact" onClick={onClose} className="btn-primary w-full">
            Book a Consultation
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;