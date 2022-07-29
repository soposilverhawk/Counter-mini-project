let num = document.querySelector("p");
let decreaseButton = document.querySelector("#DECREASE");
let resetButton = document.querySelector("#RESET");
let increaseButton = document.querySelector("#INCREASE");
let counter = 0;
decreaseButton.addEventListener("mouseover", function(){
    decreaseButton.style.backgroundColor = "rgb(11, 11, 114)";
    decreaseButton.style.color = "white"
})
decreaseButton.addEventListener("mouseout", function(){
    decreaseButton.style.backgroundColor = "white";
    decreaseButton.style.color = "black";
})
resetButton.addEventListener("mouseover", function(){
    resetButton.style.backgroundColor = "rgb(11, 11, 114)";
    resetButton.style.color = "white"
})
resetButton.addEventListener("mouseout", function(){
    resetButton.style.backgroundColor = "white";
    resetButton.style.color = "black";
})

increaseButton.addEventListener("mouseover", function(){
    increaseButton.style.backgroundColor = "rgb(11, 11, 114)";
    increaseButton.style.color = "white"
})
increaseButton.addEventListener("mouseout", function(){
    increaseButton.style.backgroundColor = "white";
    increaseButton.style.color = "black";
})
decreaseButton.addEventListener("click", function(){
    counter = counter - 1;
    num.innerHTML = counter;
})
increaseButton.addEventListener("click", function(){
    counter = counter + 1;
    num.innerHTML = counter;
})
resetButton.addEventListener("click", function(){
    counter = 0;
    num.innerHTML = 0;
})