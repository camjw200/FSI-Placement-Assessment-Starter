// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Cameron Williams"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

let sum = 0; // total cookie count

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");

//other buttons
const gbMinusBtn = document.querySelector("#minus-gb");
const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");
const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");

//quantities
let gbQuantity = document.querySelector("#qty-gb");
let ccQuantity = document.querySelector("#qty-cc");
let sugarQuantity = document.querySelector("#qty-sugar");
//total
let totalCookies = document.querySelector("#qty-total");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
  gb++;
  gbQuantity.textContent = gb;
  sum++;
  totalCookies.textContent = sum;
});

// TODO: Hook up event listeners for the rest of the buttons
gbMinusBtn.addEventListener("click", function () {
  if (gb > 0) {
    gb--;
    sum--;
  }
  gbQuantity.textContent = gb;
  totalCookies.textContent = sum;
});

//chocochip
ccPlusBtn.addEventListener("click", function () {
  cc++;
  sum++;
  ccQuantity.textContent = cc;
  totalCookies.textContent = sum;
});
ccMinusBtn.addEventListener("click", function () {
  if (cc > 0) {
    cc--;
    sum--;
  }
  ccQuantity.textContent = cc;
  totalCookies.textContent = sum;
});

//sugar
sugarPlusBtn.addEventListener("click", function () {
  sugar++;
  sum++;
  sugarQuantity.textContent = sugar;
  totalCookies.textContent = sum;
});
sugarMinusBtn.addEventListener("click", function () {
  if (sugar > 0) {
    sugar--;
    sum--;
  }
  sugarQuantity.textContent = sugar;
  totalCookies.textContent = sum;
});
