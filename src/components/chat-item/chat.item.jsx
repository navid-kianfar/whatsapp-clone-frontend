import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import Wrapper from "./chat.item.style";
import Avatar from "../avatar/avatar";
import TicksIcon from "../icons/ticks.icon";
import { fetchAvatarUrl } from "../../services/api.service";

const ChatItem = ({ chat, current, onPick }) => {
  const [avatar, setAvatar] = useState("");

  const date = useMemo(() => {
    const date = new Date(chat.timestamp * 1000);
    const withinWeek = moment().diff(date, "days") < 7;
    const format = withinWeek ? "dddd" : "DD/MM/YYYY";
    return moment(date).format(format);
  }, [chat.timestamp]);

  useEffect(() => {
    fetchAvatarUrl(chat.id._serialized).then((res) => {
      setAvatar(res.data.avatar);
    });
  }, [chat]);

  return (
    <Wrapper
      onClick={onPick}
      className={`chat-item-wrapper ${current ? "current" : ""}`}
    >
      <div className="avatar">
        <Avatar url={avatar || chat.avatar} group={chat.isGroup} />
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

          {chat.unreadCount > 0 && (
            <div className="unread">
              <div className="badge">
                <span>{chat.unreadCount}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ChatItem;
