//List of global variables

var screenArray = [];
var totalOutput = "";
var screenDisplay = "";
var operatorClicks = 0;
var clickedResult = false;

//Now onto the functions

function clearScreen() {
  document.getElementById("screen-number").innerHTML = 0;

  operatorClicks = 0;
  screenArray = [];
  totalOutput = "";
}
//------

function insertDigit(digit) {
  if (
    totalOutput.charAt(totalOutput.length - 1) === "+" ||
    totalOutput.charAt(totalOutput.length - 1) === "-" ||
    totalOutput.charAt(totalOutput.length - 1) === "*" ||
    totalOutput.charAt(totalOutput.length - 1) === "/"
  ) {
    totalOutput += digit;

    document.getElementById("screen-number").innerHTML = digit;
  } else if (totalOutput.length === 9) {
    alert("Maximum number of digits reached");
  } else if (totalOutput.length === 0 && digit === 0) {
    //Do nothing if 0 is clicked and the screen displays 0 to begin with.
  } else {
    if (clickedResult) {
      totalOutput = "";
      clickedResult = false;
    }

    totalOutput += digit;
    document.getElementById("screen-number").innerHTML = totalOutput;
  }
}
//------

function add() {
  if (totalOutput.charAt(totalOutput.length - 1) === "+") {
    alert("You already pressed the plus button");
  } else {
    totalOutput += "+";
    operatorClicks++;
  }
}
//------

function subtract() {
  if (totalOutput.charAt(totalOutput.length - 1) === "-") {
    alert("You already pressed the subtract button");
  } else {
    totalOutput += "-";

    operatorClicks++;
  }
}

function multiply() {
  if (totalOutput.charAt(totalOutput.length - 1) === "*") {
    alert("You already pressed the multiply button");
  } else {
    totalOutput += "*";

    operatorClicks++;
  }
}
//------

function divide() {
  if (totalOutput.charAt(totalOutput.length - 1) === "/") {
    alert("You already pressed the divide button");
  } else {
    totalOutput += "/";

    operatorClicks++;
  }
}
//------

function result() {
  if (totalOutput === "") {
    //Do nothing if you press the equals button and there is no totalOutput;
  } else {
    totalOutput = eval(totalOutput);

    document.getElementById("screen-number").innerHTML = totalOutput;

    totalOutput = totalOutput.toString();

    clickedResult = true;
  }
}

clearScreen();
