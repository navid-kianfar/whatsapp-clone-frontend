import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 92px;
  cursor: default;

  .landing-wrapper-before {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 222px;
    background-color: #00a884;
  }
  .landing-header {
    margin: 27px auto 28px;
    max-width: 1000px;
    width: 100vw;
  }
  .landing-header span {
    display: inline-block;
    vertical-align: top;
  }
  .landing-header-title {
    display: flex;
    align-items: center;
    margin-left: 14px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    color: #fff;
    text-transform: uppercase;
    vertical-align: middle;
  }
  .landing-window {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 17px 50px 0 rgba(11, 20, 26, 0.19),
      0 12px 15px 0 rgba(11, 20, 26, 0.24);
    max-width: 1000px;
    width: 100vw;
  }
  .landing-main {
    padding: 64px 60px 60px;
  }
  .section-signin {
    padding-bottom: 50px;
  }
  .signin-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .landing-title {
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 300;
    line-height: normal;
    color: #41525d;
  }

  ol {
    padding: 0 0 0 24px;
  }

  ol li {
    font-size: 18px;
    line-height: 28px;
    color: var(--gray-700);
  }
  ol li::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
  ol li svg {
    position: relative;
    top: 5px;
  }
`;

export default Wrapper;
