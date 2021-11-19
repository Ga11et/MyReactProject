import React from "react"
import { Field, InjectedFormProps } from "redux-form"
import { loginDataType } from "../../../dal/api"
import { ErrorSpan } from "../../component/error/error"
import Input from "../../component/fieldsTypes/input/Input"
import { required } from "../../component/validatior/valodator"

export type IUserLoginForm = loginDataType
export type IPropsLoginForm = {
    url: string | null
}

const LoginForm: React.FC<InjectedFormProps<IUserLoginForm, IPropsLoginForm> & IPropsLoginForm> = ({error, handleSubmit, url}) => {
    return <form onSubmit={handleSubmit}>
        <Field component={Input} name={"email"} validate={[required]} />
        <Field component={Input} type={"password"} name={"password"} validate={[required]} />
        <label>
            <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
            Remember
        </label>
        { url && <>
            <img src={url} alt="captcha" />
            <Field component={Input} name={"captcha"} validate={[required]} />
        </> }
        <button >Login</button>
        { error && <ErrorSpan content={error} /> }
    </form>
}

export default LoginForm