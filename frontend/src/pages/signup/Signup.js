import React, { Component } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'

export default class Signup extends Component {

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
                    <h1 style={{textAlign:'center'}}>SIGN UP</h1>
                    <Input type="text" label="Username" />
                    <Input type="email" label="Email" />
                    <Input type="password" label='Password' />
                    <Input type="password" label='Repeat Password' />
                    <Btn label="Sign Up" />
                </div>
            </div>
        )
    }
}
