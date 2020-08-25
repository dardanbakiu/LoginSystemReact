import React, { Component } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'
import axios from 'axios'

export default class Signup extends Component {
    state = {
        username: null,
        password: null,
        repeatPassword: null,
        email: null
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

    onRepeatPasswordChange = (e) => {
        this.setState({
            repeatPassword: e.target.value
        })
    }

    inputValidation = (username, email, password, repeatPw) => {
        let usernameLength = username.length
        let emailLength = email.length
        let passwordLength = password.length
        let repeatPwLength = repeatPw.length

        let isValid = true

        //kjo nuk eshte kry hala, kerko per me validu ni forme
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onSignUpClick = () => {
        const url = 'http://localhost:3001'
        axios.post(`${url}/api/signup/`, {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
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
                    <h1 style={{ textAlign: 'center' }}>SIGN UP</h1>
                    <Input type="text" label="Username" Change={this.onUsernameChange} />
                    <Input type="email" label="Email" Change={this.onEmailChange} />
                    <Input type="password" label='Password' Change={this.onPasswordChange} />
                    <Input type="password" label='Repeat Password' Change={this.onRepeatPasswordChange} />
                    <Btn label="Sign Up" Click={this.onSignUpClick} />
                </div>
            </div>
        )
    }
}
