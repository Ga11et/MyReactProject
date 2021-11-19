import { ErrorSpan } from "../../error/error"
import css from './Input.module.css'
import cn from 'classnames'
import React from "react"

type metaType = {
    touched: boolean
    error: string
}
type propsType = {
    input: number
    meta: metaType
}

const Input: React.FC<propsType> = ({ input, meta, ...props }) => {
    const haveError = meta.touched && meta.error
    return <div className={css.main} >
        <input {...input} {...props} className={ cn({ [css.error]: haveError })} />
        {haveError ? <ErrorSpan content={meta.error} /> : null}
    </div>
}

export default Input