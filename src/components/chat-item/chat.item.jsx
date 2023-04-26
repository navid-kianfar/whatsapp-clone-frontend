import React from "react";
import Wrapper from "./chat.item.style";

const ChatNotification = ({ chat, onPick }) => {
  return (
    <Wrapper onClick={onPick} className="chat-item-wrapper">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="info">
        <div className="title">{chat.title}</div>
        <div className="date">{chat.date}</div>
      </div>
      <div className="more">
        <div className="last-message">
          <div className="mode">{chat.lastMessage.mode}</div>
          <div className="text">{chat.lastMessage.text}</div>
        </div>
        <div className="unread">{chat.unread}</div>
      </div>
    </Wrapper>
  );
};

export default ChatNotification;
