import styled from "styled-components";
import bgImg from "../assets/bg-img.jpg";

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgb(1, 1, 20), #000);
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  justify-content: center;
  align-content: center;
  width: 40rem;
  padding: 2.4rem 0 2rem 0;
  column-gap: 0.8rem;
  grid-template-columns: repeat(4, 8rem);
  grid-template-rows: minmax(12rem, auto) repeat(5, 8rem);
  background-image: linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.09),
      rgba(0, 0, 0, 0.08)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3rem;
  border-right: 0.5rem solid #dfd9d9;
  border-bottom: 0.6rem solid #dfd9d9;
  border-top: 0.7rem solid #dfd9d9;
  box-shadow: 0 0.2rem 1.5rem #000;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 5px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.95);
  margin-bottom: 1rem;
  box-shadow: 0.2rem 0.3rem 0.1rem #333;
  border-radius: 1rem;
  border-bottom: 0.3rem solid #333;
  border-left: 0.3rem solid #999;
  border-top: 0.3rem solid #333;
  border-right: 0.3rem solid #999;
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
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  color: #fff;
  margin-bottom: 1.4rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0.1rem 1.3rem 0.1rem #292828;
  border-bottom: 0.3rem solid #333;
  border-left: 0.3rem solid #999;
  border-top: 0.3rem solid #333;
  border-right: 0.3rem solid #999;
  font-weight: 700;
  padding: 1.5rem;
  transition: 0.2s all;

  @media only screen and (max-width: 60em) {
    cursor: default;
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.7);
    color: #000;
    transform: translateY(0.5rem);
    box-shadow: 0.1rem 0.1rem 0.1rem #141414;
  }

  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `color:#e6c649;`};
  ${({ del }) => del && `background-color:rgb(189, 15, 15, 0.8);`};
  ${({ equals }) => equals && `background-color:rgb(9, 26, 105, 0.8);`};
  ${({ clear }) => clear && `background-color:rgb(6, 86, 100, 0.8);`};
  ${({ decimal }) =>
    decimal && `font-size: 3.5rem;color:#e6c649;padding-bottom: 3rem;`};
`;
