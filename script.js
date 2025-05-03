let number= prompt("number", 0);
    alert(`${number}`);
     if (number > 0) {
    alert(-1);
 }
 else if (number < 0) {
     alert(-1);
 } else {
     alert(0);
 }

// prime number
function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  function printStaircase(levels) {
    for (let i = 1; i <= levels; i++) {
      console.log('#'.repeat(i));
    }
  }
  
//   assignment 3
  const userInput = prompt("Enter the number of staircase levels:");
  const levels = parseInt(userInput);
  
  if (!isNaN(levels) && levels > 0) {
    printStaircase(levels);
  } else {
    console.log("Please enter a valid positive number.");
  }
  
// assignment 4
  const userInput1 = prompt("Enter a number:");
  const number1 = parseInt(userInput);
  
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
    } else {
      console.log(`${number} is odd.`);
    }
  } else {
    console.log("Please enter a valid number.");
  }
//   assignment 5
  const userInput2 = prompt("Enter a number:");
  const n = parseInt(userInput);
  
  if (!isNaN(n) && n >= 0) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    console.log(`The sum of numbers from 0 to ${n} is: ${sum}`);
  } else {
    console.log("Please enter a valid non-negative number.");
  }
  
// assingment 6
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  


  
