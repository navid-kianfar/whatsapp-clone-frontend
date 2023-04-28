import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;

  .colored-bg {
    padding: 10px;
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
  }
`;

export default Wrapper;
