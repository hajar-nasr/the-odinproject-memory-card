const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-2">
        <span className="text-white text-2xl font-semibold">
          🧠 Memory Game
        </span>
      </div>
      <button
        onClick={onClick}
        className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-md shadow-sm hover:bg-gray-100"
      >
        Game Rules
      </button>
    </nav>
  );
};

export default Header;
