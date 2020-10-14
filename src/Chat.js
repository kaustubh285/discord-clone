import React, { useEffect, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import "./css/chat.css";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChatMessages from "./components/ChatMessages";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const ChannelId = useSelector(selectChannelId);
  const ChannelName = useSelector(selectChannelName);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (ChannelId) {
      db.collection("channels")
        .doc(ChannelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [ChannelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(ChannelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className='chat'>
      {ChannelName ? (
        <ChatHeader ChannelName={ChannelName} />
      ) : (
        <div
          style={{
            height: "75px",
            color: "white",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h1>Welcome to Discord Clone</h1>
        </div>
      )}
      <div className='chat__messages'>
        {messages.map((message) => (
          <ChatMessages
            timestamp={message.timestamp}
            user={message.user}
            message={message.message}
          />
        ))}
      </div>
      <div className='chat__input'>
        <AddCircleRoundedIcon fontSize='large' />
        <form onSubmit={sendMessage}>
          <input
            value={input}
            disabled={!ChannelId}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder={`Message #General`}
          />
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
