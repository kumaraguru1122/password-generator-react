import React from "react";

function PasswordDisplay({ password }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    document.getElementById("generate-button").textContent = "copied";
    setTimeout(() => {
      document.getElementById("generate-button").textContent = "copy";
    }, 1500);
  };

  return (
    <div>
      <div className=" flex justify-between  border-2 ">
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent px-2"
          placeholder={password}
        />
        <button
          onClick={copyToClipboard}
          id="generate-button"
          className="bg-white text-gray-800 px-3 py-2 hover:bg-gray-200"
        >
          copy
        </button>
      </div>
    </div>
  );
}

export default PasswordDisplay;
