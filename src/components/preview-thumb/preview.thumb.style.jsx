import styled from "styled-components";
const Wrapper = styled.div`
  border-radius: 8px;
  padding: 10px;
  background-color: var(--chat-info-drawer-thumb-background);
  cursor: pointer;

  img {
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
  }

  &:hover {
    filter: blur(1px);
  }
`;

export default Wrapper;
