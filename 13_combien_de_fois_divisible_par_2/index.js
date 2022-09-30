let count = 0
function divisible(num) {
    count = 0
    while (num % 2 == 0) {
        count += 1
        num = num / 2
    }
    console.log(`ce nombre est divisible ${count} fois par 2`);
}

// MÉTHODE PAR XAVIER LAMY //////////////////////////////////////////////////////////////////////

//We need to see how many time a number can be divided by 2
//Maybe a good way would be recursive function ? we try to divide a first time by 2, if it can be then we pass our result a second time into our function, else if it can't we exit, we will have to keep track of how many time we pass into our function

console.log("---------Not refactored:---------");
function canBeDividedBy2( n , i = 0 ) {
    let trackIteration = i;
    if( n % 2 == 0){
      //If it can be divided we need to send result of this division back with current number of iteration:
      n = n / 2;
      trackIteration += 1;
      return canBeDividedBy2(n, trackIteration);
    }
    //When n will not be dividable by 2 anymore then we check if it have been divided by 2 at leat one time, if yes we return how many time     it can be, else we declare this number is not dividable by 2
    else if (trackIteration > 0) {
      return console.log(`Ce nombre est divisible ${trackIteration} fois par 2.`); 
    }
    else {
      return console.log("Ce nombre n'est pas divisible par 2.");
    }
}

canBeDividedBy2(152);
canBeDividedBy2(153);
canBeDividedBy2(20);


console.log("---------With refactored:---------");
//Trying to refactor and improve
//We could try to keep old value of N to customize answer further
function isDividableBy2(n, i = 0, oldN = n) {
    let trackIteration = i;
    if( n % 2 == 0){
      n = n / 2;
      trackIteration += 1;
      return isDividableBy2(n, trackIteration, oldN);
    }
    //As we got an early return in our first condition we don't really need if/else there, we'll only arrive to following block of code   when first condition is not true
    let answer = (trackIteration > 0) ? `${oldN} est divisible ${trackIteration} fois par 2.` : `${oldN} n'est pas divisible par 2.`;
    return answer;
} 
console.log(isDividableBy2(152) + " Answer expected: 3");
console.log(isDividableBy2(153) + " Answer expected: Non divisible");
console.log(isDividableBy2(20) + " Answer expected: 2");