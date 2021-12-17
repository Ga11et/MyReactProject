import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/redux-state";
import { Message } from "./Message";
import css from './Chat.module.css'

export const Chat: FC = () => {

    const scrollingRef = useRef<HTMLDivElement>(null);
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    useEffect(() => {
        scrollingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    const showMessages = messages.map((el: any, ind: number) => <Message key={ind} userMessage={el} />);

    return <>
        <div className={css.main} >
            {showMessages}
            <div ref={scrollingRef}></div>
        </div>
    </>;
};
