/* eslint-disable no-eval */
import React, { useState } from "react";
import Display from "../Display/Display";
import { BsMoonFill, BsSun } from "react-icons/bs";

// set button values
const btnValues = [
  "C",
  "Del",
  "+/-",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const Wrapper = () => {
  //set intial calulator state
  const [calc, setCalc] = React.useState({
    input: "0",
    output: "",
    operator: "",
  });

  //togle dark mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  //handle calculator logic
  const handleClick = (e) => {
    //switch statement to handle button clicks
    switch (e.target.value) {
      case "C":
        setCalc({
          input: "0",
          output: "",
          operator: "",
        });
        break;
      case "Del":
        setCalc({
          ...calc,
          input: calc.input.slice(0, -1),
        });
        break;
      case "+/-":
        setCalc({
          ...calc,
          input: calc.input * -1,
        });
        break;
      case "/":
        setCalc({
          ...calc,
          input: calc.input + "/",
          operator: "/",
        });
        break;
      case "x":
        setCalc({
          ...calc,
          input: calc.input + "*",
          operator: "*",
        });
        break;
      case "-":
        setCalc({
          ...calc,
          input: calc.input + "-",
          operator: "-",
        });
        break;
      case "+":
        setCalc({
          ...calc,
          input: calc.input + "+",
          operator: "+",
        });
        break;
      case "=":
        setCalc({
          ...calc,
          //if result is a floating number, convert to 3 decimal places
          output: eval(calc.input).toString().includes(".") ? eval(calc.input).toFixed(3) : eval(calc.input),
          input: calc.input,
        });
        break;
      default:
        if (calc.input === "0") {
          setCalc({
            ...calc,
            input: e.target.value,
          });
        } else {
          setCalc({
            ...calc,
            input: calc.input + e.target.value,
          });
        }
    }
  };
  return (
    <div className="wrapper">
      <span onClick={toggleDarkMode} className="dark-mode-btn">
        {!darkMode ? <BsMoonFill /> : <BsSun />}
      </span>
      {/* toggle button */}
      <Display input={calc.input} output={calc.output} />
      <div className="buttons">
        {btnValues.map((btn, index) => {
          return (
            <button
              value={btn}
              onClick={handleClick}
              key={index}
              className={btn === "=" ? "buttons__equals" : "button__btn"}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Wrapper;
