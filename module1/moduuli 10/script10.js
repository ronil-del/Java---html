const numDice = Number(prompt("Anna heittojen määrä:"));
const targetSum = Number(prompt("Anna haluamasi silmälukujen summa:"));

function rollDice(numDice) {
  let sum = 0;
  for (let i = 0; i < numDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  return sum;
}

let successCount = 0;
const totalRolls = 10000;  // Simuloidaan 10000 heittoa

for (let i = 0; i < totalRolls; i++) {
  if (rollDice(numDice) === targetSum) {
    successCount++;
  }
}

const probability = ((successCount / totalRolls) * 100).toFixed(2);
document.body.innerHTML = `Todennäköisyys saada summa ${targetSum} ${numDice} nopalla on ${probability}%.`;
