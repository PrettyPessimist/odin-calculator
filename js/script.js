let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let computeBtns = document.querySelectorAll(".compute");
let prevResult = document.querySelector(".prev-result");
let currentDisplay = document.querySelector(".current-operation");
let n1 = null;
let n2 = null;
let opSymbol = null;
let evalSign;
let n3 = null;

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        const digit = event.target.id; 
        console.log("Digit clicked:", digit);
        console.log("n1:", n1, "opSymbol:", opSymbol, "n2:", n2); 

        if (n3 !== null) {
            if (opSymbol === null) {
                if (n1 === null) {
                    n1 = digit;
                    console.log("Building n1 (n3):", n1);
                } else {
                    n1 += digit;
                    console.log("Appending to n1 (n3):", n1);
                }
            } else {
                if (n2 === null) {
                    n2 = digit;
                    console.log("Building n2 (n3):", n2);
                } else {
                    n2 += digit;
                    console.log("Appending to n2 (n3):", n2);
                }
            }
        } else {
            if (n1 === null && opSymbol === null) {
                n1 = digit;
                console.log("Building n1:", n1);
            } else if (n1 !== null && opSymbol === null) {
                n1 += digit;
                console.log("Appending to n1:", n1);
            } else if (n1 !== null && opSymbol !== null && n2 === null) {
                n2 = digit;
                console.log("Building n2:", n2);
            } else if (n1 !== null && opSymbol !== null && n2 !== null) {
                n2 += digit;
                console.log("Appending to n2:", n2);
            }
        }
        console.log("After conditions - n1:", n1, "opSymbol:", opSymbol, "n2:", n2); 
        updateDisplay();
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        if (n1 === null && n3 == null) {
            console.log("Error: Select a number before choosing an operator.");
            return;
        }
        
        if (opSymbol === null && n3 == null) {
            opSymbol = event.target.id;
            console.log("Operator selected:", opSymbol);
        } else if (n2 === null && n3 == null) {
            opSymbol = event.target.id;
            console.log("Operator replaced:", opSymbol);
        } else if (n3 != null) {
            opSymbol = event.target.id;
            console.log("Operator replaced (n3)", opSymbol);
        } else {
            console.log("Cannot change operator after n2 starts building.");
        }
        updateDisplay();
    });
});

computeBtns.forEach((computeBtn) => {
    computeBtn.addEventListener("click", (event) => {
        evalSign = event.target.id;
        console.log("Computed with", evalSign);
        switch (evalSign) {
            case "equal":
                operate(n1, opSymbol, n2);
                n1 = null;
                opSymbol = null;
                n2 = null;
                break;

            case "clear":
                n1 = n2 = opSymbol = n3 = null;
                prevResult.textContent = "";
                break;

            case "delete":
                if (n2 !== null) {
                    n2 = n2.slice(0, -1) || null;
                } else if (opSymbol !== null) {
                    opSymbol = null;
                } else if (n3 !== null && n1 == null) {
                    n3 = null;
                    prevResult.textContent = "";
                } else if (n1 !== null) {
                    n1 = n1.slice(0, -1) || null;
                }
                break;

            default:

                break;
        }
        console.log("Variables reset:", {n1, opSymbol, n2});
        updateDisplay();
    });
});



function updateDisplay() {
    currentDisplay.textContent = `${n1 ?? ""} ${opSymbol ?? ""} ${n2 ?? ""}`;
}

function operate(n1, opSymbol, n2) {
    let result;
    switch (opSymbol) {
        case "+":
            result = sum(n1, n2);
            break;

        case "-":
            result = difference(n1, n2);
            break;

        case "x":
            result = product(n1, n2);
            break;

        case "÷":
            result = quotient(n1, n2);
            break;
    }
    
    if (result % 1 !== 0) {
        result = result.toFixed(2); 
    }
    prevResult.textContent = `${result !== undefined ? result : ""} `;
}

function sum (n1, n2) {
    console.log("bruh3r2rwfw!", n3);
    n1 = +n1;
    n2 = +n2;
    if(n3 != null && n1 == ""){
        n3 = n3 + n2;
        console.log("bruh!");
    } else {
        n3 = n1 + n2;
        console.log("summed!");
    } return n3;
  }
  
function difference(n1, n2) {
    n1 = +n1;
    n2 = +n2;
    if(n3 != null  && n1 == ""){
        n3 = n3 - n2;
    } else {
        n3 = n1 - n2;
    } return n3;
  }

function product (n1, n2) {
    n1 = +n1;
    n2 = +n2;
    if(n3 != null  && n1 == ""){
        n3 = n3 * n2;
    } else {
        n3 = n1 * n2;
    } return n3;
  }

function quotient(n1, n2) {
    n1 = +n1;
    n2 = +n2;
    if(n3 != null  && n1 == ""){
        n3 = n3 / n2;
    } else {
        n3 = n1 / n2;
    } return n3;
  }