import { QR_CODE_REQUEST_GENERATED } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case QR_CODE_REQUEST_GENERATED:
      return {
        ...state,
        qrCode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
