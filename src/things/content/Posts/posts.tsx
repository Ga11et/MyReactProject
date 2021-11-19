import css from './posts.module.css'
import Post from './Post/post'
import React from 'react'
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form'
import { maxLengthCreator, required } from '../../component/validatior/valodator'
import { ErrorSpan } from '../../component/error/error'
import { PostType } from '../../../types/types'

type propsType = {
    posts: Array<PostType>

    createNewPost: (text: string) => void
}

const Posts: React.FC<propsType> = (props) => {
    let postComponents = props.posts
        .map(el => <Post key={el.id} message={el.message} />)

    const submit = (data: any) => {
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

// Redux-form

const maxLength30 = maxLengthCreator(30)
type IUser = {

}
type IProps = {

}

const PostsForm: React.FC<InjectedFormProps<IUser, IProps> & IProps> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="writePost" component={Textarea} validate={[required, maxLength30]}/><br />
            <button>Send</button>
        </form>
            )
}



const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const haveError = meta.error && meta.touched
    return (
        <div className={haveError ? css.error : ""} >
            <textarea {...input} {...props}  />
            {haveError && <ErrorSpan content={meta.error} />}   
        </div>
    )
}

const PostsFormRedux = reduxForm<IUser, IProps>({
    form: "posts"
})(PostsForm)

export default Posts

