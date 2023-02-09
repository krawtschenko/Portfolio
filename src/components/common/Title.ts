import styled from "styled-components";

export const Title = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px 0 15px;
  margin-bottom: 60px;

  h2 {
    font-size: 40px;
    color: var(--text-black-900);
    font-weight: 700;
    position: relative;

    &::before {
      content: '';
      height: 4px;
      width: 50px;
      background: var(--skin-color);
      position: absolute;
      top: 100%;
      left: 0;
    }

    &::after {
      content: '';
      height: 4px;
      width: 25px;
      background: var(--skin-color);
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 8px;
    }
  }
`