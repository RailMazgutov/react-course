import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const totalMax = Math.max(...props.dataPoints.map(expense => expense.value))
    return <div className='chart'>
        {props.dataPoints.map(point =>
            <ChartBar
                key={point.label}
                value={point.value}
                max={totalMax}
                label={point.label}/>)}
    </div>
}

export default Chart;
