import {
  QR_CODE_REQUEST_GENERATED,
  OPEN_CHAT_START,
  NEW_GROUP_COMMAND,
  NEW_COMMUNITY_COMMAND,
  ARCHIVE_COMMAND,
  SELECT_CHATS_COMMAND,
  SETTINGS_COMMAND,
  LOGOUT_COMMAND,
  CHAT_INFO_COMMAND,
  SELECT_CHAT_MESSAGES_COMMAND,
  CLOSE_CHAT_COMMAND,
  MUTE_CHAT_COMMAND,
  CLEAR_CHAT_COMMAND,
  DELETE_CHAT_COMMAND,
  REPORT_CHAT_COMMAND,
  BLOCK_CHAT_COMMAND,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case QR_CODE_REQUEST_GENERATED:
      return {
        ...state,
        qrCode: action.payload,
      };
    case OPEN_CHAT_START:
      return {
        ...state,
        chat: action.payload,
      };

    case CLOSE_CHAT_COMMAND:
      return {
        ...state,
        chat: null,
      };
    default:
      console.log("here");
      return state;
  }
};

export default reducer;
