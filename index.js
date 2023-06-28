function reverse(word){
  const wordArray =word.split("");
  const reversedWordArray= wordArray.reverse();
  const reversedWord =reversedWordArray.join("");
  return reversedWord; 
}
function isPalindrome(word) {
  // 
  const reversedWord =reverse(word);

  if (word===reversedWord){
    return true;
  }else {
     return false;
  }
}

/* 
  if the word is the same as word in reverse return true 
  reverse input string

  if the inputis the same as the reversed input 
  return true
  else 
  return false
*/

/* 
if you input a word that can be read the same backward and forward 
my code should return a statement as true but if it cannot be read
backward and give the same word it should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
