let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i ++ ){
  console.log(i)
}

let largeCountry = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountry.pop()  
largeCountry.push("Pakistan")
largeCountry.shift()
largeCountries.unshift("China")
console.log(largeCountry)

let dayofMonth = 31
let weekday = "Friday"

if(dayofMonth === 13 && weekday === "Friday"){
  console.log("😱")
} 

let hands = ["Rock", "Paper", "Scissors"]

function getHands() {
  let randonIndex = Math.floor(Math.random() * 3)
  return hands[randonIndex]
}
console.log(getHands())