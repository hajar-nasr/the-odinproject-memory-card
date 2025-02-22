import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import RulesModal from "./components/RulesModal";

function App() {
  const [rulesOpen, setRulesOpen] = useState(false);
  const handleRulesClick = () => setRulesOpen(true);

  return (
    <div className="relative flex-centerr min-h-screen">
      <Header onClick={handleRulesClick} />

      <Board />

      {rulesOpen && (
        <RulesModal
          onClose={() => {
            setRulesOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
