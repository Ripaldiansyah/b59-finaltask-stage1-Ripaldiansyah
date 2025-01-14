function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function drawSikuSiku(num) {
  let tempPrime = 2;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      while (!isPrime(tempPrime)) {
        tempPrime++;
      }

      process.stdout.write(tempPrime + " ");
      tempPrime++;
    }
    console.log(" ");
  }
}

drawSikuSiku(8);
