import { RULES } from "../utils/constants";

const RulesModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4 z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative animate-slideUp">
        <h2
          id="modal-title"
          className="text-2xl font-bold mb-4 text-center text-pink-600"
        >
          Game Rules
        </h2>
        <ul className="space-y-2 mx-auto max-w-fit text-gray-700 text-sm">
          {RULES.map((rule) => (
            <RuleItem key={rule} text={rule} />
          ))}
        </ul>

        <CloseButton onClose={onClose} />
      </div>
    </div>
  );
};

const RuleItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <span className="inline-block w-5 h-5 text-purple-500 mt-[2px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
        </svg>
      </span>
      <span className="ml-1 text-base">{text}</span>
    </li>
  );
};

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="mt-6 text-center">
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 min-w-36"
        onClick={onClose}
      >
        Got it!
      </button>
    </div>
  );
};

export default RulesModal;
