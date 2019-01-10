import React from "react"
import ReactDOM from "react-dom"
import Compot from './Compot'

function Card(props) {
    return  <div className="card">
                <h1>{props.title}</h1>
                <h3>{props.body}</h3>
            </div>
}

function List(props) {

    let cards = []

    for(let i = 0; i < 50; ++i){
        cards.push(<Card title="ZEROTH" style={{top: props.start + i*props.offset}} body="PRELOREM"/>)
    }

    return <div>
        {cards}
    </div>
}

ReactDOM.render(<Compot/> ,document.getElementById("app"))