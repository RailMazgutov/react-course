import styles from './InvestmentForm.module.css'

const InvestmentForm = (props) => {
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    const formResetHandler = (event) => {
        console.log('reset');
    }

    const currentSavingsChangeHandler = (event) => {

    }

    const yearlyContributionChangeHandler = (event) => {

    }

    const expectedReturnChangeHandler = (event) => {

    }

    const durationChangeHandler = (event) => {

    }

    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={currentSavingsChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler}/>
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={expectedReturnChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={durationChangeHandler}/>
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={formResetHandler}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default InvestmentForm;
