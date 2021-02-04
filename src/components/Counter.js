import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    increment(){
        /*this.state.count = this.state.count+1
        console.log(this.state.count)
        */
       this.setState({
           count : this.state.count+1
       },() => console.log("callback value :"+ this.state.count))
       
    }

    incrementFive(){
        this.setState({
            count : this.state.count+5
        },() => console.log("callback value :"+ this.state.count))
    }
    
    

    render() {
        return (
            <div>
                <h1>Count - {this.state.count} </h1>
                <button onClick={()=>this.increment()}>Increment by 1</button>
                <button onClick={()=>this.incrementFive()}>Increment by 5</button>
            </div>
        );
    }
}

export default Counter
