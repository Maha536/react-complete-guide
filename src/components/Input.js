import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)
        this.userNameRef = React.createRef()
    }
    
    focusInput(){
        this.userNameRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.userNameRef}/>
            </div>
        )
    }
}

export default Input
