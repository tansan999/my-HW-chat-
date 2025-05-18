import React, { useState } from "react";
import ChatList from "./components/chatlist/ChatList";
import ChatInput from "./components/chatInput/ChatInput";

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const newMessage = {
      id: crypto.randomUUID(),
      title: text,
      date: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <ChatList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
