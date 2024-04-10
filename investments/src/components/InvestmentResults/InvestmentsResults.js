import styles from './InvestmentsResults.module.css'

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
          {props.items.map(item => 
              <tr>
                  <td>YEAR NUMBER</td>
                  <td>TOTAL SAVINGS END OF YEAR</td>
                  <td>INTEREST GAINED IN YEAR</td>
                  <td>TOTAL INTEREST GAINED</td>
                  <td>TOTAL INVESTED CAPITAL</td>
              </tr>
          )}
      </tbody>
    </table>
  );
}

export default InvestmentsResults;
