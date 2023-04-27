import React from "react";
import Wrapper from "./chat.box.style";
import MicIcon from "../icons/mic.icon";
import EmojiIcon from "../icons/emoji.icon";
import AttachmentIcon from "../icons/attachment.icon";
import SendIcon from "../icons/send.icon";

const ChatBox = ({ chat }) => {
  return (
    <Wrapper className="chatbox-container">
      <header></header>
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
              <input type="text" placeholder="Type a message" />
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
