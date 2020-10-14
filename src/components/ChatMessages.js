import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/chatMessage.css";

function ChatMessages({ timestamp, user, message }) {
  return (
    <div className='chatMessage'>
      <Avatar src={user.photo} />
      <div className='chatMessage__info'>
        <h4>
          {user.displayName}
          <span className='chatMessage__timestamp'>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessages;
