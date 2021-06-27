let number1 = window.prompt("Quel chiffre vient après le 5 ?");
while (isNaN(number1)) {
    alert("Error");
    number1 = window.prompt("veuillez rentrer un nombre")
}

let multi = window.prompt("Tapez l'operateur de multiplication ?");
while ((multi !=="+") && (multi !=="-") && (multi !=="/") && (multi !=="*")) { // Tant que l'operateur saisi est different de " +&&; /&&; *&&; -&&" alors la boucle continue //
    alert("Error");
    multi = window.prompt("Veuillez rentrer le bon operateur")
}

let number2 = window.prompt("Quel chiffre vient après le 9 ?");
while (isNaN(number2)) {
    number1 = window.prompt("Veuillez rentrer le bon chiffre")
}

let result ;

if ( multi === "/") {
    result = number1 / number2
} else if (multi === "*") {
    result = number1 * number2
}else if (multi === "+") {
    result = number1 + number2
}else if (multi === "-") {
    result = number1 - number2
}


 
console.log(result);


if ((Number(number1) >0) && (Number(number2) ===0)) {
    console.log("mon code s'execute")
}