import styled from "styled-components";

const Wrapper = styled.div`
  width: 260px;
  height: 260px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;

  img {
    width: 260px;
  }

  .expired {
    filter: blur(3px);
  }

  .reload-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: none;
  }

  button {
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgb(0, 168, 132);
    color: white;
    flex-direction: column;
  }

  button svg {
    margin-bottom: 10px;
  }
`;

export default Wrapper;
