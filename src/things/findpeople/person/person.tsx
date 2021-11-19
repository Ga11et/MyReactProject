import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './person.module.css'

type propsType = {
    userId: number
    avatar: string
    followed: boolean
    isButtonLoading: Array<number>
    name: string
    status: string
    country: string
    city: string

    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

const Person: React.FC<propsType> = (props) => {
    return (
        <section className={css.body}>
            <div className={css.avatar}>
                <NavLink to={`/profile/${props.userId}`} >
                    <img src={props.avatar} alt="avatar" />
                </NavLink>
                {(props.followed)
                    ? <button disabled={props.isButtonLoading.some( el => el === props.userId)} 
                            onClick={() => props.unFollow(props.userId)}>Unfollow</button>
                    : <button disabled={props.isButtonLoading.some( el => el === props.userId)} 
                            onClick={() => props.follow(props.userId)}>Follow</button>}
            </div>
            <div className={css.main}>
                <div className={css.name}>
                    <NavLink to={`/profile/${props.userId}`} >
                        <p>{props.name}</p>
                    </NavLink>
                    <p>{props.status}</p>
                </div>
                <div className={css.location}>
                    <p>{props.country}</p>
                    <p>{props.city}</p>
                </div>
            </div>
        </section>
    )
}

export default Person