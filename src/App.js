import React, { useState } from "react";
import Form from "./components/Form";

import { Magic } from "magic-sdk";

const App = () => {
  const [keystroke, setKeystroke] = useState({ email: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setKeystroke((prevKeystroke) => {
      return {
        ...prevKeystroke,
        [name]: value,
      };
    });
  }

  //When enter button is hit
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  const login = async () => {
    console.log(keystroke.email);

    const magic = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY);
    const token = await magic.auth.loginWithMagicLink({
      email: keystroke.email,
    });
    console.log(token);
  };

  return (
    <main className="main">
      <h1 className="main--title">Welcome back</h1>
      <p className="main--text">Let's make some magic happen</p>
      <Form
        value={keystroke.text}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleClick={login}
      />
    </main>
  );
};

export default App;
