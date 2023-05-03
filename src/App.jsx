import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/auth/auth.page";
import ChatsPage from "./pages/chats/chats.page";
import ErrorPage from "./pages/error/error.page";
import { socket } from './services/socket.service';
import { useAppContext } from "./context/appContext";


const App = () => {

  const {} = useAppContext();

  const onConnect = (payload) => {
    console.log('onConnect', payload);
  };
  const onDisconnect = (payload) => {
    console.log('onDisconnect', payload);
  };
  const onReady = (payload) => {
    console.log('onReady', payload);
  };
  const onAuthenticated = (payload) => {
    console.log('onAuthenticated', payload);
  };
  const onLoading = (payload) => {
    console.log('onLoading', payload);
  };

  useEffect(() => {
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('ready', onReady);
    socket.on('authenticated', onAuthenticated);
    socket.on('loading_screen', onLoading);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('ready', onReady);
      socket.off('authenticated', onAuthenticated);
      socket.off('loading_screen', onLoading);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
