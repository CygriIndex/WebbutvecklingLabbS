import React from 'react'
import ReactDOM from 'react-dom'

class Dice extends React.PureComponent {

  render() {

    return (
      <button style={{ backgroundColor: this.props.themeColor }} className="dice" onClick={() => this.props.onClick(this.props.diceIndex)}>
        {this.props.value}
      </button>
    )
  }
}

function calculateDiceValue() {
  let diceValues = Math.floor(Math.random()*6)+1
  console.log(diceValues);
  
  return diceValues
}

function calculateDiceArray() {
  let diceValArray = []
  for (let i = 0; i < 6; i++) {
    diceValArray.push(calculateDiceValue())
  }
  return diceValArray
}

class Board extends React.Component {

  renderDice(index,diceVal, color) {
    return <Dice value={diceVal} themeColor={color} onClick={this.props.onDiceClick} diceIndex={index} />
  }

  render() {
    let values = this.props.values;

    return (
      <div>
        {this.renderDice(0,values[0], "white")}
        {this.renderDice(1,values[1], "blue")}
        {this.renderDice(2,values[2], "yellow")}
        {this.renderDice(3,values[3], "red")}
        {this.renderDice(4,values[4], "white")}
        {this.renderDice(5,values[5], "green")}
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: calculateDiceArray()
    }
  }

  handleDiceClick(dice) {
    this.setState((state) => {
      let copycat = [...state.values]
      copycat[dice] = calculateDiceValue()
      return {values: copycat}
    })
    
  }

  handleClick() {
    this.setState({values: calculateDiceArray()})
  }

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <Board values={this.state.values} onDiceClick={(i) => this.handleDiceClick(i)} />
        </div>
        <button className="ShuffleBtn" onClick={() => this.handleClick()}>Shuffle All</button>
      </div>
    )

  }

}


ReactDOM.render(
  <Game />,
  document.getElementById('app')
)