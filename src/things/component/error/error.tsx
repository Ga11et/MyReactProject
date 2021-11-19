import React from 'react'
import css from './error.module.css'

type propsType = {
    content: string
}

export const ErrorSpan: React.FC<propsType> = (props) => {
    return <span className={css.item} {...props}>{props.content}</span>
}