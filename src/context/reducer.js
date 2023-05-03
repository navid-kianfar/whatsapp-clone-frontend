import {
  QR_CODE_REQUEST_GENERATED,
  OPEN_CHAT_START,
  NEW_GROUP_COMMAND,
  NEW_COMMUNITY_COMMAND,
  ARCHIVE_COMMAND,
  SELECT_CHATS_COMMAND,
  SETTINGS_COMMAND,
  LOGOUT_COMMAND,
  CHAT_EXTENDED_HIDE_COMMAND,
  CHAT_SEARCH_COMMAND,
  CHAT_INFO_COMMAND,
  SELECT_CHAT_MESSAGES_COMMAND,
  CLOSE_CHAT_COMMAND,
  MUTE_CHAT_COMMAND,
  CLEAR_CHAT_COMMAND,
  DELETE_CHAT_COMMAND,
  REPORT_CHAT_COMMAND,
  BLOCK_CHAT_COMMAND,
  CHAT_RESET_OPERATION_COMMAND,
  APP_LOADED,

  APP_AUTHENTICATE,
  APP_LOADING_PROGRESS,
  APP_READY
} from "./actions";
import { defaultOperations } from "./defaults";

const reducer = (state, action) => {
  switch (action.type) {
    case APP_AUTHENTICATE:
      return {
        ...state,
        authenticated: true,
        user: {}
      };
    case APP_LOADING_PROGRESS:
      return {
        ...state,
        loadingPercent: action.payload.percent
      };
    case APP_READY:
      return {
        ...state,
        loading: false,
        user: {}
      };
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

    case CHAT_INFO_COMMAND:
      return {
        ...state,
        infoPlate: true,
        searchPlate: false,
      };

    case CHAT_SEARCH_COMMAND:
      return {
        ...state,
        infoPlate: false,
        searchPlate: true,
      };

    case CHAT_EXTENDED_HIDE_COMMAND:
      return {
        ...state,
        infoPlate: false,
        searchPlate: false,
      };
    case MUTE_CHAT_COMMAND:
      return {
        ...state,
        operations: {
          ...defaultOperations,
          chatForMute: action.payload,
        },
      };
    case BLOCK_CHAT_COMMAND:
      return {
        ...state,
        operations: {
          ...defaultOperations,
          chatForBlock: action.payload,
        },
      };
    case REPORT_CHAT_COMMAND:
      return {
        ...state,
        operations: {
          ...defaultOperations,
          chatForReport: action.payload,
        },
      };
    case CLEAR_CHAT_COMMAND:
      return {
        ...state,
        operations: {
          ...defaultOperations,
          chatForClear: action.payload,
        },
      };
    case DELETE_CHAT_COMMAND:
      return {
        ...state,
        operations: {
          ...defaultOperations,
          chatForDelete: action.payload,
        },
      };
    case CHAT_RESET_OPERATION_COMMAND:
      return {
        ...state,
        operations: { ...defaultOperations },
      };
    case APP_LOADED:
      return {
        ...state,
        loading: false,
        chats: action.payload.chats || [],
      };
    default:
      console.log("here");
      return state;
  }
};

export default reducer;
