let n;
do {
  n = prompt("Nhập vào số số nguyên tố muốn in ra:");
} while (n <= 0);

let N = 2;
for (let i = 0; i < n; i++) {
  while (!isPrime(N)) {
    N++;
  }
  document.write(N + "<br>");
  N++;
}

function isPrime(num) {
  if (num == 2 || num == 3 || num == 5 || num == 7 || num == 11) return true;
  if (num == 4 || num == 6 || num == 8 || num == 9) return false;
  if (num % 2 == 0) return false;

  // With odd number greater than 9:
  max_divisor = Math.floor(Math.sqrt(num)) + 1;
  for (let j = 3; j < max_divisor; j += 2) {
    if (num % j == 0) return false;
  }
  return true;
}
