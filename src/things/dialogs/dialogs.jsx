import css from './dialogs.module.css'
import Person from './dialogscomponents/person/person'
import Message from './dialogscomponents/message/message'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ErrorSpan } from '../component/error/error'
import { maxLengthCreator, required } from '../component/validatior/valodator'


class Dialogs extends React.Component {

    submit = (data) => {
        this.props.newMessage(data.textWriting)
    }

    render() {
        
        let personComponents = this.props.persons.map(el => <Person key={el.id} img={el.img} url={el.url} name={el.name} />)
        let messageComponents = this.props.messages.map(el => <Message key={el.id} author={el.author} message={el.message} />)

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
                        <DialogFormRedux onSubmit={this.submit} />
                    </div>
                </div>
            </div>
        )
    }
}

const maxLength30 = maxLengthCreator(30)

const DialogForm = (props) => {
    return <>
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="textWriting" validate={[required, maxLength30]}/>
        <button>Send</button>
    </form>
    </>
}

const Textarea = ({input, meta, ...props}) => {
    const haveError = meta.error && meta.touched
    return <div className={haveError ? css.error : ""} >
    <div className={css.errorMessage}>{haveError && <ErrorSpan content={meta.error} />}</div>
    <textarea {...input} {...props}  />
</div>
}

const DialogFormRedux = reduxForm({ form: "dialogWriting" })(DialogForm)

export default Dialogs