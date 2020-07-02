import React from "react"
import JokeCard from "./components/JokeCard.js"
import jokesData from './data/jokesData.js'

class App extends React.Component {

    render() {

        const jokeComponents = jokesData.map((jokeData) => <JokeCard key={jokeData.id} question={jokeData.question} punchline={jokeData.punchLine} />)

        return (
            <>
                {jokeComponents}
            </>
        )
    }
}

export default App