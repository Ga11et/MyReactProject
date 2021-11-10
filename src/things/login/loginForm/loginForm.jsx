import { Field } from "redux-form"
import { ErrorSpan } from "../../component/error/error"
import Input from "../../component/fieldsTypes/input/Input"
import { required } from "../../component/validatior/valodator"

const LoginForm = ({error, handleSubmit, url}) => {
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