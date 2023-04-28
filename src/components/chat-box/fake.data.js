const messages = Array(50)
  .fill(0)
  .map((msg, idx) => ({
    id: idx + 1,
    text: `Message ${idx + 1}`,
    me: idx % 2 === 0,
    attachments: [],
  }));

export { messages };
