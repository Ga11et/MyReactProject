import { NavLink } from 'react-router-dom'
import css from './header.module.css'

let Header = (props) => {
    return (
        <div className={css.main}>
            <img src={props.vkIcon} alt='vk_icon'></img>
            <div className={css.loginCont}>
                <div>
                    {props.loginInfo.isAuth
                        ? <NavLink to={`/profile/${props.loginInfo.userId}`}>{props.loginInfo.userName}</NavLink>
                        : <NavLink to={`/login`}>login</NavLink>}
                </div>
            </div>
        </div>
    )
}

export default Header