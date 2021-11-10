import css from './post.module.css'
import pic from './miku.jpg'

let Post = (props) => {
    return (
        <div className={css.item}>
            <img src={pic} alt="" />
            <p>{props.message}</p>
        </div>
    )
}

export default Post