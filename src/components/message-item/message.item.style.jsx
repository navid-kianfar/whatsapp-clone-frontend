import styled from "styled-components";
const Wrapper = styled.div`
  padding: 0 63px;
  margin-bottom: 10px;

  .message-conatainer {
    margin-bottom: 0;
    border-radius: 7.5px;
    position: relative;
    flex: none;
    font-size: 14.2px;
    line-height: 19px;
    color: var(--message-primary);
    display: flex;
    flex-direction: column;
    border-top-left-radius: 0 !important;

    .tail-in {
      left: -8px;
      color: var(--incoming-background);
      position: absolute;
      top: -2px;
      z-index: 100;
      display: block;
      width: 8px;
      height: 13px;
    }

    .inner {
      max-width: 65%;
      position: relative;
      z-index: 200;
      display: flex;

      .sender {
        display: flex;
        display: none;
      }

      .message {
        background-color: var(--incoming-background);
        box-shadow: 0 1px 0.5px rgba(var(--shadow-rgb), 0.13);
        border-radius: 7.5px;
        border-top-left-radius: 0 !important;
        padding-left: var(--bubble-padding-start);
        padding-right: var(--bubble-padding-end);
        padding-bottom: 8px;
        padding-top: 6px;
        box-sizing: border-box;
        display: flex;
        align-items: end;

        .text {
          display: flex;
          position: relative;
          overflow-wrap: break-word;
          white-space: pre-wrap;
          font-size: 14px;
          line-height: 1.5;
        }

        .time {
          display: flex;
          margin-inline-start: 10px;
          font-size: 10px;
        }
      }
    }

    &.me {
      align-items: flex-end;

      .tail-in {
        right: -8px;
        left: unset;
        color: var(--outgoing-background) !important;
      }
      .message {
        border-top-left-radius: 7.5px !important;
        border-top-right-radius: 0 !important;
        background-color: var(--outgoing-background) !important;
        box-shadow: 0 1px 0.5px rgba(var(--shadow-rgb), 0.13) !important;
      }
    }
  }
`;

export default Wrapper;
