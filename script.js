class Calculator {
  constructor() {
    this.allClear();
  }

  allClear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    let a = String(this.currentOperand);
    a = a.slice(0, a.length - 1);
    this.currentOperand = a;
  }

  addNumber(number) {
    if (number == "." && this.currentOperand.includes(".")) {
      return;
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  addOperation(operation) {
    if (this.currentOperand == "") {
      return;
    }
    if (this.previousOperand != "") {
     this.compute();
    }
    
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
   
    
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);

    switch (this.operation) {
      case "+":
        result = prev + curr;
        break;

      case "-":
        result = prev - curr;
        break;

      case "*":
        result = prev * curr;
        break;

      case "/":
        result = prev / curr;
        break;
    }
    this.currentOperand = result;
    
  }

  updateDisplay(choice) {
    switch (choice) {
      case 1:
        currentSection.innerHTML = this.currentOperand;
        previousSection.innerHTML = this.previousOperand;
        break;

      case 2:
        currentSection.innerHTML = this.currentOperand;
        previousSection.innerHTML = this.previousOperand;
        break;

      case 3:
        currentSection.innerHTML = this.currentOperand;
        previousSection.innerHTML = "";
        break;

      case 4:
        currentSection.innerHTML = "";
        previousSection.innerHTML = "";
        break;

      case 5:
        currentSection.innerHTML = this.currentOperand;
        break;

    }
  }
}

const numberButtons = document.querySelectorAll(".numbers");
const operationButtons = document.querySelectorAll(".operations");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const allClearButton = document.querySelector(".all-clear");
const previousSection = document.querySelector(".previous");
const currentSection = document.querySelector(".current");

const cal = new Calculator();

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cal.addNumber(button.textContent);
    cal.updateDisplay(1);
  });
});

operationButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    cal.addOperation(opButton.textContent);
    cal.updateDisplay(2);
  });
});

equalsButton.addEventListener("click", () => {
  cal.compute();
  cal.updateDisplay(3);
});

allClearButton.addEventListener("click", () => {
  cal.allClear();
  cal.updateDisplay(4);
});

deleteButton.addEventListener("click", () => {
  cal.delete();
  cal.updateDisplay(5);
});
