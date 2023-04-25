import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/auth/auth.page";
import ChatsPage from "./pages/chats/chats.page";
import ErrorPage from "./pages/error/error.page";

const App = () => {
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
