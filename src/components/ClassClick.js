import React, { Component } from 'react'

class ClassClick extends Component {
    handler(){
        console.log("Click Me Done!!!")
    }

    render() {
        return (
            <div>
                <button onClick={this.handler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
