import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--butterbar-default-background);
  padding: 13px 12px 14px 13px;
  width: calc(100% - 25px);
  cursor: pointer;
  border-bottom: 1px solid var(--border-list);
  border-bottom-color: var(--background-default-hover);

  &:hover {
    background-color: var(--background-default-hover) !important;
  }

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
      display: flex;
      flex-grow: 1;
      overflow: hidden;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      color: var(--primary-strong);
      overflow-wrap: break-word;
    }
    .date {
      flex: none;
      max-width: 100%;
      font-size: 12px;
      color: var(--chat-meta);

      overflow: hidden;
      line-height: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
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
      margin-top: 2px;

      .mode {
      }
      .text {
        flex-grow: 1;
        overflow: hidden;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .unread {
    }
  }
`;

export default Wrapper;
