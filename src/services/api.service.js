import axios from "axios";

const apiPrefix = "http://localhost:3100";

const fetchQR = () => {
  const url = `${apiPrefix}/qr`;
  return axios.get(url);
};

const fetchChats = () => {
  const url = `${apiPrefix}/chats`;
  return axios.get(url);
};

export { fetchQR, fetchChats };
