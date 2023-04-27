import React, { useState } from "react";
import Wrapper from "./filter.style";
import BackIcon from "../icons/back.icon";
import SearchIcon from "../icons/search.icon";
import CrossIcon from "../icons/cross.icon";

const Filter = ({ placeholder }) => {
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
        <input type="text" onClick={captureFocus} placeholder={placeholder} />
      </div>
      <div onClick={removeText} className="clear-wrapper">
        <CrossIcon />
      </div>
    </Wrapper>
  );
};

export default Filter;
