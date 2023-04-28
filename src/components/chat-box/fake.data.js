const messages = Array(50)
  .fill(0)
  .map((msg, idx) => ({
    id: idx + 1,
    text:
      idx % 3 === 0
        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        : `Message ${idx + 1}`,
    me: idx % 2 === 0,
    attachments: [],
    sender: {
      name: "Navid kianfar",
      identifier: "+90 539 222 22 22",
    },
  }));

export { messages };
