import styled from "styled-components";
import ChatBackground from "../../assets/images/chat-background.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  header {
    box-shadow: 0 1px 3px rgba(var(--shadow-rgb), 0.4);
    padding: 15px 16px 10px;
    background-color: var(--panel-header-background);
    position: relative;
    z-index: 1000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 59px;

    .info-wrapper {
      display: flex;
      flex-grow: 1;
      align-items: center;
      .avatar {
        display: flex;
        width: 50px;
        align-items: center;
        justify-content: center;
        svg {
          width: 40px;
          height: 40px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        height: 50px;
        margin-inline-start: 10px;
        .title {
          display: flex;
          flex-grow: 1;
          overflow: hidden;
          font-size: 16px;
          font-weight: 400;
          line-height: 21px;
          color: var(--primary-strong);
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .date {
          flex-grow: 1;
          overflow: hidden;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--butterbar-secondary);
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      .action {
        margin-inline-start: 20px;
        cursor: pointer;
        svg {
          width: 24px;
          height: 24px;
        }

        &:focus {
          background-color: var(--menu-bar-item-background-active);
        }
      }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;

    &::before {
      content: "";
      background-image: url(${ChatBackground});
      background-repeat: repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.06;
    }

    &.loadng {
    }

    .loader-wrapper {
      position: absolute;
      top: calc(50% - 32px);
      left: calc(50% - 32px);
      svg {
      }
    }
  }
  footer {
    display: flex;
    align-items: center;

    padding: 0;
    background-color: var(--compose-panel-background);
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    flex: none;
    order: 3;
    width: 100%;
    min-height: 62px;

    .footer-inner {
      border-left: 1px solid var(--border-stronger);
      padding: 5px 16px;
      background-color: var(--rich-text-panel-background);
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      max-width: 100%;
      min-height: 62px;
      align-items: center;
      flex-grow: 1;

      .actions {
        display: flex;
        align-items: center;
        .action {
          margin-inline-end: 10px;
          svg {
          }
        }
      }
      .send-wrapper {
        display: flex;
        align-items: center;
        flex-grow: 1;
        .input-wrapper {
          display: flex;
          flex-grow: 1;
          textarea {
            padding: 11px 12px;
            margin: 5px 8px;
            background-color: var(--compose-input-background);
            border: 1px solid var(--compose-input-border);
            border-radius: 8px;
            resize: none;
            outline: none;
            width: 100%;
            color: #fff;
          }
          margin-inline-end: 10px;
        }
        .send-action {
          svg {
          }
        }
      }
    }
  }

  .action-holder {
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
    color: var(--panel-header-icon);
  }
`;

export default Wrapper;
