import React from "react";
import Wrapper from "./search.chats.style";

const SearchChats = () => {
  return (
    <Wrapper className="search-input-wrapper">
      <div className="icon-wrapper"></div>
      <input type="text" placeholder="Search or start a new chat" />
      <div className="clear-wrapper"></div>
    </Wrapper>
  );
};

export default SearchChats;
