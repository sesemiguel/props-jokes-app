import React from "react"

class JokeCard extends React.Component {
    render() {

        const hasQuestion = () => {
            if (this.props.question !== undefined) {
                return 'Question: ' + this.props.question
            }
        }

        return (
            <div className="joke-card">
                <h3>{hasQuestion()}</h3>
                <h2>Punchline: {this.props.punchline}</h2>
                <hr />
            </div>
        )
    }
}

export default JokeCard