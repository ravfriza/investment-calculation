import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ investmentInfo }) {
  const investmentResult = calculateInvestmentResults(investmentInfo);

  const totalInterest = investmentResult.reduce((acc, curr) => {
    const lastTotal = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(lastTotal + curr.interest);
    return acc;
  }, []);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResult.map((result, index, data) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest[index])}</td>
            <td>
              {formatter.format(result.valueEndOfYear - totalInterest[index])}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
