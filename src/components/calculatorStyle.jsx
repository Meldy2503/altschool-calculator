// added styles using style component CSS framework

import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  background-color: #181717;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.5rem #383838;
`;
export const Container = styled.div`
  position: relative;
  box-shadow: 0.6rem 0.9rem 0.5rem 0.3rem #000;
  margin: 15rem auto;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 40rem;
  padding: 4rem 0;
  column-gap: 1rem;
  grid-template-columns: repeat(4, 7.8rem);
  grid-template-rows: minmax(12rem, auto) repeat(5, 7.8rem);
  background-color: #202020;
  border-radius: 3rem;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    box-shadow: -0.5rem -0.6rem 0.5rem 0 #141313;
  }
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.5rem 1.5rem 0 0.5rem;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  background-color: #0f0f0f;
  margin-bottom: 1.2rem;
  box-shadow: -0.62rem -0.62rem 0.5rem -0.1rem #000;
  border-radius: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 0.6rem -0.2rem #141313;
  }
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
`;

export const Current = styled.div`
  color: #fff;
  font-size: 3.2rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2.2rem;
  outline: none;
  border-radius: 50%;
  background-color: #0f0f0f;
  display: flex;
  color: #fff;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0.6rem 0.8rem 0.3rem 0.1rem #000;
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
    box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem #141414;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: -0.4rem -0.4rem 0.6rem -0.2rem #424242;

    &:active {
      transform: translate(-0.1rem, -0.1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem #141414;
    }
  }

  ${({ operation }) => operation && `color:#e6c649;`};
  ${({ del }) => del && `background-color:rgb(189, 15, 15, 0.8);`};
  ${({ equals }) => equals && `background-color:rgb(9, 26, 105, 0.8);`};
  ${({ clear }) => clear && `background-color:rgb(6, 86, 100, 0.8);`};
  ${({ decimal }) => decimal && `font-size: 3.5rem;color:#e6c649;`};
`;
