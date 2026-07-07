import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Industries from "../Pages/Industries/Industries";
import KnowledgeCenter from "../Pages/KnowledgeCenter/KnowledgeCenter";
import CaseStudies from "../Pages/CaseStudies/CaseStudies";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-3">404 error</p>
      <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">
        This page doesn't exist
      </h1>
      <p className="mt-3 max-w-md text-ink-500">
        The page you're looking for may have moved or been removed.
      </p>
      <a href="/" className="btn-primary mt-8">
        Back to home
      </a>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/knowledge-center" element={<KnowledgeCenter />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;