import React, { useState } from "react";
import Wrapper from "./search.chats.style";
import BackIcon from "../icons/back.icon";
import SearchIcon from "../icons/search.icon";
import CrossIcon from "../icons/cross.icon";

const SearchChats = () => {
  const [focused, setFocused] = useState(false);

  const removeFocus = () => {
    if (!focused) return;
    setFocused(false);
  };

  const captureFocus = () => {
    setFocused(true);
    console.log("captured");
  };

  const removeText = () => {
    console.log("removeText");
  };

  return (
    <Wrapper className={`search-input-wrapper ${focused ? "focused" : ""}`}>
      <div onClick={removeFocus} className="icon-wrapper">
        {focused ? <BackIcon /> : <SearchIcon />}
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          onClick={captureFocus}
          placeholder="Search or start a new chat"
        />
      </div>
      <div onClick={removeText} className="clear-wrapper">
        <CrossIcon />
      </div>
    </Wrapper>
  );
};

export default SearchChats;
