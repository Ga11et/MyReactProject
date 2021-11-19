import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { AuthRedThunks } from '../../redux/authReducer'
import LoginForm, { IPropsLoginForm, IUserLoginForm } from './loginForm/loginForm'
import css from './login.module.css'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-state'

const ReduxLoginForm = reduxForm<IUserLoginForm, IPropsLoginForm>({
    form: 'login'
})(LoginForm)

type propsType = {
    captchaUrl: string | null
    isAuth: boolean

    postLoginData: (data: IUserLoginForm) => any
}

const Login: React.FC<propsType> = ({ postLoginData, captchaUrl, isAuth }) => {

    const Submit = (data: IUserLoginForm) => {
        postLoginData(data)
    }

    if (isAuth) return <Redirect to="/profile" />

    return <div className={css.main}>
        <div className={css.loginBlock}>
            <h3>Login</h3>
            <ReduxLoginForm onSubmit={Submit} url={captchaUrl} />
        </div>
    </div>
}

let mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captcha,
    isAuth: state.auth.isAuth
})
const mapDespatchToProps = {
    postLoginData: AuthRedThunks.postLoginData
}

export default connect(mapStateToProps, mapDespatchToProps)(Login)