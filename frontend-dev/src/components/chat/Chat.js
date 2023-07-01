import React, { useContext, useEffect, useState } from 'react'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import "./chat.css"
import { IconButton } from '@mui/material';
import { DataContext } from '../../ContextProvider';
import axios from '../../axios';
import api from "../../config/api.config.json";

export default function Chat() {
    const { chattingWith, messages, setMessages, newMessage } = useContext(DataContext);
    const [messageValue, setMessageValue] = useState("");
    const userId = localStorage.getItem("userId");

    function handleInput(e) {
        setMessageValue(e.target.value)
    }

    async function getMessages() {
        try {
            const payLoad = {
                userId: localStorage.getItem("userId"),
                chattingWithId: chattingWith._id,
            }
            await axios.post(api.chats.getChats, payLoad).then(response => {
                const data = response.data.data;
                setMessages(data);
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }


    async function sendMessage(e) {
        e.preventDefault();
        try {
            const payLoad = {
                "senderId": userId,
                "recieverId": chattingWith?._id,
                "message": messageValue,
                "recieved": false
            }
            await axios.post(api.chats.post, payLoad).then(response => {
                setMessageValue("");
            })
        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        getMessages();
    }, [chattingWith])

    useEffect(() => {
        if (newMessage) {
            setMessages([...messages, newMessage]);
        }
    }, [newMessage])




    return (
        <div className='chat'>
            <div className='chat_body'>
                {
                    (messages && messages.length > 0) ? messages.map((message, index) => {
                        return (
                            <div className={`chat_message ${(message?.senderId?._id === userId) && 'chat_message_user'}`} key={'chat' + index}>
                                <span className='chat_name'>{message?.senderId?._id === userId ? 'you' : message?.recieverId?.name}</span>
                                {message?.message}
                                <span className='chat_timeStamp'>03:45 pm</span>
                            </div>
                        )
                    }) : "say hello"
                }
            </div>

            <div className='chat_footer'>
                <IconButton>
                    <AddReactionIcon />
                </IconButton>
                <form onSubmit={sendMessage}>
                    <input type="text" placeholder='Type a message...' value={messageValue} onChange={handleInput} />
                    <button type='submit'>Send a message</button>
                </form>
                <IconButton>
                    <KeyboardVoiceIcon />
                </IconButton>
            </div>
        </div>

    )
}
