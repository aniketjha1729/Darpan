import React, { useState } from "react";
import step from "./step.mp3";
import useSound from "use-sound";
import "./cal.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [stepActive] = useSound(step);

  const handleClick = (e) => {
    stepActive();
    setResult(result.concat(e.target.name));
  };

  const backspace = () => {
    stepActive();
    setResult(result.slice(0, -1));
  };

  const clear = () => {
    stepActive();
    setResult("");
  };

  const calculate = () => {
    stepActive();
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const sqrt = () => {
    stepActive();
    try {
      setResult(Math.sqrt(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const pow = () => {
    stepActive();
    try {
      setResult(Math.pow(result, 2).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const log = () => {
    stepActive();
    try {
      setResult(Math.log10(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const lan = () => {
    stepActive();
    try {
      setResult(Math.log(result).toString());
    } catch (error) {}
  };

  const fact = () => {
    stepActive();
    try {
      let n = result;
      let answer = 1;
      if (n === 0 || n === 1) {
        answer = 1;
      } else {
        for (var i = n; i >= 1; i--) {
          answer = answer * i;
        }
      }
      setResult(answer.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const sin = () => {
    stepActive();
    try {
      setResult(Math.sin((result * Math.PI) / 180).toString());
    } catch (error) {}
  };

  const cos = () => {
    stepActive();
    try {
      setResult(Math.cos((result * Math.PI) / 180).toString());
    } catch (error) {}
  };

  const tan = () => {
    stepActive();
    try {
      setResult(Math.tan((result * Math.PI) / 180).toString());
    } catch (error) {}
  };

  return (
    <div className="cal-container">
      <div className="calc-app">
        <from>
          <input type="text" className="finalResult" value={result} />
          <div className="keypad">
            <input
              className="button"
              type="button"
              value="7"
              name="7"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="8"
              name="8"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="9"
              name="9"
              onClick={handleClick}
            />
            <input
              type="button"
              value="AC"
              x
              className="actionButton"
              onClick={clear}
            />
            <input
              type="button"
              value="DEL"
              className="actionButton"
              onClick={backspace}
            />
            <input
              className="button"
              type="button"
              value="4"
              name="4"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="5"
              name="5"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="6"
              name="6"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="-"
              name="-"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="+"
              name="+"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="3"
              name="3"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="2"
              name="2"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="1"
              name="1"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="*"
              name="*"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="/"
              name="/"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="0"
              name="0"
              onClick={handleClick}
            />
            <input
              className="button"
              type="button"
              value="."
              style={{ fontWeight: "700" }}
              onClick={handleClick}
              name="."
            />
            <input
              className="button"
              type="button"
              value="&#8730;"
              onClick={sqrt}
            />
            <input className="button" type="button" value="x!" onClick={fact} />
            <input
              className="button"
              type="button"
              value="x&#178;"
              onClick={pow}
            />
            <input className="button" type="button" value="log" onClick={log} />
            <input className="button" type="button" value="ln" onClick={lan} />
            <input className="button" type="button" value="sin" onClick={sin} />
            <input className="button" type="button" value="cos" onClick={cos} />
            <input className="button" type="button" value="tan" onClick={tan} />
            <input
              className="button"
              type="button"
              value="Result"
              id="result"
              onClick={calculate}
            />
          </div>
        </from>
      </div>
    </div>
  );
};

export default Calculator;
