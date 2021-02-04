import React, { Component } from 'react'

class EventBind extends Component {

constructor(){
    super()
    this.state = {
        message : "Hello"
    }
    this.changeText = this.changeText.bind(this)
}

changeText(){
    this.setState({
        message : "Good Bye"
    })
}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
              { /* <button onClick={(this.changeText.bind(this))}>CLICK</button>
                <button onClick={()=>this.changeText()}>CLICK</button>

        */}
                <button onClick={this.changeText}>CLICK</button>
            </div>
        )
    }
}

export default EventBind
