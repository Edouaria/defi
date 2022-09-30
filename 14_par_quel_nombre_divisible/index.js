let res = []
function divisible_par(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            res.push(i)
        }
    }
    res == [] ? "Aucun ! ce nombre est premier" : console.log(`les divisiseurs de ${num} sont ${res}`);
    res = []
}

// LES SOLUTIONS DE XAVIER ////////////////////////////////////////////////////////////////////////////

/*Brainstorming: we have to find a way to see all divisor of a number except 1 or itself, if it has only 1 or itself then we answer that it's a prime number:
  - Easiest way would be to just try to divide it by all number lower than itself and higher than 1 and see how many return an integer: problem-> this would be easy for small number but when we arrive to bigger one it would be long and not really efficient
  Let's try that first and see if we can observe a pattern 
  
Learnt properties: Array.push(), Array.includes()
*/

const isPrimeNumber = (n) => {
  
  //We create an array to store all divisors of n except 1 and itself
  let divisors = [];
  
  //As push method return length of array we can keep track of it while we add number to array, this way we don't have to make another check for arraySize at the end
  let arraySize = 0;
  
  //We start with divisor higher than 1 and lower than number (because every integer can be divided by itself and 1 so thos two cases would always return true)
  for (i = 2; i < n; i++){
    if ( n % i == 0){
      arraySize = divisors.push(i);
    }
    
  }
  //When loop is over we can answer depending on array size:
  let answer = `Proper divisors of ${n}:`;
  if(arraySize == 0){
    return console.log(`${answer} none ! It's a prime number`);
  }
  return console.log(`${answer} ${divisors} (${arraySize} proper divisors)`);
}

console.clear;
isPrimeNumber(12);
isPrimeNumber(13);
isPrimeNumber(153);
isPrimeNumber(8963);
isPrimeNumber(7590);
isPrimeNumber(45153);




//Trying to refactor (and see if there is another way ?)
const isItPrimeNumber = (n) => {
  let divisors = [];
  let arraySize = 0;
  
  for (i = 2; i < n; i++){
    
      if ( n % i == 0){
        arraySize = divisors.push(i);
      }
    
  }
  let answerBegin = `Proper divisors of ${n}: `;
  let answerEnd = (arraySize == 0) 
    ? `none ! It's a prime number`
    : `${divisors} (${arraySize} proper divisors)`;
  return console.log(answerBegin + answerEnd);
}

console.log("---------With refactored function----------");
isItPrimeNumber(12);
isItPrimeNumber(13);
isItPrimeNumber(153);
isItPrimeNumber(8963);
isItPrimeNumber(7590);
isItPrimeNumber(45153);




//Observation: maybe there is something in common with number which end with same digits for example 153 and 45153-> not at all, they don't share same divisors
/*Observation: however number in first part of array can be multiplied by their mirror in other part of array (which also explain first observation) for example for 45153: 3 * 15051 = 45153, 9 * 5017 = 45153, ... (because as we take only proper divisors, division result is an integer which is also a proper divisor), so maybe we can try to divide number of iteration by half, by using that, for example when we first check if number is dividable by 3, we keep the result, this result is also a proper divisor, the question is how we know when to stop to check in order to be sure we check every possible divisor, without having to go over already tested numbers
- For example for 7590, when we arrive at checking 69 which is the 15th proper divisor we found 110, so we know that if 70 would also be a proper divisor result should be lower than 110, if it's not the case then all numbers higher than 69 would either already been in our array or not being a proper divisor, for example let's imagine we are at 66, we found and add 115 to our list, then we continue until we arrive to the next proper divisor , which is 69, we check the result which is 110, 110 is indeed lower than 115, so it can be added to array, then we check until arriving to a number we already add to our array which in this case would be 110, when we arrive 110, we can be sure we check all numbers. While this wouldn't be really useful or timesaving for small numbers like 12, for larger one it lower number of iteration by even more than 2 (exponentially ?) for example for 7590, we stop after checking 110 (109 cause we start at 2) numbers, while with current method we check until 7590 (so 7589 iterations), with old method even if we would check every number, in fact when we arrive at 3795, we still have 3795 iterations which would be completely useless
Let's try to implement this
*/
const fasterIsPrimeNumber = (n) => {
  let divisors = [];
  let arraySize = 0;
  
  for (i = 2; i < n; i++){
      //We check if i is already in the array (as it can have been add by mirrorDivisor way), if yes we can break the for loop, because that mean we already cover all possible valid divisors
      if(divisors.includes(i)) break;
    
      if ( n % i == 0){
        arraySize = divisors.push(i);
        
        //Current i is a proper divisor, so we also add the division result in the array
        let mirrorDivisor = n / i;
        arraySize = divisors.push(mirrorDivisor);
        
      }
    
  }
  let answerBegin = `Proper divisors of ${n}: `;
  let answerEnd = (arraySize == 0)
    ? `none ! It's a prime number`
    : `${divisors} (${arraySize} proper divisors)`;
  return console.log(answerBegin + answerEnd);
}

console.log("----------With faster function---------");
fasterIsPrimeNumber(12);
fasterIsPrimeNumber(13);
fasterIsPrimeNumber(153);
fasterIsPrimeNumber(8963);
fasterIsPrimeNumber(7590);
fasterIsPrimeNumber(45153);