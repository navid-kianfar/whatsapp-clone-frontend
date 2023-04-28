import React from "react";
import Avatar from "../avatar/avatar";
import ChevronRightIcon from "../icons/chevron.right.icon";
import PreviewThumb from "../preview-thumb/preview.thumb";
import ChatItem from "../chat-item/chat.item";
import BlockIcon from "../icons/block.icon";
import ReportIcon from "../icons/report.icon";
import TrashIcon from "../icons/trash.icon";
import BellIcon from "../icons/bell.icon";
import DisappearingIcon from "../icons/disappearing.icon";
import EncryptionIcon from "../icons/encryption.icon";
import StarIcon from "../icons/star.icon";

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
          <div className="icon">
            <StarIcon />
          </div>
          <div className="title">Starred messages</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="command">
          <div className="icon">
            <BellIcon />
          </div>
          <div className="title">Mute notification</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="command">
          <div className="icon">
            <DisappearingIcon />
          </div>
          <div className="title">Disappearing messages</div>
          <div className="option">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="command">
          <div className="icon">
            <EncryptionIcon />
          </div>
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
      <div className="danger commands">
        <div className="command">
          <div className="icon">
            <BlockIcon />
          </div>
          <div className="title">Block {chat.title}</div>
          <div className="option"></div>
        </div>
        <div className="command">
          <div className="icon">
            <ReportIcon />
          </div>
          <div className="title">Report {chat.title}</div>
          <div className="option"></div>
        </div>
        <div className="command">
          <div className="icon">
            <TrashIcon />
          </div>
          <div className="title">Delete chat</div>
          <div className="option"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
