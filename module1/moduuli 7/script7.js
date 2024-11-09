const rolls = Number(prompt("Enter the number of dice rolls:"));
let sum = 0;

for (let i = 0; i < rolls; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}

document.body.innerHTML = `Sum of ${rolls} dice rolls is ${sum}.`;
