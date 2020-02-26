//---------------
const getEntireNumbers = (numbers) => {
    return numbers.filter(element => element === Math.trunc(element));
    }
//---------------

//#1
function getRandomArray(length, min, max){
  let arrRandom =[];
  for(let i = 0; i < length; i++){
    arrRandom.push(Math.floor(Math.random() * (max - min) ) + min);
  }
  return arrRandom;                   
};
console.log(getRandomArray(15, 1, 100)); 
//#2
function getModa(...numbers){
    const moda = getEntireNumbers(numbers);
        return moda.sort((a, b) =>
        (moda.filter(v => v === a).length) - (moda.filter(v => v === b).length)).pop()
      }
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2 ));
//#3
function getAverage(...numbers){
let sum = 0;
let average = 0;
const filtered = getEntireNumbers(numbers);
 for(let i = 0; i < filtered.length; i++){
  sum += filtered[i];
}
  average = sum/filtered.length;
return average;
 } 
 console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 
//#4
function getMedian(...numbers){
const filtered = getEntireNumbers(numbers);
 const half = Math.floor(filtered.length / 2);
  filtered.sort(function(a, b) { return a - b;});

  if (filtered.length % 2) {
    return filtered[half];
  } else {
    return (filtered[half] + filtered[half] + 1) / 2.0;
  }
}
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 
//#5
function filterEvenNumbers (...numbers){
  const integers = numbers.filter(number => {
    return number % 2 == 0;
  });
  return integers;
};
console.log(filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//#6
function countPositiveNumbers(...numbers){
  const negativeNumbers = numbers.filter(number => {
return number > 0; 
  });
  return negativeNumbers.length;
} 
console.log(countPositiveNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//#7
function getDividedByFive(...numbers){
  const dividedByFive = numbers.filter(number => {
       return number % 5 === 0;
  })
   return dividedByFive;
  }
  console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
  //#8
let string = "Are you fucking kidding?";
function replaceBadWords(string){
  const badWords = ['fuck', 'shit'];
  const customRegExp = new RegExp(badWords.join('|'), 'gi');
  return string.split(customRegExp).join('****');
}
  console.log(replaceBadWords(string));
//#9
const divideByThree = (word) => {
    const temp = word.split(' ').join('').toLowerCase();
    return temp.match(/.{1,3}/g);
};
console.log(divideByThree("Commander"));
//#10
function generateCombinations(str) {
      const results = [];

      if (str.length === 1)
      {
        results.push(str);
        return results;
      }
else if (str.length > 10) {
throw new Error('This string is to long');
}
      for (let i = 0; i < str.length; i++) 
      {
        let firstChar = str[i];
        let otherChar = str.substring(0, i) + str.substring(i + 1);
        let otherPermutations = generateCombinations(otherChar);
        
        for (let j = 0; j < otherPermutations.length; j++) {
          results.push(firstChar + otherPermutations[j]);
        }
      }
      return results;   
    }
    console.log(generateCombinations("man"));