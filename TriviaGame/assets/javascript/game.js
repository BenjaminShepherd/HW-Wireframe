
//create game that creates 3 multiple choice questions, with a timer, User gets 30 seconds to answer all three questions.
//create timer of 30 seconds
//write 3 questions with onclick function
//
//at the end of the 30 seconds, display to DOM how the user answered the questions

//object  of questions & answers


var questions = [{
    question: "Which city did the Utah Jazz originate in?",
    answers: ["Seattle", "San Antonion", "New Orleans"],
    name: "jazz",
    correct: "New Orleans",
    divClass: ".jazz",
},
{
    question: "Which baseball team has the most World Series Titles?",
    answers: ["Dodgers", "Braves", "Yankees"],
    name: "yankees",
    correct: "Yankees",
    divClass: ".yankees",

},
{
    question: "Which college football team played the first indoors Bowl Game?",
    answers: ["Boston College", "Utah", "Wisconsin"],
    name: "utah",
    correct: "Utah",
    divClass: ".utah",
}]

var labels = ["first", "second", "third"];

var number = 10;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the stop button gets clicked, run the stop function.
$("#submitButton").on("click", stop);

//  When the resume button gets clicked, execute the run function.
$("#start-button").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(this).parent().hide();
    $('.container').show();
    // countdown(30);
    questionDisplay();
};

// function for displaying questions
var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();
    for (var j = 0; j < 3; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].question + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 2; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].answers[i] + '"/><label for="' + labels[i] + '">' + questions[j].answers[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#countdown").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();


        //  Alert the user that time is up.
        alert("Time Up!");

    }
}


//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);

};


//  Execute the run function.
run(); {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 3; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer

    // fade out questions

    // show answerScreen

    // display correctAnswers
    $('#correctAnswers').append(correctAnswers);
    // display wrongAnswers
    $('#wrongAnswers').append(wrongAnswers);

    //     for (var i = 0; i < 3; i++) {

    //         if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {


    //             correctAnswers++;
    //         }
    //         $('#correctAnswers').append("You correctly answered  " + correctAnswers + " out of 3 questions! ");

    //     }
    // 
}
