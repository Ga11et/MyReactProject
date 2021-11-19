import css from './infoForm.module.css'
import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import Input from '../../../component/fieldsTypes/input/Input'
import { ErrorSpan } from '../../../component/error/error'
import { IProps, IUser } from '../description'


const ProfileRedactingFormWithRedux: React.FC<InjectedFormProps<IUser, IProps> & IProps> = ({contacts, handleSubmit, error}) => {

    return <form className={css.main} onSubmit={handleSubmit}>
        <Field component={Input} name="fullName" placeholder="Write your name" />
        <Field component={"input"} type="checkbox" name="lookingForAJob" id="areYouWork" />
        <label htmlFor="areYouWork" >Are you work?</label>
        <Field component={Input} name={"lookingForAJobDescription"} placeholder="Where you work" />
        <Field component={Input} name={"aboutMe"} placeholder="Tell about you" />

        <h4>Contacts:</h4>
        {Object.keys(contacts).map( el => {
            return <Field key={el} component={Input} name={`contacts.${el}`} placeholder={el} />
        })}

        { error && <ErrorSpan content={error} /> }
        <button>Save</button>
    </form>
}



export default ProfileRedactingFormWithRedux
