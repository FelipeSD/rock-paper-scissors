import styled from "styled-components";

const Container = styled.main`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid var(--header-outline);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
`;

const ScoreBoard = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  padding: 0.8rem 2.5rem;
`;

const ScoreBoardTitle = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-align: center;
  color: var(--score-text);
`;

const ScoreBoardScore = styled.div`
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.1rem;
  line-height: 3.4rem;
  color: var(--dark-text);
`;

const Logo = styled.div`
  background-image: url("/images/logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 162px;
  height: 99px;
`;

const GameContainer = styled.div`
  position: relative;
  margin: 6rem auto 0;
  height: 350px;
  width: 350px;
`;

const GameBoard = styled.div`
  height: 100%;
  background-image: url("/images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

interface GameBoardItemProps {
  name: string;
  top: number;
  left: number;
}
const GameBoardItemSize = "5.5rem";
const GameBoardItem = styled.div<GameBoardItemProps>`
  position: absolute;
  top: calc(${(props) => props.top + "rem"} - ${GameBoardItemSize});
  left: calc(${(props) => props.left + "rem"} - ${GameBoardItemSize});
  border-color: unset;
  border-radius: 50%;
  padding: ${GameBoardItemSize};
  z-index: 1;
  background: ${(props) => `var(--${props.name}-gradient)`};
  box-shadow: 0px 10px 1px 0px ${(props) => `var(--${props.name}-dark)`};
  transition: all 0.2s ease-in-out;

  &::before {
    content: "";
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    border-color: unset;
    border-radius: 50%;
    background: var(--light-background);
    padding: calc(${GameBoardItemSize} - 1.2rem);
    box-shadow: inset 0px 7px 1px 0px var(--light-shadow);
    background-image: url("/images/${(props) => `icon-${props.name}`}.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 4rem;
    transition: all 0.2s ease-in-out;
  }

  &:active {
    box-shadow: 0px 7px 1px 0px ${(props) => `var(--${props.name}-dark)`};
    transform: translateY(7px);
    &::before {
      box-shadow: unset;
    }
  }
`;

const Button = styled.button`
  background: unset;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  color: var(--white);
  text-transform: uppercase;
`;

export {
  Container,
  Button,
  GameContainer,
  GameBoard,
  GameBoardItem,
  Header,
  ScoreBoard,
  ScoreBoardTitle,
  ScoreBoardScore,
  Logo,
};
