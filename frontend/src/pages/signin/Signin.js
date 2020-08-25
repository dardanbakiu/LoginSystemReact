import React, { Component } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'
import '../style/General.css'

export default class Signin extends Component {

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
                    <Input type="text" label="Username" />
                    <Input type="password" label='Password' />
                    <Btn label="Sign In" />
                </div>
            </div>
        )
    }
}