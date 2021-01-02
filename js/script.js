//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
let arrayOfColors = ["green", "red", "blue", "yellow", "purple", "black", "orange"] 

document.querySelector('.btn').addEventListener('click', changeColor)

//get random index
function randomColor(){
    let numOfColors = arrayOfColors.length;
    let randomIndex = Math.floor(Math.random() * numOfColors)
    return arrayOfColors[randomIndex]
}

//change Color
function changeColor(){
    document.body.style.backgroundColor = randomColor()
}