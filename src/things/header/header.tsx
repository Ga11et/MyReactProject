import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-state'
import css from './header.module.css'



export const LoginInfoInHeader: React.FC = (props) => {

    const loginInfo = useSelector((state: AppStateType) => state.auth)

    return <>
        {loginInfo.isAuth
            ? <NavLink className={css.link} to={`/profile/${loginInfo.userId}`} >{loginInfo.userName}</NavLink> 
            : <NavLink className={css.link} to={`/login`} >login</NavLink>
        }
    </>
}
