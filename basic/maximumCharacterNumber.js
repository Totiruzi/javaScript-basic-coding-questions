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