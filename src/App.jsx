import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [investmentInfo, setInvestmentInfo] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInvestmentInfoChange = (e, investmentType) => {
    const value = e.target.value;

    setInvestmentInfo((prevInvestmentInfo) => {
      return {
        ...prevInvestmentInfo,
        [investmentType]: +value,
      };
    });
  };

  const isValidDuration = investmentInfo.duration > 0;

  return (
    <>
      <Header />
      <UserInput
        investmentInfo={investmentInfo}
        onChange={handleInvestmentInfoChange}
      />
      {isValidDuration && <Result investmentInfo={investmentInfo} />}
      {!isValidDuration && (
        <p className="center">Please enter valid duration data!</p>
      )}
    </>
  );
}

export default App;
