import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
    render() {
        return <button type="submit">
            {this.props.label}
        </button>
    }
}

ReactDOM.render(<Button label = 'send'/>)
document.getElementById('app')