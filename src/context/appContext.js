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
  APP_LOADED as CHATS_LOADED,
  APP_AUTHENTICATE,
  APP_LOADING_PROGRESS,
  APP_READY
} from "./actions";
import { initialState } from "./defaults";


const user = localStorage.getItem("user") || "";
initialState.user = user ? JSON.parse(user) : null;

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authenticate = () => {
    dispatch({
      type: APP_AUTHENTICATE
    });
  };
  const loadingProgress = (payload) => {
    dispatch({
      type: APP_LOADING_PROGRESS,
      payload,
    });
  };
  const ready = () => {
    dispatch({
      type: APP_READY
    });
  };

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

  const chatsLoaded = (payload) => {
    dispatch({
      type: CHATS_LOADED,
      payload,
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
        chatsLoaded,
        openChat,
        showChatSearch,
        hideChatSearch,
        hideExtended,
        muteChat,
        blockChat,
        reportChat,
        resetChatOperations,
        authenticate,
        loadingProgress,
        ready
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
