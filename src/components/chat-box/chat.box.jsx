import React from "react";
import Wrapper from "./chat.box.style";
import MicIcon from "../icons/mic.icon";
import EmojiIcon from "../icons/emoji.icon";
import AttachmentIcon from "../icons/attachment.icon";
import SendIcon from "../icons/send.icon";
import SearchIcon from "../icons/search.icon";
import MoreIcon from "../icons/more.icon";
import Avatar from "../avatar/avatar";
import moment from "moment";

const ChatBox = ({ chat }) => {
  const date = moment(chat.date).format("DD/MM/YYYY");

  return (
    <Wrapper className="chatbox-container">
      <header>
        <div className="info-wrapper">
          <div className="avatar">
            <Avatar chat={chat} />
          </div>
          <div className="info">
            <div className="title">{chat.title}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="actions">
          <button className="action action-holder">
            <SearchIcon />
          </button>
          <button className="action action-holder">
            <MoreIcon />
          </button>
        </div>
      </header>
      <main></main>
      <footer>
        <div className="footer-inner">
          <div className="actions">
            <button className="action action-holder">
              <EmojiIcon />
            </button>
            <button className="action action-holder">
              <AttachmentIcon />
            </button>
          </div>
          <div className="send-wrapper">
            <div className="input-wrapper">
              <textarea rows="1" placeholder="Type a message"></textarea>
            </div>
            <button className="send-action action-holder">
              <MicIcon />
            </button>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default ChatBox;
