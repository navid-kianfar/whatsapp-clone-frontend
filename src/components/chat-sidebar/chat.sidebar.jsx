import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import CommunitiesIcon from "../../components/icons/communities.icon";
import StatusIcon from "../../components/icons/status.icon";
import ChatIcon from "../../components/icons/chat.icon";
import MoreIcon from "../../components/icons/more.icon";
import PyramidIcon from "../../components/icons/pyramid.icon";
import SearchChats from "../../components/search-chats/search.chats";
import ChatNotification from "../../components/chat-notification/chat.notification";
import ChatItem from "../../components/chat-item/chat.item";
import HeaderMenu from "../../components/menus/header.menu";
import Me from "../../assets/images/me.jpeg";

const chats = Array(50)
  .fill(0)
  .map((e, i) => ({
    group: i % 3 === 0,
    id: (i + 1).toString(),
    title: "chat with person " + (i + 1),
    date: new Date(2022, 1, 1),
    unread: i % 5 === 0 ? 3 : 0,
    lastMessage:
      i % 4 === 0
        ? {
            mode: "text",
            text: "last message text",
          }
        : null,
  }));

const defaultNotification = {
  show: false,
  title: "",
  description: "",
  icon: "",
  command: "",
  badgeColor: "",
};

const initialState = {
  moreMenuAnchor: null,
  unreadOnly: false,
  notification: { ...defaultNotification },
  filtered: [],
  chats,
};

const ChatSidebar = () => {
  const { openChat, dispatch } = useAppContext();
  const [state, setState] = useState(initialState);

  const toggleFilterUnRead = () => {
    const unread = !state.unreadOnly;
    const filtered = unread
      ? state.chats.filter((chat) => chat.unread > 0)
      : [];
    setState({ ...state, unreadOnly: unread, filtered });
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

  const pickChat = (chat) => {
    // todo: clean if nessasary
    openChat(chat);
  };
  const reactNotification = () => {
    console.log("reactNotification");
  };
  const closeNotification = () => {
    setState({
      ...state,
      notification: { ...defaultNotification },
    });
  };

  return (
    <>
      <header>
        <div className="avatar">
          <img src={Me} alt="avatar" />
        </div>
        <div className="actions">
          <button>
            <CommunitiesIcon />
          </button>
          <button>
            <StatusIcon />
          </button>
          <button>
            <ChatIcon />
          </button>
          <button onClick={setMoreMenuAnchor}>
            <MoreIcon />
          </button>
        </div>
        <HeaderMenu
          anchorEl={state.moreMenuAnchor}
          release={releaseMoreMenuAnchor}
        />
      </header>
      <div className="inner-container">
        <div className="search-container">
          <SearchChats />
          <button
            onClick={toggleFilterUnRead}
            className={`filter-btn ${state.unreadOnly ? "active" : ""}`}
          >
            <PyramidIcon />
          </button>
        </div>

        <div
          className={`chats-container ${
            state.notification.show ? "has-notification" : ""
          }`}
        >
          {state.notification.show && (
            <ChatNotification
              onReact={reactNotification}
              onClose={closeNotification}
              notification={state.notification}
            />
          )}
          {state.unreadOnly && (
            <div className="filtered-note">FILTERED BY UNREAD</div>
          )}
          {(state.unreadOnly ? state.filtered : state.chats).map((chat) => (
            <ChatItem key={chat.id} chat={chat} onPick={() => pickChat(chat)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;