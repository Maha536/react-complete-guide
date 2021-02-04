import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggedIn : true
    }
}

    login(){
        this.setState(
           {isLoggedIn : true} 
        )
    }

    logout(){
        this.setState(
           {isLoggedIn : false} 
        )
    }


    render() {
        
            let message
                if(this.state.isLoggedIn){
                    message = <div>Welcome Vishwas</div>
                }else{
                    message = <div>Welcome Guest</div>
                }
            return (
                <div>
                    {message}
                    <div>
                        <button onClick={this.login.bind(this)}>Login</button>
                    </div>
                    <div>
                        <button onClick={this.logout.bind(this)}>Logout</button>
                    </div>
                </div>
            )
        
    }
}

export default UserGreeting
