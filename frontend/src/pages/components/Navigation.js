import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div style={{
            
        }}>
            <NavLink to='/' > Home </NavLink>
            <NavLink to='/signin' > Sign In </NavLink>
            <NavLink to='/signup' > Sign Up </NavLink>
        </div>
    )
}

export default Navigation