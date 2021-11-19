import css from './post.module.css'
import pic from './miku.jpg'
import React from 'react'

type propsType = {
    message: string
}

let Post: React.FC<propsType> = (props) => {
    return (
        <div className={css.item}>
            <img src={pic} alt="" />
            <p>{props.message}</p>
        </div>
    )
}

export default Post