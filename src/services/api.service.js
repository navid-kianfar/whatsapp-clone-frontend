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

const fetchMessages = (id) => {
  const url = `${apiPrefix}/chat/${id}/messages`;
  return axios.post(url, {
    page: 1,
    limit: 100,
    query: "",
  });
};

const searchMessages = (id) => {
  const url = `${apiPrefix}/chat/${id}/search`;
  return axios.post(url, {
    page: 1,
    limit: 100,
    query: "",
  });
};

const fetchAvatarUrl = () => {
  const url = `${apiPrefix}/avatar`;
  return axios.get(url);
};

export { fetchQR, fetchChats, fetchMessages, searchMessages, fetchAvatarUrl };
