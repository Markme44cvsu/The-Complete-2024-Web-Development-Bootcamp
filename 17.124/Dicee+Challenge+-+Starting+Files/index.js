function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //two random numbers
var randomNumber1 = randint(1, 6);  
var randomNumber2 = randint(1, 6);

//changing attributes img src using random numbers
document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1+ ".png")

document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2+ ".png")



// if else for who won 
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🚩Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 Wins🚩";
}else{
    document.querySelector("h1").innerHTML ="It's a draw!";
}