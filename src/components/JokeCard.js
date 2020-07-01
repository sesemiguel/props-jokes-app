import React from "react"

function JokeCard(props){

    const hasQuestion = () => {
        if (props.question !== undefined){
            return 'Question: ' + props.question
        }
    }

    return(
        <div className="joke-card">
            {console.log(props)}
            <h3>{hasQuestion()}</h3>
            <h2>Punchline: {props.punchline}</h2>
            <hr/>
        </div>
    )
}

export default JokeCard