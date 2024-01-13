// Check if two strings are permeable

const createObj = (str) => {
    let obj = {};

    for (let character of str) {
        (!obj[character]) ? obj[character] = 1 : obj[character]++;
    }
    return obj;
}

const ofTheSame = (str1, str2) => {
    if (str1 === str2 ) return true;

    else {
        if (str1.length !== str2.length)  return false;
         else {
            let objStr1 = createObj(str1);
            let objStr2 = createObj(str2);

            for (let i in objStr1) {
                if (objStr1[i] !== objStr2[i]) {
                    return false;
                }
            }
        }
    }
    return true
}


// A simpler way to check if two strings are permutations of each other
const succinctOfTheSame = (str1, str2) => {
    if (str1.length !== str2.length) return false;

   let map1 = Array.from(str1).reduce((acc, char) => {
       acc[char] = (acc[char] || 0) + 1;
       return acc;
   }, {});

   let map2 = Array.from(str2).reduce((acc, char) => {
       acc[char] = (acc[char] || 0) + 1;
       return acc;
   }, {});

   return JSON.stringify(map1) === JSON.stringify(map2);
}

let A = "chris";
let B = "Tito";
let C = "Toti";

console.log({
    isPermutationA  : ofTheSame(A, A),
    isPermutationB : ofTheSame(A, B),
    isPermutationC : ofTheSame(C, B),
});

console.log({
    succinctOfTheSameA  : ofTheSame(A, A),
    succinctOfTheSameB : ofTheSame(A, B),
    succinctOfTheSameC : ofTheSame(C, B),
});