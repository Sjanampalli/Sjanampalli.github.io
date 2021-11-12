let person = ["D.I. von Brieson", "Maryam Mohseni"];
let salaries = [100000, 85000];

function addSalary() {
    let salary = document.getElementById("salary").value;

    let name = document.getElementById("name").value;





    if (salary == "") {
        document.getElementById("namespace").innerHTML = "Enter Salary";
        alert("Enter Salary");
    }


    if (name == "") {
        document.getElementById("salaryspace").innerHTML = "Enter Name";
        alert("Enter Name");
    } else {
        alert("please only enter letters for name");
        
    }

    if (name != "" && salary != "") {
        person.push(name);
        salaries.push(salary);
        alert("Salary Added");
    }
}

function displayResults() {
    var highest = 0, average = 0;
    for (var j = 0; j < salaries.length; j++) {
        average += salaries[j];
        if (salaries[j] > highest) {
            highest = salaries[j];
        }
    }



    if (salaries.length != 0) {
        average = average / salaries.length;
    }
    let result = document.getElementById("results");

    result.innerHTML = "<h2>Highest Salary</h2>";
    result.innerHTML += "<p>" + highest + "</p>";

    result.innerHTML += "<h2>Average Salary</h2>";
    result.innerHTML += "<p>" + average + "</p>"
}
function displaySalary() {
    let table = document.getElementById("result_table");

    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
    for (var i = 0; i < person.length; i++) {
        
        table.innerHTML += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
}
function displayEmployees() {
    let employees = document.getElementById("employees");
    employees.innerHTML = "";
    for (var i = 0; i < person.length; i++) {
        employees.innerHTML += "<option>" + person[i] + "</option>";
    }
}