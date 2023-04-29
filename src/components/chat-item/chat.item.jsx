import React from "react";
import moment from "moment";
import Wrapper from "./chat.item.style";
import Avatar from "../avatar/avatar";
import TicksIcon from "../icons/ticks.icon";

const ChatItem = ({ chat, current, onPick }) => {
  const withinWeek = moment().diff(chat.timestamp, "days") < 7;
  const format = withinWeek ? "dddd" : "DD/MM/YYYY";
  const date = moment(chat.timestamp).format(format);
  return (
    <Wrapper
      onClick={onPick}
      className={`chat-item-wrapper ${current ? "current" : ""}`}
    >
      <div className="avatar">
        <Avatar url={chat.avatar} group={chat.isGroup} />
      </div>
      <div className="inner">
        <div className="info">
          <div className="title">{chat.name}</div>
          <div className="date">{date}</div>
        </div>
        <div className="more">
          {chat.lastMessage ? (
            <div className="last-message">
              <div className="mode"></div>
              <div className="text">
                <TicksIcon />
                <span>{chat.lastMessage.text}</span>
              </div>
            </div>
          ) : (
            <div className="gap"></div>
          )}

          {chat.unread > 0 && (
            <div className="unread">
              <div className="badge">
                <span>{chat.unread}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ChatItem;
