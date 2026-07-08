import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Web Development", path: "/services" },
      { label: "Digital Marketing", path: "/services" },
      { label: "Mobile Development", path: "/services" },
      { label: "Content Marketing", path: "/services" },
      { label: "Web Design", path: "/services" },
      { label: "SEO Services", path: "/services" },
      { label: "Analytics", path: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Industries", path: "/industries" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Knowledge Center", path: "/knowledge-center" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-brand-900">
              OneMitra
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600">
            A consulting-led knowledge platform helping businesses plan,
            execute, and measure transformation that sticks.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-ink-700">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-600" />
              +91 7383840814
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4 shrink-0 text-brand-600" />
              onemitramarketing@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-brand-600" />
              Ahmedabad, Gujarat, India
            </li>
          </ul>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold text-ink-900">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-200">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-600 sm:flex-row">
          <p>© {new Date().getFullYear()} OneMitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;