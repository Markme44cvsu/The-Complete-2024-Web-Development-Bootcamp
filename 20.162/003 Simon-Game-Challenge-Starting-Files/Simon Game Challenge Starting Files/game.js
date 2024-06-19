let userClickedPattern = [];

let gamePattern = [];

let buttonColour = ["red", "blue", "green", "yellow"];

let gameStarted = false;

let level = 0;

function nextSequence(){
    let max = 3;
    let min = 0;
    let randomNumber = Math.floor(Math.random() * (max - min +1))+ min;
    let randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    level += 1;
    $("#level-title").text("Level " + level);


}

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)
    
});

function playSound(name){
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).on('keypress',function(e) {
    if(gameStarted == false) {
        nextSequence();
        gameStarted = true;
        $("#level-title").text("Level " + level);
    }
});


function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if (typeof userClickedPattern[level-1] !== "undefined"){
            setTimeout(function(){
                nextSequence();
                userClickedPattern = [];
            }, 1000)
        }else{
            return;
        }
    }else{
        console.log("fail");
        playSound("wrong");
    }
}