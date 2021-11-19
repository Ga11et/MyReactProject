import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './person.module.css'

type propsType = {
    url: string
    img: string
    name: string
}

const Person: React.FC<propsType> = (props) => {
    return (
        <div className={css.main}>
            <NavLink to={"/dialogs/" + props.url} activeClassName={css.active}>
                <img src={props.img} alt={props.url}/>
                <label>{props.name}</label>
            </NavLink>
        </div>
    )
}



export default Person