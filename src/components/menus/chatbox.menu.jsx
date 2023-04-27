import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  CHAT_INFO_COMMAND,
  SELECT_CHAT_MESSAGES_COMMAND,
  CLOSE_CHAT_COMMAND,
  MUTE_CHAT_COMMAND,
  DISAPPEARING_CHAT_COMMAND,
  CLEAR_CHAT_COMMAND,
  DELETE_CHAT_COMMAND,
  REPORT_CHAT_COMMAND,
  BLOCK_CHAT_COMMAND,
} from "../../context/actions";

const options = [
  { text: "Contact info", type: CHAT_INFO_COMMAND },
  { text: "Select messages", type: SELECT_CHAT_MESSAGES_COMMAND },
  { text: "Close chat", type: CLOSE_CHAT_COMMAND },
  { text: "Mute notification", type: MUTE_CHAT_COMMAND },
  { text: "Disappearing messages", type: DISAPPEARING_CHAT_COMMAND },
  { text: "Clear messages", type: CLEAR_CHAT_COMMAND },
  { text: "Delete chat", type: DELETE_CHAT_COMMAND },
  { text: "Report", type: REPORT_CHAT_COMMAND },
  { text: "Block", type: BLOCK_CHAT_COMMAND },
];

const ChatboxMenu = ({ anchorEl, release }) => {
  const open = Boolean(anchorEl);
  return (
    <Menu
      id="chatbox-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => release()}
    >
      {options.map((option) => (
        <MenuItem
          key={option.type}
          disabled={option.disabled}
          selected={option.selected}
          onClick={() => release(option)}
        >
          {option.text}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ChatboxMenu;
