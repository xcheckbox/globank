import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 650px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    width: 360px;
    height: 700px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    height: 768px;
  }
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f1f1f1;
`;