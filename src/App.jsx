import React, { useState } from "react";
import ChatList from "./components/chatlist/ChatList";
import ChatInput from "./components/chatInput/ChatInput";
import styled from "styled-components";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSend = (text) => {
    const newMessage = {
      id: crypto.randomUUID(),
      title: text,
      date: new Date().toLocaleTimeString(),
      read: false,
    };
    setMessages([...messages, newMessage]);
  };

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleToggleRead = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
  };

  const handleDeleteAll = () => {
    setShowModal(true);
  };

  const confirmDeleteAll = () => {
    setMessages([]);
    setShowModal(false);
  };

  const cancelDeleteAll = () => {
    setShowModal(false);
  };

  return (
    <AppDivAll>
      <ChatList
        messages={messages}
        onDelete={handleDelete}
        onToggleRead={handleToggleRead}
      />
      <ChatInput onSend={handleSend} />
      <DeleteAllButton onClick={handleDeleteAll}>Удалить все</DeleteAllButton>
      {showModal && (
        <ModalOverlay>
          <ModalWindow>
            <ModalText>Вы точно хотите удалить все сообщения?</ModalText>
            <ModalButtons>
              <ModalButtonYes onClick={confirmDeleteAll}>Да</ModalButtonYes>
              <ModalButtonNo onClick={cancelDeleteAll}>Нет</ModalButtonNo>
            </ModalButtons>
          </ModalWindow>
        </ModalOverlay>
      )}
    </AppDivAll>
  );
}

const AppDivAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  background: #f5f5f7;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
`;

const DeleteAllButton = styled.button`
  margin: 16px auto 24px auto;
  padding: 10px 24px;
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #d9363e;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalWindow = styled.div`
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalText = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const ModalButtonYes = styled.button`
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #d9363e;
  }
`;

const ModalButtonNo = styled.button`
  background: #f5f5f7;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 24px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;
