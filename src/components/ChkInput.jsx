import React from "react";

function ChkInput({ name, value, onChange }) {
  return (
    <div className="flex gap-3 max-w-md ">
      <div className="flex">
        <input
          type="checkbox"
          name=""
          id={name}
          className="hidden"
          onChange={onChange}
          checked={value}
        />
        <label htmlFor={name} className="flex gap-3">
          <div className=" w-6 h-6 border-2 grid place-content-center ">
            <div className={` w-3 h-3 ${value ? "bg-cyan-500" : ""}`}></div>
          </div>
          <p className="text-white">{name}</p>
        </label>
      </div>
    </div>
  );
}

export default ChkInput;
