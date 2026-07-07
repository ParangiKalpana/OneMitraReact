import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917383840814"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with OneMitra on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <ChatBubbleLeftRightIcon className="h-7 w-7" />
    </a>
  );
}

export default WhatsAppButton;