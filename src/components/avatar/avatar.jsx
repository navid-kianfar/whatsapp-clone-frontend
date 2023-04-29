import React, { useEffect, useState } from "react";
import Wrapper from "./avatar.styled";
import GroupIcon from "../icons/group.icon";
import UserIcon from "../icons/user.icon";
import { fetchAvatarUrl } from "../../services/api.service";

const Avatar = ({ chat }) => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetchAvatarUrl(chat.id._serialized).then((res) => {
      setAvatar(res.data.avatar);
    });
  }, [chat]);

  const url = avatar || chat.avatar;

  return (
    <Wrapper className="chat-avatar">
      {url && <img src={url} />}
      {!url && chat.isGroup && <GroupIcon />}
      {!url && !chat.isGroup && <UserIcon />}
    </Wrapper>
  );
};

export default Avatar;
