const year = Number(prompt("Enter a year:"));
const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
document.body.innerHTML = `${year} is ${isLeapYear ? "" : "not "}a leap year.`;
