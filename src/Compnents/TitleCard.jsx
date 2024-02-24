import React from "react";
import logo from "../assets/investment-calculator-logo.png";

function TitleCard() {
  return (
    <div className=" flex justify-center items-center w-screen h-screen flex-col">
      <img src={logo} className="w-20 h-20" />
      <p className="pt-4 font-bold text-custom-20">Investment Calculator</p>
    </div>
  );
}

export default TitleCard;
