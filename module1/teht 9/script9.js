const number = Number(prompt("Anna luku:"));

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const result = isPrime(number) ? "on alkuluku" : "ei ole alkuluku";
document.body.innerHTML = `${number} ${result}.`;
