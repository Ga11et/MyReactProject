import { NavLink } from 'react-router-dom'
import css from './person.module.css'

const Person = (props) => {
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