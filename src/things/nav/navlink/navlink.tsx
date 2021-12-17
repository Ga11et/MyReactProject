import React from 'react'
import { NavLink } from 'react-router-dom'

type propsType = {
    to: string
    name: string
}

const Link: React.FC<propsType> = (props) => {
    return (
        <div>
            <NavLink to={props.to} >{props.name}</NavLink>
        </div>
    )
}

export default Link