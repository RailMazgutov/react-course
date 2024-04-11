import InvestmentsResults from './components/InvestmentResults/InvestmentsResults';
import InvestmentForm from "./components/InestmentForm/InvestmentForm";
import Header from "./components/Header/Header"
import {useState} from "react";

function App() {
  const [investmentsResults, setInvestmentResults] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: currentSavings - userInput.currentSavings - yearlyContribution * (i + 1)
      });
    }
    setInvestmentResults(yearlyData);
  };

  const resetHandler = () => {
    setInvestmentResults([]);
  }

  return (
    <div>
      <Header />
      <InvestmentForm onFormSubmit={calculateHandler} onFormReset={resetHandler}/>
      <InvestmentsResults items={investmentsResults}/>
    </div>
  );
}

export default App;
