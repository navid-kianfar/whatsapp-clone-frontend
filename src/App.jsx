import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/auth/auth.page";
import ChatsPage from "./pages/chats/chats.page";
import ErrorPage from "./pages/error/error.page";

import { socket } from './services/socket.service';

const App = () => {

  const onQREvent = (payload) => {
    console.log('onQREvent', payload);
  };
  const onConnect = (payload) => {
    console.log('onConnect', payload);
  };
  const onDisconnect = (payload) => {
    console.log('onDisconnect', payload);
  };

  useEffect(() => {
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('qr', onQREvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('qr', onQREvent);
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
