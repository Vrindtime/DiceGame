let randomNumber1 = Math.floor(Math.random()*6)+1
let randomNumber2 = Math.floor(Math.random()*6)+1

let cube1 = "./images/dice"+randomNumber1+".png"
let cube2 = "./images/dice"+randomNumber2+".png"

document.querySelector('.img1').setAttribute("src",cube1)
document.querySelector('.img2').setAttribute("src",cube2)

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent="Draw"
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "    Player 1 Wins"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins"
}
else{
    alert("Error")
}