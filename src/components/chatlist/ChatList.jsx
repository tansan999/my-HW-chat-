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

export default function ChatList({ messages }) {
  return (
    <UL>
      {messages.map((msg) => (
        <ChatItem key={msg.id} title={msg.title} date={msg.date} />
      ))}
    </UL>
  );
}
