import React from "react";
import ChatItem from "../chatItem/ChatItem";
import styled from "styled-components";

const UL = styled.ul`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
`;

const ChatList = ({ messages, onDelete, onToggleRead }) => {
  return (
    <UL>
      {messages.map((msg) => (
        <ChatItem
          key={msg.id}
          message={msg}
          onDelete={() => onDelete(msg.id)}
          onToggleRead={() => onToggleRead(msg.id)}
        />
      ))}
    </UL>
  );
};

export default ChatList;
