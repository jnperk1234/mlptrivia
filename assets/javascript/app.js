//import { clearInterval } from "timers";

$(document).ready(function(){


//Creates Start button
    function initialScreen(){
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'> Start the Magic</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();

//Create a function, generateHTML(), that is triggered by the start button

    $("body").on("click", ".start-button", function(event){
        event.preventDefault(); 
        // clickSound.play();
        generateHTML();

        timeWrapper();
    });

    $("body").on("click", ".answer", function(event){
        // clickSound.play();
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]){
        
            clearInterval(theClock);
            generateWin();
        }else{
            clearInterval(theClock)
            generateLoss();
        }
    });//Close .answer click

    $("body").on("click", ".reset-button", function(event){
        //clickSound.play();
        resetGame();

    });
});

function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class= 'text-center timer-p'>Time Remaing: <span class='timer'>" + counter + "</span></p>" + "<p class = 'text-center'>You ran out of time! The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class = 'center-block img-wrong' src='img/x.png>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait,4000);
}

function generateWin() {
    console.log("You won")
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait,4000);
}

function generateLoss(){
    console.log("wrong")
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-right' src='img/x.png'>";
    //gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait,4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timeWrapper();
    }else{
        finalScreen();
    }
}

function timeWrapper(){
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if(counter ===0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
            
        }
        if (counter >0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}
function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 25;
var questionArray = ["Who is the fastest flier out of the main group of Ponies?", "Who is the posh, fashionista of the group?", "Which pony loves her sweets and loves to party?", "Name that pony who's pet's name is Angel", "Who is the older sister of Apple Bloom?", "Who is the bookworm of the group and recently turned Princess Pony?", "Who is the current ruler of Equestria?", "What's name of Apple Bloom, Sweetie Belle, Scootaloo, and Babs Seed club in their quest to get a cutie mark?"];
var answerArray = [["Ember", "Trixie", "Rainbow Dash", "Spitfire"], ["Rarity","Sapphire Shores","Sweeite Belle","Cheerilee"], ["Twilight Sparkle", "Pinkie Pie", "Pumpkin Cake", "Starlight Glimmer"], ["Spike","Angel Wings","Gilda","Fluttershy"], ["Apple Jack", "Philomena", "Sunset Shimmer", "Dr. Fauna"], ["Cherry Jubilee","Rainbow Dash","Twilight Sparkle","Minty"], ["Queen Novo", "Princess Cadance", "Queen Chrysalis", "Princess Celestia"], ["The Apple Family","The Cutie Mark Crusaders","The Wonderbolts","Pillars of Old Equestria"]];
var imageArray = ["<img class='center-block img-right' src='img/ranb.png'>", "<img class='center-block img-right' src='img/rarity.png'>", "<img class='center-block img-right' src='img/ppie.png'>", "<img class='center-block img-right' src='img/flush.png'>", "<img class='center-block img-right' src='img/apj.png'>", "<img class='center-block img-right' src='img/pts.png'>", "<img class='center-block img-right' src='img/cel.png'>", "<img class='center-block img-right' src='img/cmc.png'>"];
var correctAnswers = ["C. Rainbow Dash", "A. Rarity", "B. Pinkie Pie", "D. Fluttershy", "A. Apple Jack", "C. Twilight Sparkle", "D. Princess Celestia", "B. The Cutie Mark Crusaders"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
