import css from './error.module.css'

export const ErrorSpan = (props) => {
    return <span className={css.item} {...props}>{props.content}</span>
}