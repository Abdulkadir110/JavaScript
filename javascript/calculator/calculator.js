let num1 = 100
let num2 = 50
sum = num1 + num2
subtraction = num1 - num2
division = num1 / num2
multiplication = num1 * num2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
let subtractEl = document.getElementById("subtract-el")
let divideEl = document.getElementById("divide-el")
let multiplyEl = document.getElementById("multiply-el")

function add(){
  sumEl.textContent ="sum: " + sum
}

function subtract(){
  sumEl.textContent ="subtraction: " + subtraction
}

function divide(){
  sumEl.textContent ="division: " + division
}

function multiply(){
  sumEl.textContent ="multiplication: " + multiplication
}