import styled from "styled-components";
import ChatBackground from "../../assets/images/chat-background.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  header {
    box-shadow: 0 1px 3px rgba(var(--shadow-rgb), 0.4);
    padding: 10px 16px;
    background-color: var(--panel-header-background);
    position: relative;
    z-index: 1000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 59px;
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
`;

export default Wrapper;
