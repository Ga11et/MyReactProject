import React from 'react'
import css from './message.module.css'

type propsType = {
    author: string
    message: string
}

const Message: React.FC<propsType> = (props) => {
    if (props.author === "you") return (
        <div className={`${css.main} ${css.you}`}>
            <div>
                <p>{props.message}</p>
                <p className={css.undertext}>{props.author}</p>
            </div>
        </div>
    )
    else return (
        <div className={`${css.main}`}>
            <div>
                <p>{props.message}</p>
                <p className={css.undertext}>{props.author}</p>
            </div>
        </div>
    )
}


export default Message