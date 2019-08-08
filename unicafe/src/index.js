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

            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>

            <h1>statistics</h1>

            <Stats good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

// const Button = (props) => {
//     const { text, clickFunc } = props
//     return (
//         <button onClick={clickFunc}>text</button>
//     )
// }

const Stats = (props) => {
    const { good, neutral, bad } = props
    let sum = good + neutral + bad
    let avg = (good + 0 * neutral + -1 * bad) / sum;
    // Define average here! Current is messed up

    let positive = 100 * good / sum
    if (sum === 0) {
        return (
            <p>No feedback  given</p>
        )
    }
    return (

        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {sum}</p>

            <p>average {avg}</p>
            <p>positive {positive}%</p>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'));


