let fruits = ["🍎", "🍎",  "🍊", "🍎","🍊"]
let appleSelf = document.getElementById("apple-self")
let orangeSelf = document.getElementById("orange-self")

function sortFruits() {
  for(let i=0; i< fruits.length; i++){
     if(fruits[i] === "🍎"){
       appleSelf.textContent += "🍎"
     } else if(fruits[i] === "🍊"){
       orangeSelf.textContent += "🍊"
     }
  }
}

sortFruits()

