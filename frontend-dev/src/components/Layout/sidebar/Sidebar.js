import React from 'react';
import "./sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; import { Avatar, IconButton } from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from '../../sidebarchat/SidebarChat';
export default function Sidebar({ users }) {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <Avatar src='/image/profile.png' />
        <div className='sidebar_header_right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <TextsmsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input type="text" placeholder='Search of start new chat' />
        </div>
      </div>
      <div className="sidebar_chats">
        {
          users.map((el, index) => {
            return (
              <SidebarChat data={el} key={"user" + index} />
            )
          })
        }


      </div>
    </div>
  )
}
