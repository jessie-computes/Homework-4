var cardBody = document.body.querySelector(".card-body");


// This is the first page that users interact with

    // Coding quiz heading
    var startQuiz = document.createElement("h1");
    startQuiz.textContent = "Coding Quiz!";
    cardBody.appendChild(startQuiz);

    // paragraph explaining what the quiz is
    var explainQuiz = document.createElement("p");
    explainQuiz.textContent = "Answer the following coding questions. You will have one minute to complete the quiz. If you answer a question incorrectly, you will be penalized ten seconds. The quiz will be over when all questions are answered, or when the timer reaches zero. After the quiz has been completed, you will be able to save your initials and highscore."
    cardBody.appendChild(explainQuiz);

    // start button
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz";
    startButton.classList.add("btn", "btn-primary");
    cardBody.appendChild(startButton);

    startButton.addEventListener("click", function(event){
        event.preventDefault();
        questionOne();
    })

// global score variable
var totalScore = 0;

// Question One
function questionOne(){
    cardBody.removeChild(startQuiz);
    cardBody.removeChild(explainQuiz);
    cardBody.removeChild(startButton);

    var divOne = document.createElement("div");
    divOne.classList.add("row");
    var divTwo = document.createElement("div");
    divTwo.classList.add("row");
    var divThree = document.createElement("div");
    divThree.classList.add("row");
    var divFour = document.createElement("div");
    divFour.classList.add("row");

    // asks the first question
    var qOne = document.createElement("h3");
    qOne.classList.add("questions")
    qOne.textContent = "Commonly used data types do NOT include:";
    cardBody.appendChild(qOne);

    // first answer option
    var optionOne = document.createElement("button");
    optionOne.textContent = "strings"
    optionOne.classList.add("btn", "btn-primary", "buttonAnswers");
    divOne.appendChild(optionOne);
    cardBody.appendChild(divOne);

    // second answer option
    var optionTwo = document.createElement("button");
    optionTwo.textContent = "booleans"
    optionTwo.classList.add("btn", "btn-primary", "buttonAnswers");
    divTwo.appendChild(optionTwo);
    cardBody.appendChild(divTwo);
    
    // third answer option
    var optionThree = document.createElement("button");
    optionThree.textContent = "alerts"
    optionThree.classList.add("btn", "btn-primary", "buttonAnswers", "correctAnswer");
    divThree.appendChild(optionThree);
    cardBody.appendChild(divThree);
    
    // fourth answer option
    var optionFour = document.createElement("button");
    optionFour.textContent = "numbers"
    optionFour.classList.add("btn", "btn-primary", "buttonAnswers");
    divFour.appendChild(optionFour);
    cardBody.appendChild(divFour);

    var elements = document.getElementsByClassName("buttonAnswers");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event){
            event.preventDefault();
            cardBody.removeChild(qOne);
            cardBody.removeChild(divOne);
            cardBody.removeChild(divTwo);
            cardBody.removeChild(divThree);
            cardBody.removeChild(divFour);
            questionTwo();
        });
    };

};


// second quiz question
function questionTwo(){

    var divOneTwo = document.createElement("div");
    divOneTwo.classList.add("row");
    var divTwoTwo = document.createElement("div");
    divTwoTwo.classList.add("row");
    var divThreeTwo = document.createElement("div");
    divThreeTwo.classList.add("row");
    var divFourTwo = document.createElement("div");
    divFourTwo.classList.add("row");

    // asks the question
    var qOneTwo = document.createElement("h3");
    qOneTwo.classList.add("questions")
    qOneTwo.textContent = "The conditional if/else statements are enclosed within:";
    cardBody.appendChild(qOneTwo);

    // first answer option
    var optionOne = document.createElement("button");
    optionOne.textContent = "quotes"
    optionOne.classList.add("btn", "btn-primary", "buttonAnswers");
    divOneTwo.appendChild(optionOne);
    cardBody.appendChild(divOneTwo);

    // second answer option
    var optionTwo = document.createElement("button");
    optionTwo.textContent = "curly brackets"
    optionTwo.classList.add("btn", "btn-primary", "buttonAnswers", "correctAnswer");
    divTwoTwo.appendChild(optionTwo);
    cardBody.appendChild(divTwoTwo);
    
    // third answer option
    var optionThree = document.createElement("button");
    optionThree.textContent = "parentheses"
    optionThree.classList.add("btn", "btn-primary", "buttonAnswers");
    divThreeTwo.appendChild(optionThree);
    cardBody.appendChild(divThreeTwo);
    
    // fourth answer option
    var optionFour = document.createElement("button");
    optionFour.textContent = "square brackets"
    optionFour.classList.add("btn", "btn-primary", "buttonAnswers");
    divFourTwo.appendChild(optionFour);
    cardBody.appendChild(divFourTwo); 
    
    var elements = document.getElementsByClassName("buttonAnswers");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event){
            event.preventDefault();
            cardBody.removeChild(qOneTwo);
            cardBody.removeChild(divOneTwo);
            cardBody.removeChild(divTwoTwo);
            cardBody.removeChild(divThreeTwo);
            cardBody.removeChild(divFourTwo);
            questionThree();
        });
    };    
}


// third quiz question
function questionThree(){

    var divOneThree = document.createElement("div");
    divOneThree.classList.add("row");
    var divTwoThree = document.createElement("div");
    divTwoThree.classList.add("row");
    var divThreeThree = document.createElement("div");
    divThreeThree.classList.add("row");
    var divFourThree = document.createElement("div");
    divFourThree.classList.add("row");

    // asks the question
    var qThree = document.createElement("h3");
    qThree.classList.add("questions")
    qThree.textContent = "Arrays in JavaScript can be used to store:";
    cardBody.appendChild(qThree);

    // first answer option
    var optionOne = document.createElement("button");
    optionOne.textContent = "numbers and strings"
    optionOne.classList.add("btn", "btn-primary", "buttonAnswers");
    divOneThree.appendChild(optionOne);
    cardBody.appendChild(divOneThree);

    // second answer option
    var optionTwo = document.createElement("button");
    optionTwo.textContent = "other arrays"
    optionTwo.classList.add("btn", "btn-primary", "buttonAnswers");
    divTwoThree.appendChild(optionTwo);
    cardBody.appendChild(divTwoThree);
    
    // third answer option
    var optionThree = document.createElement("button");
    optionThree.textContent = "booleans"
    optionThree.classList.add("btn", "btn-primary", "buttonAnswers");
    divThreeThree.appendChild(optionThree);
    cardBody.appendChild(divThreeThree);
    
    // fourth answer option
    var optionFour = document.createElement("button");
    optionFour.textContent = "all of the above"
    optionFour.classList.add("btn", "btn-primary", "buttonAnswers", "correctAnswer");
    divFourThree.appendChild(optionFour);
    cardBody.appendChild(divFourThree);
    
    var elements = document.getElementsByClassName("buttonAnswers");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event){
            event.preventDefault();
            cardBody.removeChild(qThree);
            cardBody.removeChild(divOneThree);
            cardBody.removeChild(divTwoThree);
            cardBody.removeChild(divThreeThree);
            cardBody.removeChild(divFourThree);
            questionFour();
        });
    };    
}

// fourth quiz question
function questionFour(){

    var divOne = document.createElement("div");
    divOne.classList.add("row");
    var divTwo = document.createElement("div");
    divTwo.classList.add("row");
    var divThree = document.createElement("div");
    divThree.classList.add("row");
    var divFour = document.createElement("div");
    divFour.classList.add("row");

    // asks the question
    var qOne = document.createElement("h3");
    qOne.classList.add("questions")
    qOne.textContent = "String values must be enclose in ____ when being assigned to variables.";
    cardBody.appendChild(qOne);

    // first answer option
    var optionOne = document.createElement("button");
    optionOne.textContent = "commas"
    optionOne.classList.add("btn", "btn-primary", "buttonAnswers");
    divOne.appendChild(optionOne);
    cardBody.appendChild(divOne);

    // second answer option
    var optionTwo = document.createElement("button");
    optionTwo.textContent = "curly brackets"
    optionTwo.classList.add("btn", "btn-primary", "buttonAnswers");
    divTwo.appendChild(optionTwo);
    cardBody.appendChild(divTwo);
    
    // third answer option
    var optionThree = document.createElement("button");
    optionThree.textContent = "quotes"
    optionThree.classList.add("btn", "btn-primary", "buttonAnswers", "correctAnswer");
    divThree.appendChild(optionThree);
    cardBody.appendChild(divThree);
    
    // fourth answer option
    var optionFour = document.createElement("button");
    optionFour.textContent = "parentheses"
    optionFour.classList.add("btn", "btn-primary", "buttonAnswers");
    divFour.appendChild(optionFour);
    cardBody.appendChild(divFour);
    
    var elements = document.getElementsByClassName("buttonAnswers");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event){
            event.preventDefault();
            cardBody.removeChild(qOne);
            cardBody.removeChild(divOne);
            cardBody.removeChild(divTwo);
            cardBody.removeChild(divThree);
            cardBody.removeChild(divFour);
            questionFive();
        });
    };    
};

// fifth quiz question
function questionFive(){

    var divOne = document.createElement("div");
    divOne.classList.add("row");
    var divTwo = document.createElement("div");
    divTwo.classList.add("row");
    var divThree = document.createElement("div");
    divThree.classList.add("row");
    var divFour = document.createElement("div");
    divFour.classList.add("row");

    // asks the question
    var qOne = document.createElement("h3");
    qOne.classList.add("questions")
    qOne.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    cardBody.appendChild(qOne);

    // first answer option
    var optionOne = document.createElement("button");
    optionOne.textContent = "javaScript"
    optionOne.classList.add("btn", "btn-primary", "buttonAnswers");
    divOne.appendChild(optionOne);
    cardBody.appendChild(divOne);

    // second answer option
    var optionTwo = document.createElement("button");
    optionTwo.textContent = "terminal/bash"
    optionTwo.classList.add("btn", "btn-primary", "buttonAnswers");
    divTwo.appendChild(optionTwo);
    cardBody.appendChild(divTwo);
    
    // third answer option
    var optionThree = document.createElement("button");
    optionThree.textContent = "for loops"
    optionThree.classList.add("btn", "btn-primary", "buttonAnswers", "correctAnswer");
    divThree.appendChild(optionThree);
    cardBody.appendChild(divThree);
    
    // fourth answer option
    var optionFour = document.createElement("button");
    optionFour.textContent = "console.log()"
    optionFour.classList.add("btn", "btn-primary", "buttonAnswers");
    divFour.appendChild(optionFour);
    cardBody.appendChild(divFour);
    
    var elements = document.getElementsByClassName("buttonAnswers");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event){
            event.preventDefault();
            cardBody.removeChild(qOne);
            cardBody.removeChild(divOne);
            cardBody.removeChild(divTwo);
            cardBody.removeChild(divThree);
            cardBody.removeChild(divFour);
            allDone();
        });
    };
        
};

function allDone(){

    var doneHeading = document.createElement("h1");
    doneHeading.textContent = "All done!";
    cardBody.appendChild(doneHeading);

    var finalScore = document.createElement("p");
    finalScore.textContent = "Your final score is " + totalScore;
    cardBody.appendChild(finalScore);

    var initialDiv = document.createElement("div");
    initialDiv.classList.add("form-group", "row"); 
    
    var initialLabel = document.createElement("label");
    initialLabel.classList.add("col-form-label");
    initialLabel.textContent = "Enter initials: ";

    var initialInput = document.createElement("input");

    var inputButton = document.createElement("button");
    inputButton.textContent = "Submit";
    inputButton.classList.add("btn", "btn-primary", "submit-button");
    
    initialDiv.appendChild(initialLabel);
    initialDiv.appendChild(initialInput);
    initialDiv.appendChild(inputButton);
    cardBody.appendChild(initialDiv);

    inputButton.addEventListener("click", function(event){
        event.preventDefault();
        var initials = initialInput.value;
        localStorage.setItem("initials", initials);
        localStorage.setItem("totalScore", totalScore);
        cardBody.removeChild(doneHeading);
        cardBody.removeChild(finalScore);
        cardBody.removeChild(initialDiv);
        highScore();
    });
    

};


function highScore(){
    var highScoreHead = document.createElement("h1");
    highScoreHead.textContent = "High Scores";

    cardBody.appendChild(highScoreHead);
    
    var scoreRow = document.createElement("div");
    scoreRow.classList.add("row");

    initials = localStorage.getItem("initials");
    score = localStorage.getItem("totalScore");

    initalsAndScore = document.createElement("p");
    initalsAndScore.textContent = initials + " - " + score;
    scoreRow.appendChild(initalsAndScore);
    cardBody.appendChild(scoreRow);
};



