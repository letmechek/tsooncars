import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import ScrollReveal from "scrollreveal";

export default function CollapsibleFaq({ title, content, isOpen, toggleFaq }) {
  return (
    <div className="mb-4 mx-auto max-w-4xl scroll">
      <button
        className="flex items-center justify-between w-full bg-white p-3 rounded-md shadow-2xl"
        onClick={toggleFaq}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="bg-white text-lg p-3 rounded-md shadow-2xl">
          <ul>{content}</ul>
        </div>
      )}
    </div>
  );
}