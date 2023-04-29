import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;

  .colored-bg {
    padding: 10px 20px;
    padding-bottom: var(--padding-drawer-bottom);
    margin-bottom: 10px;
    background-color: var(--drawer-section-background);
  }

  .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    h3 {
      margin: 10px 0 0;
      color: var(--primary);
      font-size: 1.5rem;
      font-weight: normal;
    }
    h4 {
      color: var(--secondary-lighter);
      font-size: 1rem;
      font-weight: normal;
    }

    img {
      margin-top: 20px;
      width: 250px;
      height: 250px;
    }
  }

  .about {
    h3 {
      margin: 0;
      color: var(--text-secondary-lighter);
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5;
    }
    h4 {
      margin: 0;
      color: var(--primary-strong);
      font-weight: normal;
      word-break: break-word;
      font-size: 1rem;
      line-height: 1.3;
    }
  }
  .media {
    .title {
      margin: 0;
      color: var(--text-secondary-lighter);
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .more {
      display: flex;
      align-items: center;
      span {
        margin-inline-end: 10px;
        font-size: 13px;
      }
    }

    .previews {
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .commands {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    .command {
      padding-left: 10px !important;
      padding-right: 10px !important;
      display: flex;
      align-items: center;
      padding: 15px 0;
      cursor: pointer;
      .title {
        display: flex;
        flex-grow: 1;
      }
      .option {
        svg {
          position: relative;
          top: 3px;
        }
      }
      .icon {
        margin-inline-end: 10px;
        svg {
        }
      }

      &:hover {
        background-color: var(--background-default-hover) !important;
      }
    }

    &.danger {
      color: var(--danger);
    }
  }

  .common-groups {
    padding-left: 0;
    padding-right: 0;
    h3 {
      margin: 0 0 20px 30px;
      color: var(--text-secondary-lighter);
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .groups {
    }
  }
`;

export default Wrapper;
