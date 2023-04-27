import React from "react";
import CrossIcon from "../icons/cross.icon";
import Wrapper from "./chat.notification.style";

const ChatNotification = ({ notification, onClose, onReact }) => {
  return (
    <Wrapper className="chat-notification-wrapper">
      <div className="icon">
        <div className="circle"></div>
      </div>
      <div className="info" onClick={onReact}>
        <div className="title">{notification.title}</div>
        <div className="description">{notification.description}</div>
      </div>
      <div className="close">
        <span onClick={onClose}>
          <CrossIcon />
        </span>
      </div>
    </Wrapper>
  );
};

export default ChatNotification;
