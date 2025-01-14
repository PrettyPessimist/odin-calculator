let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let n1;
let n2;
let symbol;
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if(n1 != null && n2 != null || n1 == null){
            n1 = +event.target.id;
            n2 = undefined;
            console.log("active1");
        } else if(n1 != null){
            n2 = +event.target.id;
            console.log("active2");
        } 

        console.log("n1 is",n1);
        console.log("n2 is",n2);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        symbol = event.target.id
        console.log("operator active is",symbol);
    });
});

