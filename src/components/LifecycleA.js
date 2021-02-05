import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

constructor(props) {
    super(props)

    this.state = {
         name : "Vishwas"
    }
    console.log("Lifecycle A constructor")
}

static getDerivedStateFromProps(props, state){
    console.log("Lifecycle A getDerivedFromProps method")
    return null;
}

componentDidMount(){
    console.log("Lifecycle A componentDidMount method")
}

    render() {
        console.log("Lifecycle A render method")
        return (
            <div>
                <div>Lifecycle A</div>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
