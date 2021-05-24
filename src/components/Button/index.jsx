import React from "react";
import "./styles.css";
import isPalindrome from "../../utils/isPalindrome";

const Button = ({ userInput, setResult }) => {
  const handleResult = () => {
    const result = isPalindrome(userInput);
    setResult(result);
  };

  return <button onClick={handleResult}>Verificar</button>;
};

export default Button;
