import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/chatMessage.css";

function ChatMessages() {
  return (
    <div className='chatMessage'>
      <Avatar src='https://avatars3.githubusercontent.com/u/29734311?s=460&u=274a33580eb38664d714c0b208536540a9046f30&v=4' />
      <div className='chatMessage__info'>
        <h4>
          Kaustubh285
          <span className='chatMessage__timestamp'>timestamp</span>
        </h4>
        <p>The message</p>
      </div>
    </div>
  );
}

export default ChatMessages;
