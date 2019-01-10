import React from "react"

export default class Compot extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            num: Math.round(Math.random()*100)
        }
    }



    makeCompotBa() {
        this.setState(currentState => { return {num: currentState.num*Math.round(Math.random()*1000)}})
        console.log('What are you waiting for ???')
    }

    render() {
        return (
            <button onClick={() => this.makeCompotBa()}>
                {
                    Math.random() < 0.5 ? (
                        <h1>HELLO</h1>
                    ) : (
                        <h3>NOLO</h3>
                    )
                }
                My number: {this.state.num}
            </button>
        )
    }
}