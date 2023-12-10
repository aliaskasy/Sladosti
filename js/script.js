let tmpButton = false;
let moneyBasket = document.querySelector (".basket_price") 
let priceBasket = document.querySelector (".sp").innerHTML
priceBasket = parseInt(priceBasket)
const basket_buy = document.getElementById("btn")
console.log(priceBasket);
let bank = 0
function buy() {
if(tmpButton) {
    basket_buy.innerHTML= "Купить";
    basket_buy.style.background = "red";
    tmpButton = false;
    bank = bank - priceBasket
}
else{
    basket_buy.innerHTML= "В корзине";
    basket_buy.style.background = "green";
    tmpButton = true; 
    bank = bank + priceBasket
}
moneyBasket.innerHTML= bank + "R"
}