import React from "react";
import ChatItem from "../chatItem/ChatItem";
import cssStyle from "./ChatList.module.css"

export default function ChatList({ messages }) {
  return (
    <ul className={cssStyle.chatList}>
      {messages.map((msg) => (
        <ChatItem key={msg.id} title={msg.title} date={msg.date} />
      ))}
    </ul>
  );
}
