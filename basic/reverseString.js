// A function that reverses a string

const reverseString = (strings) => {
  console.log(strings.split("").reverse().join(""));
};

reverseString("Bananas");

const customReverseString = (strings) => {
  let reveredString = "";
  for (let str of strings) {
    reveredString = str + reveredString;
  }
  console.log(reveredString);
};

customReverseString("Plantain");


// A function that checks if a reversed string is the same as the original string "PALINDROME"
// For Palindrome just compare the reversed string to the initial string

const myPalindrome = (strings) => {
  let reversedString = strings.split("").reverse().join("");
  console.log(strings.toLowerCase() === reversedString.toLowerCase());
};

myPalindrome("Bab");

const myCustomPalindrome = (strings) => {
  let reveredString = "";
  for (let str of strings) {
    reveredString = str + reveredString;
  }
  console.log(strings.toLowerCase() === reveredString.toLowerCase());
};

myCustomPalindrome("Plantain");


// A function that reverse a number

const reverseNumber = (integerNumber) => {
  return integerNumber < 0
    ?
    -1 *  parseInt(integerNumber.toString().split("").reverse().join(""))
      
    : 
        parseInt(integerNumber.toString().split("").reverse().join(""))
      ;
};
console.log({
    testCase1: reverseNumber(65),
    testCase2: reverseNumber(700),
    testCase3: reverseNumber(-19),
    testCase4: reverseNumber(-954),
});