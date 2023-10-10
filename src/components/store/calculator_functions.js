export function calculateArrayWithD(array) {
  let result = 0;
  let currentOperator = "+";

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (typeof currentItem === "string") {
      if (currentItem.startsWith("D")) {
        // Extract the number following 'D' and convert it to an integer
        const num = parseInt(currentItem.substring(1));

        let count = 1;
        // Check if there's a preceding number to determine count
        if (i > 0 && typeof array[i - 1] === "number") {
          count = array[i - 1];
        }

        // Generate random numbers 'count' times and add them to the result
        for (let j = 0; j < count; j++) {
          result = operate(
            result,
            currentOperator,
            Math.floor(Math.random() * num)
          );
        }
      } else if (
        currentItem === "+" ||
        currentItem === "-" ||
        currentItem === "/" ||
        currentItem === "*"
      ) {
        // Set the current operator
        currentOperator = currentItem;
      }
    } else if (typeof currentItem === "number") {
      // Check if the next value is also a number (not an operator)
      let nextIndex = i + 1;
      let currentNumber = currentItem;

      while (nextIndex < array.length && typeof array[nextIndex] === "number") {
        currentNumber = currentNumber * 10 + array[nextIndex];
        nextIndex++;
      }
      i = nextIndex - 1; // Update the index

      // Perform the operation based on the current operator
      result = operate(result, currentOperator, currentNumber);
    }
  }

  return result;
}
export function calculateMinimumRoll(array) {
  let result = 0;
  let currentOperator = "+";
  let currentTimes = 1;

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (typeof currentItem === "string") {
      if (currentItem.startsWith("D")) {
        // Treat "D#" as 1 and perform the operation based on the current operator


        for (let j = 0; j < currentTimes; j++) {
          result = operate(result, currentOperator, 1);
        }

        // Reset currentTimes to 1
        currentTimes = 1;
      } else if (
        currentItem === "+" ||
        currentItem === "-" ||
        currentItem === "/" ||
        currentItem === "*"
      ) { 
        // Set the current operator
        currentOperator = currentItem;
      }
    } else if (typeof currentItem === "number") {
      // Check if the next value is also a number (not an operator)
      let nextIndex = i + 1;
      currentTimes = currentItem;

      while (nextIndex < array.length && typeof array[nextIndex] === "number") {
        currentTimes = currentTimes * 10 + array[nextIndex];
        nextIndex++;
      }
      i = nextIndex - 1; // Update the index
    }
  }

  return result;
}
export function calculateMaximumRoll(array) {
  let result = 0;
  let currentOperator = "+";
  let currentTimes = 1;

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (typeof currentItem === "string") {
      if (currentItem.startsWith("D")) {
        // Extract the number following 'D' and convert it to an integer
        const num = parseInt(currentItem.substring(1));

        // Treat "D#" as the provided number and perform the operation based on the current operator
        for (let j = 0; j < currentTimes; j++) {
          result = operate(result, currentOperator, num);
        }

        // Reset currentTimes to 1
        currentTimes = 1;
      } else if (
        currentItem === "+" ||
        currentItem === "-" ||
        currentItem === "/" ||
        currentItem === "*"
      ) {
        // Set the current operator
        currentOperator = currentItem;
      }
    } else if (typeof currentItem === "number") {
      // Check if the next value is also a number (not an operator)
      let nextIndex = i + 1;
      currentTimes = currentItem;

      while (nextIndex < array.length && typeof array[nextIndex] === "number") {
        currentTimes = currentTimes * 10 + array[nextIndex];
        nextIndex++;
      }
      i = nextIndex - 1; // Update the index
    }
  }

  return result;
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return a;
  }
}
