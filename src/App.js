import React, { useState, useRef } from "react";
import "./styles/styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      const trimmedName = name.trim();
      const errorName=("Enganayirikkanu Validation Inproper");
  
    if (trimmedName.length >= 6 && !trimmedName.includes(" ")) {
      setSubmittedName(trimmedName);
      console.log(trimmedName);
    } else {
      
      setSubmittedName(errorName);
    }
  };
  

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label>
        <input type="text" value={name} onChange={handleChange} ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleFocus}>Focus Input</button>
      <div id="data-container">
        <h3>Submitted Data:</h3>
        <p>{submittedName}</p>
      </div>
    </div>
  );
}
