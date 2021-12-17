import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthRedThunks } from '../../redux/authReducer'
import css from './login.module.css'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-state'
import { Field, Form, Formik } from 'formik'
import { Button } from 'antd'


const LoginPage: FC = (props) => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (isAuth) return <Redirect to="/profile" />

    return <div className={css.main}>
        <div className={css.loginBlock}>
            <h3>Login</h3>
            <LoginForm />
        </div>
    </div>
}

const LoginForm: FC = (props) => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captcha)
    const dispatch = useDispatch()

    return <Formik
    initialValues={{ captcha: '', email: '', password: '', rememberMe: false }}
    onSubmit={(values, { setSubmitting }) => {
        dispatch(AuthRedThunks.postLoginData(values))
        setSubmitting(false);
    }} >
    {({ isSubmitting }) => (
        <Form>
            <Field component='input' type='email' name='email' />
            <Field component='input' type='password' name='password' />
            <label>
                <Field component='Input' type='checkbox' name='rememberMe' />
                Remember
            </label>
            {captchaUrl && <>
                <img src={captchaUrl} alt="captcha" />
                <Field component='input' name="captcha" />
            </>}
            <Button type="default" htmlType='submit' disabled={isSubmitting}>
                Login
            </Button>
        </Form>
    )}
</Formik>
}

export default LoginPage
