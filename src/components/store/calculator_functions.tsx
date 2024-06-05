export function calculateArrayWithD(array: (number | string)[]) {
  let result = 0;
  let currentOperator = "+";

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (typeof currentItem === "string") {
      if (currentItem.startsWith("D")) {
        const num = parseInt(currentItem.substring(1));

        let count = 1;
        if (i > 0 && typeof array[i - 1] === "number") {
          count = array[i - 1] as number;
          result -= count;
        }

        for (let j = 0; j < count; j++) {
          result = operate(
            result,
            currentOperator,
            Math.floor(Math.random() * num + 1)
          );
        }
      } else if (
        currentItem === "+" ||
        currentItem === "-" ||
        currentItem === "/" ||
        currentItem === "*"
      ) {
        currentOperator = currentItem;
      }
    } else if (typeof currentItem === "number") {
      let nextIndex = i + 1;
      let currentNumber = currentItem;

      while (nextIndex < array.length && typeof array[nextIndex] === "number") {
        currentNumber = currentNumber * 10 + (array[nextIndex] as number);
        nextIndex++;
      }
      i = nextIndex - 1;

      result = operate(result, currentOperator, currentNumber);
    }
  }

  return result;
}

export function calculateMinimumRoll(array: (string | number)[]) {
  let result = 0;
  let currentOperator = "+";
  let currentTimes = 1;

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (typeof currentItem === "string") {
      if (currentItem.startsWith("D")) {
        for (let j = 0; j < currentTimes; j++) {
          result = operate(result, currentOperator, 1);
        }

        currentTimes = 1;
      } else if (
        currentItem === "+" ||
        currentItem === "-" ||
        currentItem === "/" ||
        currentItem === "*"
      ) {
        currentOperator = currentItem;
      }
    } else if (typeof currentItem === "number") {
      let nextIndex = i + 1;
      currentTimes = currentItem;

      while (nextIndex < array.length && typeof array[nextIndex] === "number") {
        currentTimes = currentTimes * 10 + (array[nextIndex] as number);
        nextIndex++;
      }
      i = nextIndex - 1;
    }
  }

  return result;
}

export function calculateMaximumRoll(array : (string | number)[]) {
  let result = 0;
  let currentOperator = "+";
  let currentTimes = 1;

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (typeof currentItem === "string") {
      if (currentItem.startsWith("D")) {
        const num = parseInt(currentItem.substring(1));

        for (let j = 0; j < currentTimes; j++) {
          result = operate(result, currentOperator, num);
        }

        currentTimes = 1;
      } else if (
        currentItem === "+" ||
        currentItem === "-" ||
        currentItem === "/" ||
        currentItem === "*"
      ) {
        currentOperator = currentItem;
      }
    } else if (typeof currentItem === "number") {
      let nextIndex = i + 1;
      currentTimes = currentItem;

      while (nextIndex < array.length && typeof array[nextIndex] === "number") {
        currentTimes = currentTimes * 10 + (array[nextIndex] as number);
        nextIndex++;
      }
      i = nextIndex - 1;
    }
  }

  return result;
}

function operate(a:number, operator:string, b:number) {
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
      throw new Error("Invalid operator");
  }
}
