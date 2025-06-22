import React, { useState } from "react";
import styled from "styled-components";

const DivINput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleClick = (event) => {
    if (text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <DivINput>
      <input
        type="text"
        placeholder="Напиши сообщение..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text.trim() !== "" && <button onClick={handleClick}>Отправить</button>}
    </DivINput>
  );
}
