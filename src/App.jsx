import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PinInput from "react-pin-input";

function App() {
  return (
    <>
      hello
      <PinInput
        length={4}
        initialValue=""
        secret
        secretDelay={100}
        onChange={(value, index) => {}}
        pattern="[0-9]*"
        type="number"
        inputMode="numberic"
        style={{ padding: "10px" }}
        inputStyle={{ borderColor: "red" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </>
  );
}

export default App;
