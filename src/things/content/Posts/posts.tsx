import css from './posts.module.css'
import Post from './Post/post'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../../redux/redux-state'
import { ContentRedActions } from '../../../redux/contentReducer'
import { Field, Form, Formik } from 'formik'
import { Button } from 'antd'


export const Posts: React.FC = (props) => {

    const posts = useSelector((state: AppStateType) => state.contentPage.posts)

    const dispatch = useDispatch()

    const postComponents = posts
        .map(el => <Post key={el.id} message={el.message} />)

    return (
        <div className={css.item}>
            <Formik
                initialValues={{ newPost: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(ContentRedActions.createNewPost(values.newPost))
                    setSubmitting(false);
                }} >
                {({ isSubmitting }) => (
                    <Form className={css.main}>
                        <Field component='textarea' name='newPost' />
                        <Button type="default" htmlType='submit' disabled={isSubmitting}>
                            Send
                        </Button>
                    </Form>
                )}
            </Formik>
            <div className={css.swap}>
                {postComponents}
            </div>
        </div>
    )
}
