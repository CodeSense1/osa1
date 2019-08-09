import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const App = (props) => {

    const handleClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const vote = () => {
        let temp = [...votes]
        temp[selected]++

        votes = temp
    }



    const [selected, setSelected] = useState(0)

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>

            <button onClick={vote}>vote</button>
            <button onClick={handleClick}>next anecdote</button>

            <h2>Anecdote with most votes</h2>

            <MostPopularAnecdote selected={selected} />
        </div>
    )
}

const MostPopularAnecdote = (props) => {

    let index = votes.indexOf(Math.max(...votes))

    return (

        <div>

            <p> {anecdotes[index]} </p>
            <p> has {votes[index]} votes</p>

        </div>
    )
}



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let votes = Array(anecdotes.length).fill(0) // Initialize empty array


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)