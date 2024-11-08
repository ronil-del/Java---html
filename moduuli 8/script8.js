const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));
const leapYears = [];

for (let year = startYear; year <= endYear; year++) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    leapYears.push(year);
  }
}

const list = document.getElementById("leapYears");
leapYears.forEach(year => {
  const listItem = document.createElement("li");
  listItem.textContent = year;
  list.appendChild(listItem);
});
