import React from 'react'
import { TextField } from '@material-ui/core'

export default class Inputusername extends React.Component {


    render() {

        return (
            <div style={{margin:'1% 0', display:'flex', justifyContent:'center'}}>
                <TextField
                    id="standard-password-input"
                    label={this.props.label}
                    type={this.props.type}
                    autoComplete="current-password"
                />
            </div>
        )
    }
} 