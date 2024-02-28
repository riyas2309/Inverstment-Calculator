import React from "react";

function InputField(props) {
  const classNames = `flex flex-col ${props.style}`;
  return (
    <form action="">
      <div className={classNames}>
        <label className="text-[#fff] text-[10px] pb-1">{props.title}</label>
        <input
          type={props.type}
          className="w-[15rem] h-[3rem] rounded-md bg-transparent 
           border-custom-green border-[2.5px]"
        />
      </div>
    </form>
  );
}

export default InputField;
