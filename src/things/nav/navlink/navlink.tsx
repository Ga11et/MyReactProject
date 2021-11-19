import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './navlink.module.css'

type propsType = {
    to: string
    name: string
}

const Link: React.FC<propsType> = (props) => {
    return (
        <div className={css.main}>
            <NavLink to={props.to} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}

export default Link