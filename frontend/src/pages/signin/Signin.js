import React, { Component } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'
import axios from 'axios'
import '../style/General.css'

export default class Signin extends Component {
    state = {
        username:null,
        password:null
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSignInClick = () => {
        const url = 'http://localhost:3001'
        axios.post(`${url}/api/signin/`, {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div style={{
                padding: '1%',
                backgroundColor: 'white',
                margin: '0 auto',
                width: '50%',
                borderRadius: '5px'
            }}>

                <div >
                    <h1 className="center">SIGN IN</h1>
                    <Input type="text" label="Username" Change={this.onUsernameChange} />
                    <Input type="password" label='Password' Change={this.onPasswordChange} />
                    <Btn label="Sign In" Click={this.onSignInClick} />
                </div>
            </div>
        )
    }
}