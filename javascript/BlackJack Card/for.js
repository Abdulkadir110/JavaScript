let myname=["my ", "name ", "is " ,"per "]
let greetingsEl=document.getElementById("greetings-el")
for (let i=0; i<myname.length; i++){
greetingsEl.textContent += myname[i]
}

let hasCompletedCourse = true
let givesCertificate = true

if(hasCompletedCourse= true){
  if(givesCertificate = true){
    givesCertificate()
  }
}

// && = and
// || = or

let likesDocumentaries = true
let likesStartups = true

if(likesDocumentaries === true || likesStartups === true){
   recommededMovie()
}

function recommededMovie() {
  console.log("Hey, Check out this film we think you will like")
}