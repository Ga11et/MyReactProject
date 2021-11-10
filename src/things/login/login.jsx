import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { authMe, postLoginData } from '../../redux/authReducer'
import LoginForm from './loginForm/loginForm'
import css from './login.module.css'
import { Redirect } from 'react-router-dom'

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ({ postLoginData, captchaUrl, isAuth }) => {

    const Submit = (data) => {
        postLoginData(data)
        console.log(data)
    }

    if (isAuth) return <Redirect to="/profile" />

    return <div className={css.main}>
        <div className={css.loginBlock}>
            <h3>Login</h3>
            <ReduxLoginForm onSubmit={Submit} url={captchaUrl} />
        </div>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captcha
})

export default connect(mapStateToProps, {
    postLoginData, authMe
})(Login)