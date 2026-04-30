const palindromes = function (input) {
  let alphabetAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789".split("")

  let filteredInput = input.toLowerCase().split("").filter(letter => alphabetAndNumbers.includes(letter))
  // console.log(filteredInput)
  let reversed = input.toLowerCase().split("").filter(letter => alphabetAndNumbers.includes(letter)).reverse();
  
  return reversed.join("") == filteredInput.join("")
};

// Do not edit below this line
module.exports = palindromes;
