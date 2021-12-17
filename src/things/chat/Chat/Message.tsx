import { FC } from "react";
import { ChatMessageType } from "../../../types/types";
import css from './Message.module.css'

export const Message: FC<{ userMessage: ChatMessageType; }> = ({ userMessage }) => {

    const { photo, userName, message } = userMessage;

    return <section className={css.main}>
        <div className={css.leftDiv}>
            <img src={photo ? photo : 'https://via.placeholder.com/100'} alt='avatar' />
        </div>
        <div className={css.rightDiv}>
            <label>{userName}</label>
            <p>{message}</p>    
        </div>
    </section>;
};
