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

//Updating lifecycle method
shouldComponentUpdate(){
    console.log("Lifecycle A shouldComponentUpdate method")
    return true;
}

//Updating lifecycle method
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Lifecycle A getSnapShotBeforeUpdate method")
    return null;
}

//Updating lifecycle method
componentDidUpdate(){
    console.log("Lifecycle A componentDidMount method");
}

changeState(){
    this.setState({
        name : 'lakshman'
    })
}

    render() {
        console.log("Lifecycle A render method")
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState.bind(this)}>Chnage State</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
