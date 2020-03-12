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
        
    })

// Question One




