
var name = window.prompt("What is your name ?");
var doing = window.prompt("How are you doing");


var today = new Date();   
var time = today.getHours() + ":" + today.getMinutes();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('date').textContent = "Today is "+date+", and the time is "+time;

document.getElementById('Welcome').textContent = "The Salty Jellyfish welcomes you, " + name + " We're glad you are doing " + doing.toLowerCase();



document.getElementById('addbutton').onclick = Addition;
document.getElementById('subtractbutton').onclick = Subtraction;
document.getElementById('ReverseWordButton').onclick = WordReversal;
document.getElementById('NumberGenerator').onclick = NumberGenerator;
document.getElementById('RPS').onclick = RockPaperScissors;


function Addition() {
    var firstnum = document.getElementById("firstaddnum").value;
    var secondnum = document.getElementById("secondaddnum").value;
    var sum = Number(firstnum) + Number(secondnum);
    document.getElementById('AdditionAnswer').textContent = sum;
}

function Subtraction() {
    var firstnum = document.getElementById("firstsubnum").value;
    var secondnum = document.getElementById("secondsubnum").value;
    var diff = Number(firstnum) - Number(secondnum);
    document.getElementById('SubtractionAnswers').textContent = diff;
}

function WordReversal() {
    var word = document.getElementById("reversibleword").value;

    var characterarray = word.split("");
    var joinedarray = characterarray.reverse();
    var reversedword = joinedarray.join();
    document.getElementById('ReverseWordAnswer').textContent = reversedword;
}

function NumberGenerator() {
    var randomnumber = Math.round(Math.random() * 100);
    document.getElementById('NumberGeneratorAnswer').textContent = randomnumber;
}
function RockPaperScissors() {
    var randomnumber = Math.round(Math.random() * 3);

    if (randomnumber == 1) {
        document.getElementById('RPSANSWER').textContent = "Rock";
    } else if (randomnumber == 2) {
        document.getElementById('RPSANSWER').textContent = "Paper";


    } else {
        document.getElementById('RPSANSWER').textContent = "Scissors";

    }
}
