// Take input from user
let times;
do {
  times = +prompt("Nhập vào số số nguyên tố muốn in ra:");
} while (times <= 0);

// Main function to print n prime numbers
let N = 2;
let count = 0;

while (count < times) {
  if (isPrime(N)) {
    document.write(N + "<br>");
    count++;
  }
  N++;
}

// Function that detects a number is prime number or not, starting from 2
function isPrime(num) {
  if (num == 2 || num == 3 || num == 5 || num == 7) return true;
  if (num == 4 || num == 6 || num == 8 || num == 9) return false;
  if (num % 2 == 0) return false;

  // With odd numbers greater than 9:
  max_divisor = Math.floor(Math.sqrt(num)) + 1;
  for (let j = 3; j < max_divisor; j += 2) {
    if (num % j == 0) return false;
  }
  return true;
}
