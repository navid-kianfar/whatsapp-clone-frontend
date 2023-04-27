import React from "react";
import Wrapper from "./chat.box.style";
import MicIcon from "../icons/mic.icon";
import EmojiIcon from "../icons/emoji.icon";
import AttachmentIcon from "../icons/attachment.icon";
import SendIcon from "../icons/send.icon";
import SearchIcon from "../icons/search.icon";
import MoreIcon from "../icons/more.icon";
import Avatar from "../avatar/avatar";

const ChatBox = ({ chat }) => {
  return (
    <Wrapper className="chatbox-container">
      <header>
        <div className="info">
          <div className="avatar">
            <Avatar chat={chat} />
          </div>
          <div className="info">
            <div className="title">{chat.title}</div>
            <div className="date">{chat.date.toString()}</div>
          </div>
        </div>
        <div className="actions">
          <div className="action">
            <SearchIcon />
          </div>
          <div className="action">
            <MoreIcon />
          </div>
        </div>
      </header>
      <main></main>
      <footer>
        <div className="footer-inner">
          <div className="actions">
            <div className="action">
              <EmojiIcon />
            </div>
            <div className="action">
              <AttachmentIcon />
            </div>
          </div>
          <div className="send-wrapper">
            <div className="input-wrapper">
              <textarea rows="1" placeholder="Type a message"></textarea>
            </div>
            <div className="send-action">
              <MicIcon />
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default ChatBox;
