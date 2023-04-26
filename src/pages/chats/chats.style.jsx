import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 30vw;
    max-width: 500px;

    header {
      display: flex;
      justify-content: flex-end;
      padding: 10px 16px;
      align-items: center;
      background-color: var(--panel-header-background);
      height: var(--h-pane-header);
      box-sizing: border-box;

      .avatar {
        display: flex;
        flex-grow: 1;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .actions {
        display: flex;
        align-items: center;
        width: 190px;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        button {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 3px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: var(--panel-header-icon);
          }
          &:focus {
            background-color: var(--menu-bar-item-background-active);
          }
        }
      }
    }

    .inner-container {
      display: flex;
      flex-direction: column;

      .search-container {
        padding-inline-start: 0;
        padding: 10px 12px;
        background-color: var(--search-input-container-background);
        position: relative;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        flex: 1;
        overflow: hidden;
        height: 49px;
        transition: box-shadow 0.18s ease-out, background-color 0.25s ease-out;

        .filter-btn {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 3px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: var(--panel-header-icon);
          }
        }
      }
    }

    .chats-container {
      position: relative;
      &.has-notification {
        padding-top: 90px;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-left: 1px solid var(--border-stronger);
    padding-top: 28px;
    padding-bottom: 28px;
    cursor: default;
    background-color: var(--intro-background);
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    .no-chat {
      width: 40vw;
      max-width: 600px;
      .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          display: inline-flex;
          font-size: 32px;
          font-weight: 300;
          line-height: 37.5px;
          color: var(--primary-title);
          margin-top: 40px;
        }
        .info-note {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: var(--intro-secondary);
          margin-top: 16px;
          text-align: center;
        }
      }
    }
  }
`;

export default Wrapper;
