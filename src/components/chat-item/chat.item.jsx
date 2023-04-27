import React from "react";
import moment from "moment";
import Wrapper from "./chat.item.style";
import Avatar from "../avatar/avatar";

const ChatItem = ({ chat, onPick }) => {
  const withinWeek = moment().diff(chat.date, "days") < 7;
  const format = withinWeek ? "dddd" : "DD/MM/YYYY";
  const date = moment(chat.date).format(format);
  return (
    <Wrapper onClick={onPick} className="chat-item-wrapper">
      <div className="avatar">
        <Avatar url={chat.avatar} group={chat.group} />
      </div>
      <div className="inner">
        <div className="info">
          <div className="title">{chat.title}</div>
          <div className="date">{date}</div>
        </div>
        <div className="more">
          <div className="last-message">
            <div className="mode">{chat.lastMessage?.mode}</div>
            <div className="text">{chat.lastMessage?.text}</div>
          </div>
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
