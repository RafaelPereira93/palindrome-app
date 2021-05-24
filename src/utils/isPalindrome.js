const isPalindrome = (textUser) => {
  const reversedText = textUser.toLowerCase().split("").reverse().join("");

  return textUser.toLowerCase() === reversedText
    ? "É um palíndromo"
    : "Não é um palindromo";
};

export default isPalindrome;
