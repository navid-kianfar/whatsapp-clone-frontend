import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

const token = localStorage.getItem("token") || "";
let user = token ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
  token,
  user,
  qrCode: "",
  loading: true,
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
