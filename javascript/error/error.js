let errorParagraph = document.getElementById("error")
  console.log(errorParagraph) 

function purchase(){
  console.log("Button Clicked")
  alert("Something went wrong, Please try again")
  errorParagraph.textContent = "Something went wrong, Please try again"
}