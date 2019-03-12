
//runs the  start function after clicking start button
$("#start-button").on("click", function () {
    game.start();
})


//array of objects with all the questions and answers
var questions = [{
    question: "Which city did the Utah Jazz originate in?",
    answers: ["Seattle", "Milwuakee", "New Orleans"],
    correctAnswer: "New Orleans"

}, {
    question: "What Baseball team has won the most World Series Titles?",
    answers: ["Atlanta Braves", "New York Yankees", "LA Dodgers"],
    correctAnswer: "New York Yankees"
}, {
    question: "Which college football team played in the first ever indoor bowl game?",
    answers: ["Boston College", "Utah", "Clemson"],
    correctAnswer: "Utah"
}, {
    question: "Which ballpark has the closest left field wall?",
    answers: ["Fenway Park", "Turner Field", "Dodger Stadium"],
    correctAnswer: "Fenway Park"
}, {
    question: "What city did the OKC Thunder originate in?",
    answers: ["Tampa", "Oakland", "Seattle"],
    correctAnswer: "Seattle"
}];


//create score variables & countdown clock, as well as the done function to end the quiz
var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter)
        if (game.counter <= 0) {
            console.log("Time");
            game.done();
        }
    },

    //create start function, loop through the questions and display them to the DOM, as well as a loop for the answers.
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>30</span> Seconds</h2>")
        $("#start-button").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }

        //create done function to check user answers compared to correct answers, and add them to the correct score.
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        //make a result function to stop the countdown clock, and display the users correct and incorrect guesses.
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#subwrapper h2").remove();

        $("#subwrapper").html("<h2>All Done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}












// var questions = [
//     {
//         prompt: "Which city did the Utah Jazz originate in?\n(a) Seattle\n\(b) Boston\n(c) New Orleans",
//         answer: "c" 
//     },
//     {
//         prompt: "What baseball team has the most World Series Titles?\n(a) Atlanta Braves\n\(b) New York Yankees\n(c) LA Dodgers",
//         answer: "b"
//     },
//     {
//         prompt: "Which college football team played in the first ever indoor bowl game?\n(a) Boston College\n\(b) Utah\n(c) Clemson",
//         answer: "b"
//     },
// ]

