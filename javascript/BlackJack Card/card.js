let player = {
  name:"Per",
  chips: 145,
  sayHello: function(){
    console.log("Heisenn")
  }
}
player.sayHello()

let hasBlackJack = false
let isAlive = false
let message =""
let sum = 0
 console.log(sum)
let card = []
let messageEl = document.getElementById("message-el")
 console.log(messageEl)
let cardEl = document.getElementById("card-el")
 console.log(cardEl)
let sumEl = document.getElementById("sum-el")
 console.log(sumEl)




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


//cmd + d, ctrl + d

function getRandomCard(){
  let randonNumber =Math.floor( Math.random() * 13 ) + 1
  if (randonNumber > 10){
    return 10
  }
  else if(randonNumber === 1){
    return 11
  }
  else{
    return randonNumber
  }
   
}
console.log(getRandomCard())

function startGame() {
  isAlive = true
  let firstCard= getRandomCard()
  let secondCard = getRandomCard()
  card = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
function renderGame(){

    cardEl.textContent = "Cards: " 
    for (let i = 0; i < card.length; i++){
      cardEl.textContent += card[i] + " "
      sumEl.textContent = "sum: " + sum
    }
    if (sum <= 20){
      message =  "Do you want to draw a new card? 😊"

    } else if(sum ===21){
      message = "Wohoo! You've got a Blackjack! 🥳"
      hasBlackJack = true
    } 
    else{
      message = "You're out of the game! 😭"
      isAlive = false
      
    }
    messageEl.textContent = message
}

function newCard(){
  console.log("Drawing a new card from the deck!")
  if(isAlive === true && hasBlackJack === false){
    let cards = getRandomCard()
    sum += cards
    card.push(cards)
    console.log(card)
    renderGame()
  }
}

