import React, { useCallback, useState, useEffect } from "react";
import ChkInput from "./ChkInput";

function PasswordSettings({ handlePassword }) {
  function GeneratePassword(passwordLength, passwordSettings) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_=+-/";

    let passwordCharacters = "";
    if (passwordSettings.uppercase) passwordCharacters += uppercase;
    if (passwordSettings.lowercase) passwordCharacters += lowercase;
    if (passwordSettings.numbers) passwordCharacters += numbers;
    if (passwordSettings.symbols) passwordCharacters += symbols;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      newPassword +=
        passwordCharacters[
          Math.floor(Math.random() * passwordCharacters.length)
        ];
    }

    return newPassword;
  }
  const defaultPasswordSettings = {
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  };
  const [passwordSettings, setPasswordSettings] = useState(
    defaultPasswordSettings
  );
  const [passwordLength, setPasswordLength] = useState(8);

  const handleOnChange = (name) => (e) => {
    setPasswordSettings({
      ...passwordSettings,
      [name]: e.target.checked,
    });
  };

  const handlePasswordLength = (e) => {
    setPasswordLength(e.target.value);
  };

  let generatePassword = useCallback(() => {
    let newPassword = GeneratePassword(passwordLength, passwordSettings);
    handlePassword(newPassword);
  }, [passwordLength, passwordSettings, handlePassword]);

  useEffect(() => {
    generatePassword();
  }, [passwordSettings, generatePassword]);

  return (
    <div className="grid gap-4 m-3">
      <div className="grid gap-2">
        <div className="flex items-center">
          <p className="">8</p>
          <input
            type="range"
            name=""
            id=""
            value={passwordLength}
            min={8}
            max={20}
            step={1}
            onChange={(e) => {
              handlePasswordLength(e);
              generatePassword();
            }}
          />
          <p className="">20</p>
        </div>

        <label htmlFor="" className="text-lg">
          password length: {passwordLength}
        </label>
      </div>
      {Object.keys(passwordSettings).map((key) => (
        <ChkInput
          key={key}
          name={key}
          value={passwordSettings[key]}
          onChange={handleOnChange(key)}
        />
      ))}
      <button
        className="bg-cyan-500 p-2 m-4 text-gray-900 hover:bg-cyan-600"
        onClick={generatePassword}
      >
        Re Generate Password
      </button>
    </div>
  );
}

export default PasswordSettings;
