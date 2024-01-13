// A function that finds the highest occurrence character in a string 

const maximumNumberOfCharacter = (characters) => {
    let charObject = {};

    for (let character of characters ) (!charObject[character] ? charObject[character] = 1 : charObject[character]++)
    let maxiNumberOfTimes = 0;
    let maximumChar = ''

    for (let character in charObject) {
        if (charObject[character] >= maxiNumberOfTimes) {
            maxiNumberOfTimes = charObject[character];
            maximumChar = character;
        }
    }

    console.log(`${maximumChar} appeared ${maxiNumberOfTimes}`);
}

maximumNumberOfCharacter("your string")

// Using Map
function getMaxOccurringChar(str) {
    // Create a Map to store the frequency of each character
    let charFrequency = new Map();
   
    // Iterate through the string
    for (let char of str) {
      // If the character is already in the Map, increment its frequency
      if (charFrequency.has(char)) {
        charFrequency.set(char, charFrequency.get(char) + 1);
      } 
      // Otherwise, add the character to the Map with a frequency of 1
      else {
        charFrequency.set(char, 1);
      }
    }
   
    // Find the character with the maximum frequency
    let maxChar = null;
    let maxFrequency = 0;
    for (let [char, frequency] of charFrequency) {
      if (frequency > maxFrequency) {
        maxChar = char;
        maxFrequency = frequency;
      }
    }
   
    console.log(`Character: ${maxChar}, Frequency: ${maxFrequency}`);
    return maxChar;
   }