import React from "react";
import "../css/chatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function ChatHeader({ ChannelName }) {
  return (
    <div className='chatHeader'>
      <div className='chatHeader__left'>
        <h3>
          <span className='chatHeader__leftHash'>#</span>
          {ChannelName}
        </h3>
      </div>
      <div className='chatHeader__right'>
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleIcon />
        <div className='chatHeader__rightSearch'>
          <input placeholder='Search' />
          <SearchIcon />
        </div>
        <HelpIcon />
        <SendRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
