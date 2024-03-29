function convertRomanToNumber(input) {
  let result = "";
  const romanNumeralMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  for (let i = 0; i < romanNumeralMap.length; i++) {
    while (input >= romanNumeralMap[i].value) {
      result += romanNumeralMap[i].symbol;
      input -= romanNumeralMap[i].value;
    }
  }
  return result;
}

function handleClick(e) {
  let result = convertRomanToNumber(input.value);
  para.innerText = String(result);
}

const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const resultsDiv = document.getElementById("output");
const para = document.createElement("p");
resultsDiv.appendChild(para);

button.addEventListener("click", handleClick);
