import { NavLink } from 'react-router-dom'
import css from './navlink.module.css'

const Link = (props) => {
    return (
        <div className={css.main}>
            <NavLink to={props.to} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}

export default Link