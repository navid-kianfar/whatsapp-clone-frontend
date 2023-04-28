import React, { useEffect, useState } from "react";
import Wrapper from "./chat.box.style";
import MicIcon from "../icons/mic.icon";
import EmojiIcon from "../icons/emoji.icon";
import AttachmentIcon from "../icons/attachment.icon";
import SendIcon from "../icons/send.icon";
import CrossIcon from "../icons/cross.icon";
import StickerIcon from "../icons/sticker.icon";
import GifIcon from "../icons/gif.icon";
import SearchIcon from "../icons/search.icon";
import MoreIcon from "../icons/more.icon";
import Avatar from "../avatar/avatar";
import AnimatedLoader from "../animated-loader/animated.loader";
import ChatboxMenu from "../menus/chatbox.menu";
import MessageItem from "../message-item/message.item";
import { useAppContext } from "../../context/appContext";
import moment from "moment";
import { messages } from "./fake.data";

const PlateType = {
  none: 0,
  emoji: 1,
  gif: 2,
  sticker: 3,
};

const initialState = {
  moreMenuAnchor: null,
  loading: false,
  plate: PlateType.none,
  messages,
};

const ChatBox = () => {
  const { chat, dispatch, showChatSearch } = useAppContext();
  const [state, setState] = useState(initialState);
  const date = moment(chat.date).format("DD/MM/YYYY");

  const hidePlate = () => {
    setState({ ...state, plate: PlateType.none });
  };

  const emojiPlate = () => {
    setState({ ...state, plate: PlateType.emoji });
  };

  const setMoreMenuAnchor = (event) => {
    setState({ ...state, moreMenuAnchor: event.currentTarget });
  };
  const releaseMoreMenuAnchor = (command) => {
    if (command) {
      command.payload = command.payload || {};
      dispatch(command);
    }
    setState({ ...state, moreMenuAnchor: null });
  };

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, loading: false });
    }, 1000);
  }, []);

  return (
    <Wrapper className="chatbox-container">
      <div className="message-bg"></div>
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
          <button
            onClick={showChatSearch}
            disabled={state.loading}
            className="action action-holder"
          >
            <SearchIcon />
          </button>
          <button
            onClick={setMoreMenuAnchor}
            disabled={state.loading}
            className="action action-holder"
          >
            <MoreIcon />
          </button>
        </div>
      </header>
      <ChatboxMenu
        anchorEl={state.moreMenuAnchor}
        release={releaseMoreMenuAnchor}
      />
      <main className={state.loading ? "loading" : ""}>
        {state.loading ? (
          <div className="loader-wrapper">
            <AnimatedLoader />
          </div>
        ) : (
          state.messages.map((msg) => <MessageItem msg={msg} key={msg.id} />)
        )}
      </main>
      <footer className={state.plate ? "has-plate" : ""}>
        <div className="footer-plate"></div>
        <div className="footer-inner">
          <div className="actions">
            {state.plate > 0 && (
              <button onClick={hidePlate} className="action action-holder">
                <CrossIcon />
              </button>
            )}
            <button
              disabled={state.loading}
              onClick={emojiPlate}
              className="action action-holder"
            >
              <EmojiIcon />
            </button>
            {state.plate > 0 && (
              <>
                <button className="action action-holder">
                  <GifIcon />
                </button>
                <button className="action action-holder">
                  <StickerIcon />
                </button>
              </>
            )}
            <button disabled={state.loading} className="action action-holder">
              <AttachmentIcon />
            </button>
          </div>
          <div className="send-wrapper">
            <div className="input-wrapper">
              <textarea
                disabled={state.loading}
                rows="1"
                placeholder="Type a message"
              ></textarea>
            </div>
            <button
              disabled={state.loading}
              className="send-action action-holder"
            >
              <MicIcon />
            </button>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default ChatBox;
