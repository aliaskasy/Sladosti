const ddr= document.createElement("li")
ddr.classList.add("spisok_basket")
let spisok = document.querySelector(".spisok")
spisok.style.marginTop = '100px'

let zagl = document.createElement("h1")
let Zagolovok = document.createTextNode("товар1")
zagl.appendChild(Zagolovok)
let picture = document.createElement("img")
picture.src = "img/sladds.jpeg"
picture.style.width = "200px"
let stoimost = document.createElement("p")
let Stoimost = document.createTextNode("1500R")
stoimost.appendChild(Stoimost)
let first_li = document.querySelectorAll(".spisok_basket")[0]
function TTU(){
  console.log(zagl)
  spisok.appendChild(ddr)
  ddr.appendChild(zagl)
  ddr.appendChild(picture)
  ddr.appendChild(stoimost)
  first_li.classList.add("none")
}