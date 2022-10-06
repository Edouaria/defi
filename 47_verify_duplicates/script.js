let list_num = []
let verify_list_num = []

const random_num = () => {
    return parseInt(Math.random() * 500)
}

const gen_list_num = () => {
    for (let i = 0; i < 100; i++) {
        list_num.push(random_num())
    }
}

const gen_verify_list_num = () => {
    for (const el of list_num) {
        if (!verify_list_num.includes(el)) {
            verify_list_num.push(el)
        }
    }
}

const show_result = () => {
    gen_list_num()
    gen_verify_list_num()
    console.log('list de départ:', list_num)
    console.log('list sans doublons:', verify_list_num)
    if (list_num.length != verify_list_num.length) {
        console.log(`Il y a ${list_num.length - verify_list_num.length} doublons dans la liste de départ.`)
    } else {
        console.log('Il n\'y a pas de doublons dans la liste de départ.')
    }
    list_num = []
    verify_list_num = []
}

show_result()

// SOLUTION PAR XAVIER ////////////////////////////////////////////////////////////////////////////////////////

//Random numbers
const randomNumbersList = (minN, maxN, minVal, maxVal) => {
    let numbersList = [];
  
    //First we round min and max boundaries, so if user enter a float number instead of integer it will be converted
    minN = Math.ceil(minN) + 1; //we want to add 1 to minN because we want to exclude it from possibles result, and the random Math property include 0 and exclude 1, so for example if user enter 2 for minN we need to set it to 3 as it will be included
    maxN = Math.floor(maxN);
    minVal = Math.ceil(minVal);
    maxVal = Math.floor(maxVal) + 1; //Again max value entered by user should be increased by 1 because this random method will exclude maxVal otherwise, and this time we want maxVal to be included
  
    //First we need to get a random number for n, in order to set randomly how many numbers will be in the array
      let n = Math.floor(Math.random() * (maxN - minN) + minN);
  
    for ( i = 1; i <= n ; i++){
      //then we get a random number between minVal and maxVal
      let rand = Math.floor(Math.random() * (maxVal - minVal) + minVal);
      numbersList.push(rand);
    }
    return numbersList;
  
}
//Checking duplicate with verification array:
const checkDuplicateWithVerifArray = (arrayToTest) => {
  let verificationArray = [];
  
  arrayToTest.forEach( (element) => {
    
      if(!verificationArray.includes(element)){
        verificationArray.push(element);
      };
    
  } );
  
  //Then we check if there is difference between two arrays:
  if(verificationArray.length != arrayToTest.length){
    return `Some duplicate numbers have been found in [${arrayToTest}], the new array without duplicate numbers is [${verificationArray}]`;
  }

  return `No duplicate numbers have been found in [${arrayToTest}]`;
}

let randomListToTest = randomNumbersList(2, 80, 0, 500);
console.log(checkDuplicateWithVerifArray(randomListToTest));

//Maybe this is finally the easiest way, ordering algorithms will probably need more iterations to get same result
//After research "counting sort algorithm" could be a solution, this is not the fastest or more efficient for sorting, but for this problem it could be interesting to use it because it especially efficient for integers list with fixed boundaries, we don't even need to use it completely, we just need the tab with the amount of each element, then we only return one time each element which appearance is at least 1