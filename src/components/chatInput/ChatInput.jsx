import React, { useState } from "react";
import cssStyle from "./ChatInput.module.css";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className={cssStyle.chatInputContainer}>
      <input
        type="text"
        placeholder="Напиши сообщение..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cssStyle.chatInput}
      />
      {text.trim() !== "" && <button className={cssStyle.chatBtn} onClick={handleClick}>Отправить</button>}
    </div>
  );
}
