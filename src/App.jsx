import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //this will convert this into a number
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter a valid duration (1 year or more).
        </p>
      )}

      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
