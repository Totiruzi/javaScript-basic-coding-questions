// Create a function that return true is a string character are unique or false if not

const uniqueCharacter = (str) => {
    let stringObject = {};

    for (let character of str) {
        (!stringObject[character]) > 0 ? stringObject[character] = 1 : stringObject[character]++
    };

    for (let prop in stringObject ) {
        return stringObject[prop] > 1 ? false : true
        
    }
}

console.log('from uniqueCharacter:', {unique: uniqueCharacter('chris')})

// the above logic checks all the characters to determine it uniqueness

// A more succinct way ill be to return false immediately it encounters a duplicate 

const succinctUniqueCharacter = (str) => {
    let stringObject = {};
    
    for (let character of str) {
        if (stringObject[character]) return false;

        stringObject[character] = 1;
    }

    return true;
}

console.log('From succinctUniqueCharacter: ', {unique: succinctUniqueCharacter('tito')})
console.log('From succinctUniqueCharacter: ', {unique: succinctUniqueCharacter('chris')})