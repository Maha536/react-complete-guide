import React, { Component } from 'react'

class LifecycleB extends Component {

constructor(props) {
    super(props)

    this.state = {
         name : "Vishwas"
    }
    console.log("Lifecycle B constructor")
}

static getDerivedStateFromProps(props, state){
    console.log("Lifecycle B getDerivedFromProps method")
    return null;
}

componentDidMount(){
    console.log("Lifecycle B componentDidMount method")
}

    render() {
        console.log("Lifecycle B render method")
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
