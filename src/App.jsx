import React from "react";
import TitleCard from "./Compnents/TitleCard";
import CalculationCard from "./Compnents/CalculationCard";
import ResultCard from "./Compnents/ResultCard";
function App() {
  return (
    <>
      <div className=" bg-[#141a17ff] flex flex-col items-center ">
        <TitleCard />
        <CalculationCard />
        <div className="pt-10 text-[#fff] pb-10">
          <ResultCard />
        </div>
      </div>
    </>
  );
}
export default App;
