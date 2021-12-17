import css from './dialogs.module.css'
import Person from './dialogscomponents/person/person'
import Message from './dialogscomponents/message/message'
import React from 'react'
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form'
import { ErrorSpan } from '../component/error/error'
import { maxLengthCreator, required } from '../component/validatior/valodator'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-state'
import { DialogRedActions } from '../../redux/dialogsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'



export const DialogsPage: React.FC<{}> = (props) => {

    const persons = useSelector((state: AppStateType) => state.dialogPage.persons)
    const messages = useSelector((state: AppStateType) => state.dialogPage.messages)

    const dispatch = useDispatch()

    const submit = (data: IUserDialogForm) => {
        dispatch(DialogRedActions.newMessage(data.textWriting))
    }

    let personComponents = persons.map(el => <Person key={el.id} img={el.img} url={el.url} name={el.name} />)
    let messageComponents = messages.map(el => <Message key={el.id} author={el.author} message={el.message} />)

    return (
        <div className={css.item}>
            <h2>Dialogs</h2>
            <div className={css.columns}>
                <div>
                    {personComponents}
                </div>
                <div className={css.messages}>
                    <div>
                        {messageComponents}
                    </div>
                    <DialogFormRedux onSubmit={submit} />
                </div>
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)

type IUserDialogForm = {
    textWriting: string
}
type IPropsDialogForm = {

}

const DialogForm: React.FC<InjectedFormProps<IUserDialogForm, IPropsDialogForm> & IPropsDialogForm> = (props) => {
    return <>
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="textWriting" validate={[required, maxLength30]}/>
        <button>Send</button>
    </form>
    </>
}

type TextAreaPropsType = {
    
}

const Textarea: React.FC<WrappedFieldProps & TextAreaPropsType> = ({input, meta, ...props}) => {
    const haveError = meta.error && meta.touched
    return <div className={haveError ? css.error : ""} >
    <div className={css.errorMessage}>{haveError && <ErrorSpan content={meta.error} />}</div>
    <textarea {...input} {...props}  />
</div>
}

const DialogFormRedux = reduxForm<IUserDialogForm, IPropsDialogForm>({ form: "dialogWriting" })(DialogForm)
