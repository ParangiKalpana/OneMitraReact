import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Navbar from "./Component/layout/Navbar";
import Footer from "./Component/layout/Footer";
import ScrollToTop from "./Component/layout/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />

      {/* Floating WhatsApp button - inlined here, no separate component file */}
      <a
        href="https://wa.me/917383840814"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with OneMitra on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-105 sm:bottom-8 sm:right-8"
      >
        <ChatBubbleLeftRightIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

export default App;