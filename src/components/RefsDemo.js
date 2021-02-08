import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.cbRef = null
        this.setCbref = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
            console.log(this.setCbref)
        }

       // console.log(this.inputRef)
        //this.inputRef.current.focus()
        //console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
        alert(this.setCbref.value)
        
    }
    

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} placeholder='username'/>
                <input type='text' ref={this.setCbref} placeholder='password'/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
