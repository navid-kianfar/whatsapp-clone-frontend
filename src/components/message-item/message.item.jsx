import React from "react";
import Wrapper from "./message.item.style";
import TailinIcon from "../icons/tailin.icon";
import moment from "moment";

const MessageItem = ({ msg, chat }) => {
  const classes = ["message-conatainer", msg.fromMe ? "me" : ""];

  const time = moment(msg.timestamp).format("HH:mm");
  return (
    <Wrapper>
      <div className={classes.join(" ")}>
        <span className="tail-in">
          <TailinIcon me={msg.fromMe} />
        </span>
        <div className="inner">
          <div className="sender">{msg.from}</div>
          <div className="message">
            <div className="text">{msg.body}</div>
            <div className="time">{time}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MessageItem;
