/*eslint-env browser*/

/*function writeMessage() {
    window.document.write("Hello World");
}
writeMessage();*/

/*function writeMessage(color, make, model) {
    window.document.write("you own a" + color + " " + make + " " + model + ".");
}
writeMessage("gray", "Honda", "CRV");
writeMessage("red", "Chevy", "Camaro");
writeMessage("white", "Honda", "CRV");*/

/*function processCar(car) {
    window.document.write("You Own a " + car[0] + " " + car[1] + " " + car[2] + "." + "<br>");
    car[2] = "Suburban";
    
}
var vehicle = ["white", "chevy", "Camaro"];
processCar(vehicle);
window.document.write(vehicle[2]);*/

/*
function writeMessage(color, make, model) {
    window.document.write("you own a" + arguments[0] + " " + arguments[1] + " " + arguments[2]+ ".");
}
writeMessage("gray", "Honda", "CRV");
writeMessage("red", "Chevy", "Camaro");
writeMessage("white", "Honda", "CRV");
*/

/*
function calculate(numbers) {
    var i;
    var base = Number(numbers);
    for (i = 1; i < arguments.length; i += 1){
        base += Number(arguments[i],10);
    }
    window.document.write(base + "<br>");
        
}
calculate(2,10);
calculate(2,10, 20, 50);
calculate(2,10, 100, 90);
calculate(2,10, 56,78,77);
calculate(2,10, 67,23,45,4);
*/

/*function calculate(numbers) {
    var i;
    var base = Number(numbers);
    for (i = 1; i < arguments.length; i += 1){
        base += Number(arguments[i],10);
    }
    return base; 
        
}
window.document.write(calculate(2,10) + "<br>");
window.document.write(calculate(2,10, 20, 50) + "<br>");
window.document.write(calculate(2,10, 100, 90) + "<br>");
window.document.write(calculate(2,10, 56,78,77) + "<br>");
window.document.write(calculate(2,10, 67,23,45,4) + "<br>");*/

/*
var make = "Chevy";
var model = "Camaro";
function displayCar(make, model) {
    "use strict";
    var year = 2015;
    window.document.write("I own a " + year + " " + make + " " + model + ".");
}
displayCar(make, model);
displayCar(year, make, model);
*/

/*var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var emailAddress = $("email").value;
window.console.log(emailAddress);*/

/*function writeMessage() {
    window.alert("Hello World");
}

var myElement = document.getElementById("myButton");
myElement.onclick = function () {
    window.alert("Hello World");
};*/

//var myButton = document.getElementById("myButton");
//
//function displayMessage() {
//    "use strict";
//    window.alert("hello world");
//}
//myButton.addEventListener("click", displayMessage);

/*var myButton = document.getElementById("myButton");


myButton.addEventListener("click", function () {
    "use strict";
    window.alert("hello world");
});*/
/*function init() {
    "use strict";
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function () {			window.alert("Hello World");	});
}

window.addEventListener("load", init);*/

/*function init() {
    "use strict";
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function (e) {			window.alert(e.target.innerHTML);	});
}

window.addEventListener("load", init);*/
function init() {
    "use strict";
    var buttons = window.document.getElementById("buttons");
    buttons.addEventListener("click", function (e){
       window.alert(e.target.innerHTML);   
    });
}

window.addEventListener("load", init);


