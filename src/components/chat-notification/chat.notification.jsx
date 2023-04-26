import React from "react";
import CrossIcon from "../icons/cross.icon";
import Wrapper from "./chat.notification.style";

const ChatNotification = ({ notification }) => {
  return (
    <Wrapper className="chat-notification-wrapper">
      <div className="icon">
        <div className="circle"></div>
      </div>
      <div className="info">
        <div className="title">{notification.title}</div>
        <div className="description">{notification.description}</div>
      </div>
      <div className="close">
        <CrossIcon />
      </div>
    </Wrapper>
  );
};

export default ChatNotification;
