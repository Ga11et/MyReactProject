import css from './posts.module.css'
import Post from './Post/post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../component/validatior/valodator'
import { ErrorSpan } from '../../component/error/error'



const Posts = (props) => {
    let postComponents = props.posts
        .map(el => <Post key={el.id} message={el.message} />)

    const submit = (data) => {
        props.createNewPost(data.writePost)
    }

    return (
        <div className={css.item}>
            <PostsFormRedux onSubmit={submit}/>
            <div className={css.swap}>
                {postComponents}
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)

const PostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="writePost" component={Textarea} validate={[required, maxLength30]}/><br />
            <button>Send</button>
        </form>
            )
}

const Textarea = ({input, meta, ...props}) => {
    const haveError = meta.error && meta.touched
    return (
        <div className={haveError ? css.error : ""} >
            <textarea {...input} {...props}  />
            {haveError && <ErrorSpan content={meta.error} />}   
        </div>
    )
}

const PostsFormRedux = reduxForm({
    form: "posts"
})(PostsForm)

export default Posts

