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
    margin-inline-end: 15px;
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
    .date {
    }
  }
  .more {
    .last-message {
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
