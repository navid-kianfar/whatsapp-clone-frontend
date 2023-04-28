import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  OPEN_CHAT_START,
  CHAT_SEARCH_HIDE_COMMAND,
  CHAT_SEARCH_COMMAND,
  CHAT_EXTENDED_HIDE_COMMAND,
  MUTE_CHAT_COMMAND,
  CHAT_RESET_OPERATION_COMMAND,
  BLOCK_CHAT_COMMAND,
  REPORT_CHAT_COMMAND,
  APP_LOADED,
} from "./actions";
import { initialState } from "./defaults";

const loadUser = () => {
  initialState.token = localStorage.getItem("token") || "";
  initialState.user = initialState.token
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};
const loadChats = () => {
  initialState.chats = Array(50)
    .fill(0)
    .map((e, i) => ({
      avatar: i % 4 === 0 ? null : `https://i.pravatar.cc/150?img=${i + 1}`,
      identifier: "+905392222222",
      group: i % 3 === 0,
      id: (i + 1).toString(),
      title: "chat with person " + (i + 1),
      description: "this is a description",
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
};

loadUser();
loadChats();

// TODO: must be removed
if (!initialState.user) {
  initialState.user = {};
}

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openChat = (chat) => {
    dispatch({
      type: OPEN_CHAT_START,
      payload: chat,
    });
  };

  const muteChat = (chat) => {
    dispatch({
      type: MUTE_CHAT_COMMAND,
      payload: chat,
    });
  };

  const blockChat = (chat) => {
    dispatch({
      type: BLOCK_CHAT_COMMAND,
      payload: chat,
    });
  };

  const reportChat = (chat) => {
    dispatch({
      type: REPORT_CHAT_COMMAND,
      payload: chat,
    });
  };

  const showChatSearch = () => {
    dispatch({
      type: CHAT_SEARCH_COMMAND,
    });
  };

  const appLoaded = () => {
    dispatch({
      type: APP_LOADED,
    });
  };

  const hideChatSearch = () => {
    dispatch({
      type: CHAT_SEARCH_HIDE_COMMAND,
    });
  };

  const hideExtended = () => {
    dispatch({
      type: CHAT_EXTENDED_HIDE_COMMAND,
    });
  };

  const resetChatOperations = () => {
    dispatch({
      type: CHAT_RESET_OPERATION_COMMAND,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        appLoaded,
        openChat,
        showChatSearch,
        hideChatSearch,
        hideExtended,
        muteChat,
        blockChat,
        reportChat,
        resetChatOperations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
