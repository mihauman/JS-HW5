//#1
const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
function getRandomArray(length, min, max){
  for(let i = 0; i < length; i++){
    arr.push(Math.floor(Math.random() * (max - min) ) + min);
  }
  return arr;                   
};
console.log(getRandomArray(15, 1, 100)); 
//#2
const count = (arr) => (arr.reduce(reducer, {}));
const reducer = (obj, value) => {
  obj[value] = obj[value] ? obj[value] + 1 : 1;
  return obj;
};
const findMaxes = (counting) =>
        (Object.keys(counting)
         .reduce((maxes, key) => {
                   if (maxes.max == counting[key]) return {max: maxes.max, values: maxes.values.concat(Number(key))};
                   if (maxes.max >  counting[key]) return maxes;
                   if (maxes.max <  counting[key]) return {max: counting[key], values: [key]};
                   return maxes;
                 },
                 {max: -1, values: []}));

const getValues = (length, maxes) => (maxes.values.length == length ? [] : maxes.values);
const mode = (arr) => getValues(arr.length, findMaxes(count(arr)));
console.log(mode(arr));
//#3
function getAverage(arr){
let sum = 0; for(let i = 0; i < arr.length; i++){ sum += arr[i]; } console.log(sum/arr.length); } getAverage(arr);
//#4
function getMedian(arr){
 let half = Math.floor(arr.length / 2);
  arr.sort(function(a, b) { return a - b;});

  if (arr.length % 2) {
    return arr[half];
  } else {
    return (arr[half] + arr[half] + 1) / 2.0;
  }
}
console.log(getMedian(arr));
//#5
function filterEvenNumbers (arr){
  const integers = arr.filter(number => {
    return number % 2 == 0;
  });
  return integers;
};
console.log(filterEvenNumbers(arr));
//#6
function countPositiveNumbers(arr){
  const negativeNumbers = arr.filter(number => {
return number > 0; 
  });
  return negativeNumbers.length;
}
console.log(countPositiveNumbers(arr));
//#7
function getDividedByFive(arr){
  const dividedByFive = arr.filter(number => {
       return number % 5 === 0;
  })
   return dividedByFive;
  }
  console.log(getDividedByFive(arr));
  //#8
let string = "Are you fucking kidding?";
function replaceBadWords(string){
  const badWords = ['fuck', 'shit'];
  const customRegExp = new RegExp(badWords.join('|'), 'gi');
  return string.split(customRegExp).join('****');
}
  console.log(replaceBadWords(string));
//#9
function divideByThree(str1){
  if(str1.length >= 3){
    let array = [];
    for(let i = 0; i < str1.length; i+=3){
      array.push(str1.substring(i, i+3));
    }
    return array;
  }else{
    throw new Error('This string is to short');
  }
 
};
console.log(divideByThree("Commander"));
//#10
function generateCombinations(str) {
      let results = [];

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