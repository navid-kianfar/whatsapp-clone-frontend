import React from "react";
import Wrapper from "./avatar.styled";
import GroupIcon from "../icons/group.icon";
import UserIcon from "../icons/user.icon";

const Avatar = ({ url, group }) => {
  return (
    <Wrapper className="chat-avatar">
      {url && <img src={url} />}
      {!url && group && <GroupIcon />}
      {!url && !group && <UserIcon />}
    </Wrapper>
  );
};

export default Avatar;
