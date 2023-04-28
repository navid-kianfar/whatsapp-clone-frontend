const defaultOperations = {
  chatForMute: null,
  chatForBlock: null,
  chatForReport: null,
};

const initialState = {
  token: "",
  user: null,
  qrCode: "",
  loading: false,
  darkTheme: true,
  chats: [],
  chat: null,
  searchPlate: false,
  infoPlate: false,
  operations: { ...defaultOperations },
};

export { defaultOperations, initialState };
