import { QR_CODE_REQUEST_GENERATED, OPEN_CHAT_START } from "./actions";

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
    default:
      return state;
  }
};

export default reducer;
