import React, { useState } from "react";
import {
  Wrapper,
  Container,
  Screen,
  Previous,
  Current,
  Button,
} from "./calculatorStyle";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");

  // func to display the button text on screen when a user clicks
  const appendValueHandler = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  //   func to delete text
  const deleteDigitHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  //   to clear screen
  const clearScreenHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevious("");
  };

  //   to choose an operator
  const chooseOperationHandler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(e.target.getAttribute("data"));
  };

  //  the equal to func
  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
  };

  //  func to evaluate result
  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <Wrapper>
      <Container>
        <Screen>
          <Previous>
            {previous} {operations}
          </Previous>
          <Current>{current === "" && previous === "" ? "0" : current}</Current>
        </Screen>

        <Button clear onClick={clearScreenHandler}>
          AC
        </Button>
        <Button onClick={deleteDigitHandler} del>
          DEL
        </Button>
        <Button data={"-"} onClick={appendValueHandler} operation>
          ±
        </Button>
        <Button data={"÷"} onClick={chooseOperationHandler} operation>
          ÷
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          {" "}
          9
        </Button>
        <Button data={"x"} operation onClick={chooseOperationHandler}>
          x
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button data={"+"} operation onClick={chooseOperationHandler}>
          +
        </Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button data={"-"} operation onClick={chooseOperationHandler}>
          -
        </Button>
        <Button data={"."} onClick={appendValueHandler} decimal>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>

        <Button data={"00"} onClick={appendValueHandler}>
          00
        </Button>
        <Button equals onClick={equalHandler}>
          =
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Calculator;
