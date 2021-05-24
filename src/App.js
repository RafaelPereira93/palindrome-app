import React from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Button from "./components/Button";

function App() {
  const [userInputValue, setUserInputValue] = React.useState("");
  const [result, setResult] = React.useState("");

  React.useEffect(() => {
    if (userInputValue === "") {
      setResult("");
    }
  }, [userInputValue]);

  return (
    <>
      <h2>Verificar palíndromo</h2>

      <div className="what-is-palindrome">
        <h2>O que é um palíndromo ? </h2>
        <p>
          Palíndromo é uma palavra, frase ou número que permanece igual quando
          lida de trás para diante. Por extensão, palíndromo é qualquer série de
          elementos com simetria linear, ou seja, que apresenta a mesma
          sequência de unidades nos dois sentidos.
        </p>
      </div>

      <div className="wrapper">
        <UserInput setInput={setUserInputValue} userInput={userInputValue} />
        <Button setResult={setResult} userInput={userInputValue} />
      </div>

      <p
        className={
          result === "É um palíndromo" ? "is-palindrome" : "is-not-palindrome"
        }
      >
        {result}
      </p>
    </>
  );
}

export default App;
