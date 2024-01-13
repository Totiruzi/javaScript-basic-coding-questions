// print out fizz for any number dividable by 3, buzz for dividable by 5 and fizzbuzz for dividable by both 3 & 5

const fizzBuzz = (testNumber) => {
    for (let i = 1; i <= testNumber; i++) {
        if (i % 3 === 0) console.log(i, 'FIZZ');
        if (i % 5 === 0) console.log(i, 'BUZZ');
        if (i % 3 == 0 && i % 5 === 0) console.log(i, 'FIZZBUZZ');
    }
}

fizzBuzz(16)