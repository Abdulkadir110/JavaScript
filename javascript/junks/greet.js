welcomeEl = document.getElementById("welcome-el")

function greetUser(greet, name){
  welcomeEl.textContent = greet + name
}

greetUser("Howdy, ", "Abdulkadir")