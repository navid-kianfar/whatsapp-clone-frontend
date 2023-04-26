import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 1;
  overflow: hidden;

  background-color: var(--search-input-background);
  border-radius: 8px;
  padding-right: 32px;
  padding-left: 65px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 35px;

  .icon-wrapper {
  }
  input {
    display: block;
    width: 100%;
    background: none;
    outline: none;
    border: none;
    color: white;
  }
`;

export default Wrapper;
