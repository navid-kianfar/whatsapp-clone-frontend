import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 1;
  overflow: hidden;

  background-color: var(--search-input-background);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 35px;

  .icon-wrapper {
    display: flex;
    width: 50px;
    align-items: center;
    justify-content: center;
  }
  .input-wrapper {
    display: flex;
    flex-grow: 1;
    input {
      display: block;
      width: 100%;
      background: none;
      outline: none;
      border: none;
      color: white;
    }
  }
  .clear-wrapper {
    display: flex;
    width: 50px;
    align-items: center;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  &.focused {
    .icon-wrapper {
      color: var(--icon-search-back);
    }
  }

  svg {
    cursor: pointer;
  }
`;

export default Wrapper;
