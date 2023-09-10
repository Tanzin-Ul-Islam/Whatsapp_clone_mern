import React, { useContext } from 'react'
import './sidebarChat.css'
import { Avatar } from '@mui/material';
import { DataContext } from '../../ContextProvider';

export default function SidebarChat({ data }) {

  const { chattingWith, setChattingWith } = useContext(DataContext);

  function handleSetChattingWith(arg) {
    setChattingWith(arg);
  }


  return (
    <div className={`sidebarChats ${(chattingWith?._id == data?._id) && 'sidebarChats_changeBackgroundOnSelect'}`} onClick={() => { handleSetChattingWith(data) }} >
      {
        data.profilePic ? <Avatar src={data.profilePic} /> : <Avatar />
      }

      <div className="sidebarChats_info">
        <h2>{data.name}</h2>
        <p>Last message</p>
      </div>
    </div>
  )
}
