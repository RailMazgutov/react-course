import styles from './InvestmentsResults.module.css'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const InvestmentYear = (props) => {
  return (
  <tr>
    <td>{props.item.year}</td>
    <td>{formatter.format(props.item.savingsEndOfYear)}</td>
    <td>{formatter.format(props.item.yearlyInterest)}</td>
    <td>{formatter.format(props.item.totalInterest)}</td>
    <td>{formatter.format(props.item.savingsEndOfYear - props.item.totalInterest)}</td>
  </tr>);
}

const InvestmentsResults = (props) => {
  if (props.items.length === 0) {
    return <p>No investments to show.</p>;
  }
  return (
      <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
          {props.items.map(item => <InvestmentYear key={item.year} item={item}/>)}
      </tbody>
    </table>
  );
}

export default InvestmentsResults;
