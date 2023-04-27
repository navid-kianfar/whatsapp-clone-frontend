import React from "react";
import Filter from "../filter/filter";
import Wrapper from "./chat.search.style";

const ChatSearch = () => {
  return (
    <Wrapper className="chat-search-wrapper">
      <div className="search-header">
        <Filter placeholder="Search..." />
      </div>
    </Wrapper>
  );
};

export default ChatSearch;
