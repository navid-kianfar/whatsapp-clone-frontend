import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

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
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
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
