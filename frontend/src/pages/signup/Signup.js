import React, { Component } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'

export default class Signup extends Component {
    state = {
        username: null,
        password: null,
        repeatPassword: null,
        email: null
    }

    onUsernameChange = async (e) => {
        await this.setState({
            username: e.target.value
        })
    }

    onPasswordChange = async (e) => {
        await this.setState({
            password: e.target.value
        })
    }

    onRepeatPasswordChange = async (e) => {
        await this.setState({
            repeatPassword: e.target.value
        })
    }

    onEmailChange = async (e) => {
        await this.setState({
            email: e.target.value
        })
    }

    onSignUpClick = async () => {
        console.log(this.state)
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
