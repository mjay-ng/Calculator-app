import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // Add values to screen
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear screen
  const clearInput = () => {
    setInput("");
  };

  // Calculate result
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <input
          type="text"
          value={input}
          readOnly
          style={styles.display}
        />

        <div style={styles.buttons}>
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f4f4",
  },

  calculator: {
    background: "#41431B",
    padding: "20px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "320px",
  },

  display: {
    width: "90%",
    height: "60px",
    marginBottom: "10px",
    fontSize: "24px",
    textAlign: "right",
    padding: "10px",
    background: "#AEB784",
  },

  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    background: "#41431B",
  },
};

export default App;