import React from "react";
import logo from "../assets/investment-calculator-logo.png";

function TitleCard() {
  return (
    <div className=" flex justify-center items-center flex-col ">
      <div className=" flex justify-center items-center flex-col mt-10 mb-10">
        <img src={logo} className="w-20 h-20 " />
        <p className="pt-4 font-bold text-[30px] text-[#fff]">
          Investment Calculator
        </p>
      </div>
    </div>
  );
}

export default TitleCard;
