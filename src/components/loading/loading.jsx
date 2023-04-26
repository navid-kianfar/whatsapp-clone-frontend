import Wrapper from "./loading.style";
import LogoGray from "../logos/logo.gray";

const Loading = () => {
  return (
    <Wrapper>
      <div className="initial_startup">
        <div className="graphic">
          <span>
            <LogoGray />
          </span>
        </div>
        <div className="progress">
          <progress value="50" max="100" dir="ltr"></progress>
        </div>
        <div className="main">WhatsApp</div>
        <div className="secondary">
          <span>
            <svg width="10" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 1.6c1.4 0 2.5 1 2.6 2.4v1.5h.2c.5 0 1 .4 1 1V10c0 .6-.5 1-1 1H2.3a1 1 0 01-1.1-1V6.5c0-.6.5-1 1-1h.2V4.2c0-1.4 1-2.5 2.4-2.6H5zm0 1.2c-.7 0-1.3.6-1.3 1.3v1.4h2.6V4.2c0-.7-.4-1.2-1-1.3H5z"
                fill="currentColor"
              ></path>
            </svg>
            &nbsp;
          </span>
          &nbsp;End-to-end encrypted
        </div>
      </div>
    </Wrapper>
  );
};

export default Loading;
