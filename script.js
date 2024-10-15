const myText = document.getElementById("myText");
const myPassLength = document.getElementById("myPassLength");
const lengthValue = document.getElementById("lengthValue");
const numberChars = document.getElementById("toggleNumbers");
const lowercaseChars = document.getElementById("toggleLower");
const uppercaseChars = document.getElementById("toggleUpper");
const symbolChars = document.getElementById("toggleSymbols");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=[]{},.;:\"'?<>/\\";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

const generatePassword = () => {
  let characterPool = "";

  if (numberChars.checked) characterPool += numbers;
  if (lowercaseChars.checked) characterPool += lowercaseLetters;
  if (uppercaseChars.checked) characterPool += uppercaseLetters;
  if (symbolChars.checked) characterPool += symbols;

  if (characterPool === "") {
    alert("Please select at least one character type.");
    return;
  }
  let length = parseInt(myPassLength.value);
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  myText.value = password;
};

const copyPassword = () => {
  myText.select();
  document.execCommand("copy");
  console.log("Password copied to clipboard!");
};

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

myPassLength.addEventListener("input", () => {
  lengthValue.textContent = myPassLength.value;
});

generatePassword();
