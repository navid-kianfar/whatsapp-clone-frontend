import React from "react";
import Avatar from "../avatar/avatar";
import ChevronRightIcon from "../icons/chevron.right.icon";
import PreviewThumb from "../preview-thumb/preview.thumb";
import ChatItem from "../chat-item/chat.item";

const ChatInfo = ({ chat }) => {
  return (
    <div className="chat-info-wrapper">
      <div className="person">
        <Avatar chat={chat} />
        <h3>{chat.title}</h3>
        <h4>{chat.identifier}</h4>
      </div>
      <div className="about">
        <h3>About</h3>
        <h4>{chat.description}</h4>
      </div>
      <div className="media">
        <div className="title">
          <div className="label">Media, links and docs</div>
          <div className="more">
            <span>107</span>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="previews">
        <PreviewThumb />
        <PreviewThumb />
        <PreviewThumb />
      </div>
      <div className="commands">
        <div className="command">
          <div className="icon"></div>
          <div className="title">Starred messages</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="command">
          <div className="icon"></div>
          <div className="title">Mute notification</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="command">
          <div className="icon"></div>
          <div className="title">Disappearing messages</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="command">
          <div className="icon"></div>
          <div className="title">Encryption</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="common-groups">
        <h3>3 groups in common</h3>
        <div className="groups">
          <ChatItem chat={chat} />
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
