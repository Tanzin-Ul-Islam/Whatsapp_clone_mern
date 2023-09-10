import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Layout/sidebar/Sidebar";
import Chat from "../components/chat/Chat";

import axios from "../axios";
import { DataContext } from "../ContextProvider";
import './css/Home.css';
import api from "../config/api.config.json";
import DefaultScreen from "../components/DefaultScreen/DefaultScreen";
import Pusher from 'pusher-js';
export default function Home() {

    //context api
    const { chattingWith, setNewMessage } = useContext(DataContext);

    const userId = localStorage.getItem("userId");

    const [users, setUsers] = useState([]);

    async function getAllUser() {
        try {
            await axios.get(api.user.getAllUser).then(resonse => {
                if (resonse.status === 200) {
                    const userId = localStorage.getItem("userId")
                    const filterUser = resonse.data.data.filter(el => (el._id !== userId));
                    setUsers(filterUser);
                }
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllUser();
    }, [])

    useEffect(() => {
        const  pusher = new Pusher("98dc5d5815c8dfccd00d", {
            cluster: 'ap2'
        });
        const  channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            if(data.senderId._id == userId || data.recieverId._id == userId){
                setNewMessage(data);
            }
        });
        return () => {
            channel.unbind();
            pusher.unsubscribe('channel_name');
            pusher.disconnect();
        };
    }, [])



    return (

        <div className="home">
            <div className="home_body">
                <Sidebar users={users} />
                {chattingWith ? <Chat /> : <DefaultScreen />}
            </div>
        </div>


    )
}
