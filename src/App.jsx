import React, { useState } from "react";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordSettings from "./components/PasswordSettings";
import PasswordStrength from "./components/PasswordStrength";

function App() {
  const [password, setPassword] = useState("hi");

  return (
    <>
      <main className="min-h-screen grid place-content-center font-mono text-gray-100 bg-slate-950">
        <div>
          <h1 className="text-3xl text-center text-gray-50 mb-4 font-bold">
            Password Generator
          </h1>
          <div className="flex flex-col w-96 bg-slate-900 min-h-96 rounded-md p-6 shadow-2xl">
            <PasswordDisplay password={password} />
            <PasswordStrength password={password} />
            <PasswordSettings handlePassword={setPassword} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
