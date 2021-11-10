import { ErrorSpan } from "../../error/error"
import css from './Input.module.css'
import cn from 'classnames'

const Input = ({ input, meta, ...props }) => {
    const haveError = meta.touched && meta.error
    return <div className={css.main} >
        <input {...input} {...props} className={ cn({ [css.error]: haveError })} />
        {haveError ? <ErrorSpan content={meta.error} /> : null}
    </div>
}

export default Input