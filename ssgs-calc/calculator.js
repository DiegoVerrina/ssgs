const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const greetings = [
  "Grazie per aver usato il calcolatore!", 
  "Alla prossima!", 
  "Buona giornata!", 
  "Torna presto!"
];

console.log("Benvenuto nella calcolatrice CLI!");
console.log("Operazioni disponibili: addizione, sottrazione, moltiplicazione, divisione");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

function divide(a, b) {
  if (b === 0) {
    throw new Error("Errore: Divisione per zero non consentita.");
  }
  return a / b;
}

function askOperation() {
  rl.question("Scegli un'operazione: ", (operation) => {
    if (!["addizione", "sottrazione", "moltiplicazione", "divisione"].includes(operation)) {
      console.log("Operazione non valida. Riprova.");
      return askOperation();
    }
    askNumbers(operation);
  });
}

function askNumbers(operation) {
  rl.question("Inserisci il primo numero: ", (num1) => {
    rl.question("Inserisci il secondo numero: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      if (isNaN(a) || isNaN(b)) {
        console.log("Errore: Devi inserire dei numeri validi.");
        return askNumbers(operation);
      }
      
      let result;
      try {
        switch (operation) {
          case "addizione":
            result = add(a, b);
            break;
          case "sottrazione":
            result = subtract(a, b);
            break;
          case "moltiplicazione":
            result = multiply(a, b);
            break;
          case "divisione":
            result = divide(a, b);
            break;
        }
        console.log(`Risultato: ${result}`);
      } catch (error) {
        console.log(error.message);
      }
      
      askContinue();
    });
  });
}

function askContinue() {
  rl.question("Vuoi eseguire un'altra operazione? (s/n): ", (answer) => {
    if (answer.
      toLowerCase() === "s") {
      askOperation();
    } else {
      console.log(greetings[Math.floor(Math.random() * greetings.length)]);
      rl.close();
    }
  });
}

askOperation();
