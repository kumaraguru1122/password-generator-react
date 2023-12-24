import React, { useState, useEffect } from "react";
import zxcvbn from "zxcvbn";

function PasswordStrength({ password }) {
  const [strength, setStrength] = useState(zxcvbn(password).score);

  useEffect(() => {
    setStrength(zxcvbn(password).score);
  }, [password]);

  const strengthLabel = ["Very weak", "Weak", "Okay", "Strong", "Very strong"];
  const strengthColor = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-blue-400",
    "text-green-500",
  ];

  return (
    <div className="flex justify-between m-2">
      <p>Password strength:</p>
      <p className={strengthColor[strength]}>{strengthLabel[strength]}</p>
    </div>
  );
}

export default PasswordStrength;
