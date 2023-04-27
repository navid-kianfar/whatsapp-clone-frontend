import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  top: calc(var(--h-pane-header) + var(--h-filter-height) + 10px);
  left: 0;
  display: flex;
  align-items: center;
  min-height: 62px;
  background-color: var(--butterbar-default-background);
  padding: 13px 12px 14px 13px;
  width: 30vw;
  max-width: 500px;
  box-sizing: border-box;
  z-index: 2;
  cursor: pointer;

  .icon {
    margin-inline-end: 15px;
    width: 50px;

    .circle {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--butterbar-notification-icon);
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .title {
      font-size: 16px;
      line-height: 21px;
      color: var(--butterbar-primary);
    }
    .description {
      font-size: 14px;
      line-height: 19px;
      color: var(--butterbar-secondary);
      text-decoration: underline;
      margin-top: 2px;
    }
  }
  .close {
    display: flex;
    width: 40px;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
