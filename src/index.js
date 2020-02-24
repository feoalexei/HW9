
// ----------------- FizzBuzz Function ----------------------------
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (!(i % 15)) console.log('fizzbuzz');  // eslint-disable-line
        else if (!(i % 3)) console.log('fizz');  // eslint-disable-line
        else if (!(i % 5)) console.log('buzz');  // eslint-disable-line
        else console.log(i);  // eslint-disable-line
    }
}

fizzBuzz(15);  // eslint-disable-line

// ----------------- Counting letters Function ---------------------
function countLetters(str) {
    const arrOfLetters = ['a', 'o', 'u', 'e', 'i', 'y'];
    const newStr = str.toLowerCase();
    let counter = 0;
    for (let i = 0; i < newStr.length; i++) {
        for (let j = 0; j < arrOfLetters.length; j++) {
            if (newStr[i].includes(arrOfLetters[j]))
                counter++;
        }
    }
    return counter;
}

console.log(countLetters('Load Up On guns, Bring Your Friends'));  // eslint-disable-line

// ----------------- Fibonacci Function --------------------------------
function getFibonachi(n) {
    let firstNum = 0;
    let secondNum = 1;
    const numArray = [firstNum, secondNum];
    for (let i = 2; i < n; i++) {
        const thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;
        numArray.push(secondNum);
    }
    return numArray;
}

console.log(getFibonachi(15));  // eslint-disable-line