import { Button } from "antd";
import { Field, Form, Formik } from "formik";
import { FC, KeyboardEvent, MouseEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatRedThunks } from "../../../redux/chatReducer";
import { AppStateType } from "../../../redux/redux-state";
import css from './NewMessageForm.module.css'

export const NewMessageForm: FC = () => {

    const dispatch = useDispatch();
    const isConnection = useSelector((state: AppStateType) => state.chat.isConnection);
    console.log(isConnection);

    useEffect(() => {
    }, [isConnection]);

    const buttonRef = useRef<HTMLButtonElement>(null)

    const buttonHandle = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            buttonRef.current?.click()
        }
    }

    return <Formik
        initialValues={{ newMessage: '' }}
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            dispatch(ChatRedThunks.sendMessage(String(values.newMessage)));
            values.newMessage = '';
            setSubmitting(false);
        }}>
        {({ isSubmitting }) => {
            return <Form className={css.main} >
                <Field component="textarea" name="newMessage" class={css.textForm} onKeyUp={buttonHandle}/>
                <Button type='primary'
                    htmlType='submit'
                    disabled={!isConnection || isSubmitting}
                    className={css.buttonForm}
                    ref={buttonRef}>Send</Button>
                {!isConnection && <div>Connection lost...</div>}
            </Form>;
        }}
    </Formik>;
};
