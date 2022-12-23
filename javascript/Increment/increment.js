let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count=0

function increment(){
  count+=1
  countEl.textContent =count
}

function save(){
  let countStr = count + "," + ""
  saveEL.innerText += countStr
  console.log(count)
  countEl.textContent = 0
}
