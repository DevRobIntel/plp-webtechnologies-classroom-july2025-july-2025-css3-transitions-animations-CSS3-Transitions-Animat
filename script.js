// Part 2: JavaScript Functions

// Function with parameters and return value
function multiply(a, b) {
  return a * b; // returns product
}

// Demonstrating scope
let globalMessage = "This is from the global scope!";

function showCalculation() {
  let localMessage = "Local scope only!";
  let result = multiply(5, 7); // using parameters + return
  document.getElementById("calcResult").innerText =
    `${globalMessage}\n5 × 7 = ${result}\n(Local: ${localMessage})`;
}

// Part 3: Combining CSS + JS

// Function to toggle box animation
function animateBox() {
  const box = document.getElementById("jsBox");
  box.classList.toggle("active");
}

// Function to toggle modal
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.style.display =
    modal.style.display === "block" ? "none" : "block";
}
