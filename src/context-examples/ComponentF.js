import React, { Component } from 'react'
import { userConsumer } from './UserContext'


class ComponentF extends Component {
    render() {
        return (
            <userConsumer>
                {
                    username => {
                            return <h2>Hello {username}</h2>
                    }
                }
            </userConsumer>
        )
    }
}

export default ComponentF
