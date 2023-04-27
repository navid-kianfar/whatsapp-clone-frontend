import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { OPEN_CHAT_START } from "./actions";

const token = localStorage.getItem("token") || "";
let user = token ? JSON.parse(localStorage.getItem("user")) : null;

if (!user) {
  user = {};
}

const initialState = {
  token,
  user,
  qrCode: "",
  loading: false,
  darkTheme: true,
  chats: [],
  chat: null,
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openChat = (chat) => {
    dispatch({
      type: OPEN_CHAT_START,
      payload: chat,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        openChat,
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
