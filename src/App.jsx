import React from "react";
import TitleCard from "./Compnents/TitleCard";
import CalculationCard from "./Compnents/CalculationCard";
function App() {
  return (
    <div className="bg-[#141a17ff] w-screen h-screen flex flex-col items-center">
      <TitleCard />
      <CalculationCard />
    </div>
  );
}

export default App;
