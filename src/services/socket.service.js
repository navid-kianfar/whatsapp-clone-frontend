import { io } from "socket.io-client";

const URL = "http://localhost:3100";

export const socket = io(URL);
