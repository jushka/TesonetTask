let firstNum = parseInt(prompt("Enter first number"));
let secondNum = parseInt(prompt("Enter second number"));

function isPrime(num) {
  if (num == 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

if (firstNum < 1 || secondNum < firstNum) {
  console.log("Entered numbers are invalid. Try again.");
} else {
  let numArray = [];
  for (let i = firstNum; i <= secondNum; i++) {
    numArray.push(i);
  }

  let countOfPrimes = 0;
  numArray.forEach(num => {
    if (isPrime(num)) {
      countOfPrimes++;
    }
  });

  console.log(`In range from ${firstNum} to ${secondNum} there are ${countOfPrimes} prime numbers.`);
}





