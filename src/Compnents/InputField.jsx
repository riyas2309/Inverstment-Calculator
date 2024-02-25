import React from "react";

function InputField(props) {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col ">
        <label className="text-[#fff] text-[15px] pb-1">{props.title}</label>
        <input
          type={props.type}
          className="w-[12rem] h-[2.5rem] rounded-md bg-transparent 
           border-custom-green border-[2.5px]"
        />
      </div>
    </div>
  );
}

export default InputField;
