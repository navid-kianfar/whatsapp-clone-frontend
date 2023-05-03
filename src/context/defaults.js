const defaultOperations = {
  chatForMute: null,
  chatForBlock: null,
  chatForReport: null,
  chatForClear: null,
  chatForDelete: null,
};

const initialState = {
  token: "",
  user: null,
  qrCode: "",
  loading: true,
  darkTheme: true,
  chats: [],
  chat: null,
  searchPlate: false,
  infoPlate: false,
  operations: { ...defaultOperations },
  authenticated: false,
  loadingPercent: 0,
};

export { defaultOperations, initialState };
