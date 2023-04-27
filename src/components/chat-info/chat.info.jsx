import React from "react";
import Avatar from "../avatar/avatar";

const ChatInfo = ({ chat }) => {
  return (
    <div className="chat-info-wrapper">
      <div className="person">
        <Avatar chat={chat} />
        <h3>{chat.title}</h3>
        <h4>{chat.identifier}</h4>
      </div>
    </div>
  );
};

export default ChatInfo;
