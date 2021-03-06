const getTime = () =>{

    const date = new Date();
  
  
  
    const year = date.getFullYear();
  
    const month = date.getMonth();
  
    const day = date.getDay();
  
   
  
    const h = date.getHours();
  
    const m = date.getMinutes();
  
    const s = date.getSeconds();
  
  
  
    const time = year + "-" + month+ "-" + day+ " " + h + ":" + m + ":" + s + " " ;
  
   
  
    document.getElementById("MyClockDisplay").innerText = time;
  
    document.getElementById("MyClockDisplay").textContent = time;
  
   
  
    setTimeout(getTime, 1000);
  
  
  
  }
  
  getTime();

let data = [10, 11, 12, 13];

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(1, 9));


function maxOfThree(num1, num2, num3) {
    let test = num1;
    if (num1 < num2 && num3 < num2)
        test = num2;
    else if (test < num3)
        test = num3;
    return test;
}
console.log(maxOfThree(2, 6, 4));

function isVowel(letter){
    viowel = "aeiou";
    for(i of viowel){
        if ( i == letter) return true;
    }
    return false;
}
console.log(isVowel('b'));

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(data));


function multiplies(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
console.log(multiplies(data));

let dataString ="abeoc";
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}
console.log(reverse(dataString));

let dataWords =["amine","shey","anthonio"]
function findLongestWord(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
console.log(findLongestWord(dataWords))

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
console.log(filterLongWords(dataWords,7));

function computeSumOfSquares(numbers, ) {
    return numbers.reduce((x, y) => x + Math.pow(y, 2));
}
console.log(computeSumOfSquares(data));

function printOddNumbersOnly(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
console.log(printOddNumbersOnly(data));

function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .reduce((x, y) => x + Math.pow(y, 2));
}
console.log(computeSumOfSquaresOfEvensOnly(data))

function sumWithReduce(numbers) {
    return numbers.reduce((x, y) => x + y);
}
console.log(sumWithReduce(data))

function multipliesWithReduce(numbers) {
    return numbers.reduce((x, y) => x * y);
}
console.log(multipliesWithReduce(data));

function findSecondBiggest(numbers) {
    let first = second = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] !== first && numbers[i] > second) {
            second = numbers[i];
        }
    }

    return second;
}
console.log(findSecondBiggest(data));

function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp, fibo = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fibo.push(y);
        count--;
    }
    console.log(fibo)
}
printFibo(10,0,1);

function test() {
    printResults('1. max(1,3)', 3, max(1, 3))
    printResults('2. maxOfThree(4,38, 55)', 55, maxOfThree(4, 38, 55))
    printResults('3. isVowel("e")', 'true', isVowel('e'))
    printResults('4.1. sum([3,4,5,6,8,95,2])', 123, sum([3, 4, 5, 6, 8, 95, 2]))
    printResults('4.2. multiplies([3,4,5,6,8,95,2])', 547200, multiplies([3, 4, 5, 6, 8, 95, 2]))
    printResults('5. reverse("neit hnahk")', "khanh tien", reverse("neit hnahk"))
    printResults('6. findLongestWord(["Khanh", "Tien Nguyen", "John Martin", "Tien Khanh Nguyen"])', 17, findLongestWord(["Khanh", "Tien Nguyen", "John Martin", "Tien Khanh Nguyen"]))
    printResults('7. filterLongWords(["Khanh", "Tien", "Nguyen", "John", "Thomas"], 4)', ["Khanh", "Nguyen", "Thomas"], filterLongWords(["Khanh", "Tien", "Nguyen", "John", "Thomas"], 4))
    printResults('8. computeSumOfSquares([4,5,6])', 65, computeSumOfSquares([4, 5, 6]))
    printResults('9. printOddNumbersOnly([12,33,24,41])', [33, 41], printOddNumbersOnly([12, 33, 24, 41]))
    printResults('10. computeSumOfSquaresOfEvensOnly([3,4,6,7,8,9])', 104, computeSumOfSquaresOfEvensOnly([3, 4, 6, 7, 8, 9]))
    printResults('11.1. sumWithReduce([3, 4, 5, 6, 8, 95, 2])', 123, sumWithReduce([3, 4, 5, 6, 8, 95, 2]))
    printResults('11.2. multipliesWithReduce([3, 4, 5, 6, 8, 95, 2])', 547200, multipliesWithReduce([3, 4, 5, 6, 8, 95, 2]))
    printResults('12. findSecondBiggest([19,9,11,0,12])', 12, findSecondBiggest([19, 9, 11, 0, 12]))
    printResults('13. printFibo(10,0,1)', [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], ''); printFibo(10, 0, 1);
}

function printResults(no, expected, results) {
    console.log('############### ' + no)
    console.log('Expected value: ' + expected)
    console.log('Result: ' + results)
}