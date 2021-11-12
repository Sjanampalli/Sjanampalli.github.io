

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000, 2500, 1500, 4000, 2200, 1200, 4400];

var $ = function (id) { return document.getElementById(id); };

function UpdateCalorie() {
    var input = document.getElementById('cals').value


    if (document.getElementById("monday").checked) {
        calories[0] = input;
    }
    else if (document.getElementById("tuesday").checked) {
        calories[1] = input;
    }
    else if (document.getElementById("wednesday").checked) {
        calories[2] = input;
    }
    else if (document.getElementById("thursday").checked) {
        calories[3] = input;
    }
    else if (document.getElementById("friday").checked) {
        calories[4] = input;
    }
    else if (document.getElementById("saturday").checked) {
        calories[5] = input;
    }
    else if (document.getElementById("sunday").checked) {
        calories[6] = input;
    }

    var calorielist = "";
    for (let i = 0; i < calories.length; i++) {
        calorielist += calories[i] + " ";

    }

    alert("your updated calorie details are: " + calorielist);
}


function showAverageCalories() {
    var avg = 0;
    for (let i = 0; i < calories.length; i++) {
        avg += parseInt(calories[i]);

    }
    avg = avg / calories.length;
    document.getElementById("averageCals").value = Math.round(avg);


}
function showMax() {
    var finalstring = "";
    var maximum = 0;
    var maxday = "";
    //find max calories
    for (let i = 0; i < calories.length; i++) {
        if(calories[i] > maximum){
            maximum = calories[i];
        }

    }

    for (let i = 0; i < calories.length; i++) {
        if(maximum == calories[i]){
            maxday = days[i];
        }
    }




    finalstring = "Your maximum consumed calorie is "+maximum+" on "+maxday;
    document.getElementById("maxtext").innerHTML = finalstring;


}

window.onload = function () {
    //event handlers














};
