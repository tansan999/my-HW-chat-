import React from "react";
import cssStyle from "./ChatItem.module.css";

export default function ChatItem({ title, date }) {
  return (
    <li className={cssStyle.chatItem}>
      {title} <span className={cssStyle.chatTime}>{date}</span>
    </li>
  );
}
