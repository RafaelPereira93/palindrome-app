import React from "react";
import "./styles.css";

const UserInput = ({ userInput, setInput }) => {
  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={({ target }) => setInput(target.value)}
        autoFocus
      />
    </>
  );
};

export default UserInput;
