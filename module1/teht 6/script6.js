if (confirm("Should I calculate the square root?")) {
    const number = Number(prompt("Enter a number:"));
    if (number < 0) {
      document.body.innerHTML = "The square root of a negative number is not defined.";
    } else {
      document.body.innerHTML = `The square root is ${Math.sqrt(number).toFixed(2)}`;
    }
  } else {
    document.body.innerHTML = "The square root is not calculated.";
  }
  