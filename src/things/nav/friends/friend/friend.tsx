import React from 'react'
import css from './friend.module.css'

type propsType = {
    img: string
    name: string
}

const Friend: React.FC<propsType> = (props) => {
    return (
        <div className={css.main}>
            <img src={props.img} alt="avatar" />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend