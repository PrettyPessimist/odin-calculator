let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let computeBtns = document.querySelectorAll(".compute");

let n1 = null;
let n2 = null;
let opSymbol = null;
let evalSign;
let compute = false;

let prevResult = document.querySelector(".previous-result");
let currentDisplay = document.querySelector(".current-operation");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        const digit = event.target.id; 
        console.log("Digit clicked:", digit);
        console.log("n1:", n1, "opSymbol:", opSymbol, "n2:", n2); 

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

        console.log("After conditions - n1:", n1, "opSymbol:", opSymbol, "n2:", n2); 
        updateDisplay();
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        if (n1 === null) {
            console.log("Error: Select a number before choosing an operator.");
            return;
        }

        if (opSymbol === null) {
            opSymbol = event.target.id;
            console.log("Operator selected:", opSymbol);
        } else {
            if (n2 === null) {
                opSymbol = event.target.id;
                console.log("Operator replaced:", opSymbol);
            } else {
                console.log("Cannot change operator after n2 starts building.");
            }
        }

        updateDisplay();
    });
});

computeBtns.forEach((computeBtn) => {
    computeBtn.addEventListener("click", (event) => {
        evalSign = event.target.id
        console.log("Computed with", evalSign);

        switch (evalSign) {
            case "equal":
                n1 = null;
                opSymbol = null;
                n2 = null;
                break;
            case "clear":
                n1 = null;
                opSymbol = null;
                n2 = null;
                break;
            case "delete":
                if (n2 !== null) {
                    n2 = null;
                } else if (opSymbol !== null) {
                    opSymbol = null;
                } else if (n1 !== null) {
                    n1 = null;
                }
                break;
            default:
                // You can add other cases for other buttons if necessary
                break;
        }

        compute = true;

        console.log("Variables reset:", {n1, opSymbol, n2});

        updateDisplay();
    });
});

function updateDisplay() {
    currentDisplay.textContent = `${n1 ?? ""} ${opSymbol ?? ""} ${n2 ?? ""}`;
}
