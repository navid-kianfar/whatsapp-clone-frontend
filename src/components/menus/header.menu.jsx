import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  NEW_GROUP_COMMAND,
  NEW_COMMUNITY_COMMAND,
  ARCHIVE_COMMAND,
  SELECT_CHATS_COMMAND,
  SETTINGS_COMMAND,
  LOGOUT_COMMAND,
} from "../../context/actions";

const options = [
  { text: "New group", type: NEW_GROUP_COMMAND },
  { text: "New community", type: NEW_COMMUNITY_COMMAND },
  { text: "Archived", type: ARCHIVE_COMMAND },
  { text: "Select chats", type: SELECT_CHATS_COMMAND },
  { text: "Settings", type: SETTINGS_COMMAND },
  { text: "Logout", type: LOGOUT_COMMAND },
];

const HeaderMenu = ({ anchorEl, release }) => {
  const open = Boolean(anchorEl);
  return (
    <Menu
      id="header-menu"
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

export default HeaderMenu;
