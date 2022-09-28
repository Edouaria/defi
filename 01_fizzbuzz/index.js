// SOLUTION 1
function FizzBuzz() {
    for (let i = 1; i < 100; i++) {
        if (i % 15 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// SOLUTION 2
const doFizzBuzz = (iterationNumber) => {
  for (i = 1; i <= iterationNumber; i++){
    let result = '';
    result = ( i % 3 == 0 ) ? 'Fizz' : ''; //If modulo of i / 3 equal 0 that means number is divisible by 3
    result += ( i % 5 == 0) ? 'Buzz' : ''; //Then we just wanna add Buzz to the string, it will be either added to an empty string, added to Fizz or nothing will be added
    result = (result.length == 0) ? i : result; //If result if currently empty that means it is not divisible by 3 nor 5
    console.log(result);
  }
}