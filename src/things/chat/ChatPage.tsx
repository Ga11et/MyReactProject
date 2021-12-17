import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChatRedThunks } from "../../redux/chatReducer";
import { Chat } from "./Chat/Chat";
import { NewMessageForm } from "./NewMessageForm/NewMessageForm";
import css from './ChatPage.module.css'

const ChatPage: FC = () => {

    console.log('>>>>>>> ChatPage')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ChatRedThunks.startMessagesListening())
        return () => {
            dispatch(ChatRedThunks.stopMessagesListening())
        }
    }, [])

    return <section className={css.main} >
        <Chat />
        <NewMessageForm />
    </section>
}

export default ChatPage