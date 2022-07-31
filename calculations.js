//Credit with Credit is due, I followed along with "Coding with Rob" since his layout looked really nice
//What I didn't realize is that TailWind isn't used professionally *yet*, though this is just a project
//Some of my variables are named differently, but functions the same
//Overtime, I want to add more operations like percentages, pii, and powers.

let currentNumb = "";   //I used "currentNum" as a global variable in the "layout.js, so I had to add a "b" to create new variables.
let previousNumb = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currNum");
const previousDisplayNumber = document.querySelector(".prevNum");

window.addEventListener("keydown", handleKeyPress);

const equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
    if(currentNumb != "" && previousNumb != "") {
        compute();
    }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    addDecimal();
});


const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalculator);

const deleteOne = document.querySelector(".delete");
deleteOne.addEventListener("click", handleDelete);

const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

const negative = document.querySelector(".negative");
    negative.addEventListener("click", () => {
    
    addNegative();
});

const percent = document.querySelector(".percent");
    percent.addEventListener("click", () => {
    
    addPercent();
});

const squareRoot = document.querySelector(".squareroot");
    squareRoot.addEventListener("click", () => {
    
    addSquareRoot();
});

//----------------------------------------------------------------------------------
function handleNumber(number) {   //Where our entry is displayed
    if  (previousNumb !== "" && currentNumb !== "" && operator === "") {
        previousNumb = "";
        currentDisplayNumber.textContent = currentNumb;
    }


    if  (currentNumb.length <= 11) {  //This stops the calculator for going past 11 digits
        currentNumb += number;
        currentDisplayNumber.textContent = currentNumb;
    }
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    if (previousNumb === "") {
        previousNumb = currentNumb;  
        operatorCheck(op); 
    } else if (currentNumb === "") {
        operatorCheck(op);
    } else {
        compute();
        operator = op;
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = previousNumb + " " + operator;
    }
}

function operatorCheck (text) {
    operator = text;
    previousDisplayNumber.textContent = previousNumb + " " + operator;
    currentDisplayNumber.textContent = "0";
    currentNumb = "";
}


function compute() {
    previousNumb = Number(previousNumb);
    currentNumb = Number(currentNumb);
    if (operator === "+") {
        previousNumb += currentNumb;
    } else if (operator === "-") {

        previousNumb -= currentNumb;
    } else if (operator === "X") {
        previousNumb *= currentNumb;
    } else if (operator === "÷") {
        if(currentNumb <= 0) {
            previousNumb = "ERROR";
            displayResults();
            return;
        }
        previousNumb /= currentNumb;

    }

    previousNumb = roundNumber(previousNumb);  //This line has to be BEFORE the string line
    previousNumb = previousNumb.toString();

    if (-Math.abs(currentDisplayNumber) === true && operator === "-") {
        currentDisplayNumber = Math.abs(currentNumb);
        previousNumb += currentNumb; 
    }


    displayResults();
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;  //For decimal remainders, it rounds up to six decimal places.
}



function displayResults() {    

    if (previousNumb.length <= 11) {
        currentDisplayNumber.textContent = previousNumb;
    } else {
        currentDisplayNumber.textContent = previousNumb.slice(0,11) + "...";
    }
    previousDisplayNumber.textContent = "";
    operator = "";
    currentNumb = "";
}

function clearCalculator() {
    currentNumb = "";
    previousNumb = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = "";
}



function addDecimal () {
    if(!currentNumb.includes(".")) {
        currentNumb += ".";
        currentDisplayNumber.textContent = currentNumb;
    }
}

function addPercent () {
    currentDisplayNumber.textContent = currentNumb / 100;
    previousNumb = currentNumb / 100;
}


//NOTE ON THE NEGATIVE FUNCTION:  I can get it to accurately add/subtract when the first number is a negative.
//For some reason, when the SECOND number is a negative, the answer is completely different.

function addNegative () {
    
    currentDisplayNumber.textContent = -Math.abs(currentNumb); 

    previousNumb = -Math.abs(currentNumb);

}



function addSquareRoot () {
    currentDisplayNumber.textContent = Math.sqrt(currentNumb); 
}

function handleDelete() {
    if (currentNumb !== "") {
      currentNumb = currentNumb.slice(0, -1);
      currentDisplayNumber.textContent = currentNumb;
      if (currentNumb === "") {
        currentDisplayNumber.textContent = "0";
      }
    }
    if (currentNumb === "" && previousNumb !== "" && operator === "") {
      previousNumb = previousNumb.slice(0, -1);
      currentDisplayNumber.textContent = previousNumb;
    }
}

// For the keyboard presses

function handleKeyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
      handleNumber(e.key);
    }
    if (
      e.key === "Enter" ||
      (e.key === "=" && currentNum != "" && previousNum != "")
    ) {
      compute();
    }
    if (e.key === "+" || e.key === "-" || e.key === "/") {
      handleOperator(e.key);
    }
    if (e.key === "*") {
      handleOperator("x");
    }
    if (e.key === ".") {
      addDecimal();
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      handleDelete();
    }
}



//console.log(number);  //This lets me check if the console shows the key presses in Inspect mode.



