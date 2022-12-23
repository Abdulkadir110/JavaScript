const imgs = [
  "/javascript/renderimages/hip1.jpg",
  "/javascript/renderimages/hip2.jpg",
  "/javascript/renderimages/hip3.jpg"
]

const container = document.getElementById("container")

function renderimage(){
   let imgDom= ""
   for(let i=0; i<imgs.length; i++){
    imgDom += `<img class="team-img" src="${imgs[i]}">`
   }
   container.innerHTML = imgDom
}

renderimage()