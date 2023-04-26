import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 62px;
  background-color: var(--butterbar-default-background);
  padding: 13px 12px 14px 13px;
  width: calc(100% - 25px);
  cursor: pointer;

  .avatar {
    display: flex;
    min-width: 77px;
    max-width: 77px;
    align-items: center;

    svg {
      width: 49px;
      height: 49px;
    }
  }
  .inner {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 16px;
      line-height: 21px;
      color: var(--butterbar-primary);
    }
    .date {
    }
  }
  .more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .last-message {
      align-items: center;
      display: flex;
      font-size: 14px;
      line-height: 19px;
      color: var(--butterbar-secondary);
      text-decoration: underline;
      margin-top: 2px;

      .mode {
      }
      .text {
      }
    }
    .unread {
    }
  }
`;

export default Wrapper;
