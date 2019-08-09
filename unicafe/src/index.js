import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



    return (
        <div>
            <h1>give feedback</h1>

            <Button click={() => setGood(good + 1)} text='good' />
            <Button click={() => setNeutral(neutral + 1)} text='neutral' />
            <Button click={() => setBad(bad + 1)} text='bad' />

            <h1>statistics</h1>

            <Statistics states={{ good, neutral, bad }} />

        </div>
    )
}

const Button = (props) => {



    return (
        <button onClick={props.click}>{props.text}</button>
    )
}

// Used in step 5
// const Statistic = (props) => {

//     return (
//         <p>{props.text} {props.value}</p>
//     )
// }

const Statistics = (props) => {

    // This is not the way to do this, but I'm going to do it anyway
    const { good, neutral, bad } = props.states


    let sum = good + neutral + bad
    let avg = (good - bad) / sum
    let pos = 100 * good / sum

    if (sum === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (


        //unicafe step 5
        // <div>

        //     <Statistic text='good' value={good} />
        //     <Statistic text='neutral' value={neutral} />
        //     <Statistic text='bad' value={bad} />
        //     <Statistic text='all' value={sum} />
        //     <Statistic text='average' value={avg} />
        //     <Statistic text='positive' value={pos} />
        // </div>

        //unicafe step 6
        <table>
            <tbody>

                <tr><td>good</td><td>{good}</td></tr>
                <tr><td>neutral</td><td>{neutral}</td></tr>
                <tr><td>bad</td><td>{bad}</td></tr>
                <tr><td>all</td><td>{sum}</td></tr>
                <tr><td>average</td><td>{avg}</td></tr>
                <tr><td>positive</td><td>{pos}</td></tr>

            </tbody>

        </table>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));


