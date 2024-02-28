import React, { useState } from "react";
import InputField from "./InputField";

function CalculationCard() {
  return (
    <form action="">
      <div className=" bg-[#007a5aff] rounded-md p-10">
        <div className="flex flex-row">
          <InputField
            title="CURRENT SAVINGS ($)"
            type="number"
            style="pb-10 pr-[5rem]"
          />
          <InputField title="YEARLY SAVINGS ($)" type="number" />
        </div>
        <div className="flex flex-row">
          <InputField
            title="EXPECTED INTEREST (%,PER YEAR)"
            type="number"
            style="pr-[5rem]"
          />
          <InputField title="INVERSTMENT DURATION (YEARS)" type="number" />
        </div>
        <div className="flex items-center justify-center pt-10 space-x-[20px] text-[#fff]">
          <button className="">Reset</button>
          <button className="bg-[#003b30ff] p-3 rounded-md">Calculate</button>
        </div>
      </div>
    </form>
  );
}

export default CalculationCard;
