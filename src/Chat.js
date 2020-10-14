import React from "react";
import ChatHeader from "./components/ChatHeader";
import "./css/chat.css";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChatMessages from "./components/ChatMessages";

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat__messages'>
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
      </div>
      <div className='chat__input'>
        <AddCircleRoundedIcon fontSize='large' />
        <form>
          <input type='text' placeholder={`Message #General`} />
          <button className='chat__inputButton' type='submit'>
            Send Message
          </button>
        </form>

        <div className='chat__inputIcons'>
          <CardGiftcardRoundedIcon fontSize='large' />
          <GifIcon fontSize='large' />
          <EmojiEmotionsIcon fontSize='large' />
        </div>
      </div>
    </div>
  );
}

export default Chat;
