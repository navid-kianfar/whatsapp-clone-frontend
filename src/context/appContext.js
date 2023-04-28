import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  OPEN_CHAT_START,
  CHAT_SEARCH_HIDE_COMMAND,
  CHAT_SEARCH_COMMAND,
  CHAT_EXTENDED_HIDE_COMMAND,
  MUTE_CHAT_COMMAND,
} from "./actions";

const initialState = {
  token: "",
  user: null,
  qrCode: "",
  loading: false,
  darkTheme: true,
  chats: [],
  chat: null,
  searchPlate: false,
  infoPlate: false,
  operations: {
    chatForMute: null,
  },
};

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

  const showChatSearch = () => {
    dispatch({
      type: CHAT_SEARCH_COMMAND,
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

  const muteChat = (chat) => {
    dispatch({
      type: MUTE_CHAT_COMMAND,
      payload: chat,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        openChat,
        showChatSearch,
        hideChatSearch,
        hideExtended,
        muteChat,
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
