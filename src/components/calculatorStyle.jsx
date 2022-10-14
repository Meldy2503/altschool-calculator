// added styles using style component CSS framework

import styled from "styled-components";

export const CalculatorWrapper = styled.section`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  position: relative;
  box-shadow: 0.6rem 0.2rem 0.5rem 0.3rem ${({ theme }) => theme.shadow};
  width: 41rem;
  padding: 1rem 0 5rem 0;
  background-color: ${({ theme }) => theme.containerBgCo};
  border-radius: 3rem;

  @media only screen and (max-width: 330px) {
    width: 34.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    box-shadow: -0.1rem -0.7rem 0.1rem 0.2rem ${({ theme }) => theme.shadowBefore};
  }
`;

export const Screen = styled.div`
  height: 12rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.5rem 1.5rem 0 0.5rem;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  background-color: ${({ theme }) => theme.btnBgCo};
  box-shadow: -0.62rem -0.62rem 0.5rem -0.1rem ${({ theme }) => theme.shadow};
  border-radius: 1rem;
  position: relative;
  margin: 1.7rem 3rem;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 0.6rem -0.2rem ${({ theme }) => theme.shadowBefore};
  }
`;

export const Previous = styled.div`
  color: ${({ theme }) => theme.previousText};
  font-size: 2rem;
  font-weight: 500;
`;

export const Current = styled.div`
  color: ${({ theme }) => theme.currentText};
  font-size: 3.2rem;
  font-weight: 500;
`;

export const Btns = styled.div`
  display: grid;
  column-gap: 1.1rem;
  grid-template-columns: repeat(4, 8rem);
  grid-template-rows: repeat(5, 8rem);
  justify-content: center;
  align-content: center;

  @media only screen and (max-width: 330px) {
    column-gap: 1.1rem;
    grid-template-columns: repeat(4, 6.7rem);
    grid-template-rows: repeat(5, 6.7rem);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 2rem;
  font-size: 2.2rem;
  outline: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.btnBgCo};
  display: flex;
  color: ${({ theme }) => theme.btnTextColor};
  justify-content: center;
  align-items: center;
  box-shadow: 0.3rem 1.1rem 0.3rem 0.1rem ${({ theme }) => theme.shadow};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border: none;
  position: relative;
  transition: 0.2s all;

  @media only screen and (max-width: 60em) {
    cursor: default;
  }

  &:active {
    transform: translate(-0.1rem, -0.1rem);
    box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem ${({ theme }) => theme.btnActiveColor};
  }

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBg};
    color: ${({ theme }) => theme.btnHoverCo};
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: -0.4rem -0.4rem 0.6rem -0.2rem
      ${({ theme }) => theme.btnBoxShadowbefore};

    &:active {
      transform: translate(-0.1rem, -0.1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem ${({ theme }) => theme.btnActiveColor};
    }
  }

  ${({ operation }) => operation && `color: #b49104;`};
  ${({ del }) =>
    del && `background-color:rgb(189, 15, 15, 0.75); color: #fff;`};
  ${({ equals }) =>
    equals && `background-color:rgb(9, 26, 105, 0.75); color: #fff;`};
  ${({ clear }) =>
    clear && `background-color:rgb(6, 86, 100, 0.75); color: #fff;`};
  ${({ decimal }) => decimal && `font-size: 3rem; color:#b49104;`};
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1.4rem 0 0rem 2rem;
`;
