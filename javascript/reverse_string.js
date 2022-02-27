function reverseString(str) {
  const revArray = []
  const splitString = str.split('');
  for (const letter of splitString){
    revArray.unshift(letter)
  }
  const reversedString = revArray.join('');
  return reversedString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: '?3uhHs'");
  console.log("=>", reverseString("sHhu3?"));

  console.log("");

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// PROBLEM - recieve a string, and reverse it. Anything submitted as a string will be returned backward.
  //this fuction takes in a string
  //splits the string into each character, returning an array of characters
  //removes the last letter from this array and places it at the beginning of a new array
  //joins and returns the new array
