import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-background);

  .initial_startup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: #111b21;
  }

  .initial_startup .graphic {
    margin-top: -40px;
    color: var(--startup-icon);
  }

  .initial_startup .graphic .resume-logo {
    transform: translateX(calc(50% - 52px / 2));
  }

  .initial_startup .graphic::after {
    position: relative;
    top: -100%;
    left: calc(50% - 72px * 2 - 72px / 2);
    display: block;
    width: calc(72px * 3);
    height: 100%;
    content: "";
    background: linear-gradient(
      to right,
      rgba(var(--startup-background-rgb), 0.5) 0,
      rgba(var(--startup-background-rgb), 0.5) 33.33%,
      rgba(var(--startup-background-rgb), 0) 44.1%,
      rgba(var(--startup-background-rgb), 0) 55.8%,
      rgba(var(--startup-background-rgb), 0.5) 66.66%,
      rgba(var(--startup-background-rgb), 0.5) 100%
    );
    opacity: 1;
    animation: shimmer 1.5s linear 0.6s infinite;
  }

  @keyframes shimmer {
    from {
      left: calc(50% - 72px * 2 - 72px / 2);
    }

    to {
      left: calc(50% - 72px / 2);
    }
  }

  .initial_startup .progress {
    position: relative;
    width: 420px;
    height: 3px;
    margin-top: 40px;
  }

  .initial_startup .progress progress {
    vertical-align: top;
  }

  .initial_startup .main {
    margin-top: 40px;
    font-size: 17px;
    color: var(--primary-title);
  }

  .initial_startup .secondary {
    margin-top: 12px;
    font-size: 14px;
    color: var(--secondary-lighter);
  }

  .initial_startup .secondary span {
    display: inline-block;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  progress {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3px;
    margin: 0;
    color: var(--progress-primary);
    background-color: var(--progress-background);
    border: none;
  }

  progress[value]::-webkit-progress-bar {
    background-color: var(--progress-background);
  }

  progress[value]::-moz-progress-bar,
  progress[value]::-webkit-progress-value {
    background-color: var(--progress-primary);
    transition: width 0.45s ease;
  }
`;

export default Wrapper;
