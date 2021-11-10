import css from './friend.module.css'

const Friend = (props) => {
    return (
        <div className={css.main}>
            <img src={props.img} alt="avatar" />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend