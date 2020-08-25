import React from 'react'
import { Button } from '@material-ui/core'

export default class Btn extends React.Component {
    render() {
        return (
            <div style={{margin:'2% 0', display:'flex', justifyContent:'center'}}>
                <Button variant="contained" color="primary">
                    {this.props.label}
                </Button>
            </div>
        )
    }
}



