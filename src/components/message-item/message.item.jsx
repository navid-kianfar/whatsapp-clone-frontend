import React from "react";
import Wrapper from "./message.item.style";
import TailinIcon from "../icons/tailin.icon";

const MessageItem = ({ msg, chat }) => {
  const classes = ["message-conatainer", msg.me ? "me" : ""];

  return (
    <Wrapper>
      <div className={classes.join(" ")}>
        <span className="tail-in">
          <TailinIcon me={msg.me} />
        </span>
        <div className="inner">
          <div className="sender">{msg.sender.name}</div>
          <div className="message">
            <div className="text">{msg.text}</div>
            <div className="time">21:38</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MessageItem;
