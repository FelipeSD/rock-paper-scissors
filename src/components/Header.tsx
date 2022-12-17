import styled from "styled-components";
import { useGame } from "../hooks/useGame";

export default function Header() {
  const { score, gameName, gameLogo } = useGame();

  return (
    <Container>
      <Logo name={gameLogo} role="img" aria-label={gameName} />
      <ScoreBoard>
        <ScoreBoardTitle>Score</ScoreBoardTitle>
        <ScoreBoardScore>{score}</ScoreBoardScore>
      </ScoreBoard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  border: 3px solid var(--header-outline);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  width: 100%;
  max-width: 700px;
`;

const Logo = styled.div<{ name: string }>`
  background-image: ${(props) => `url("/images/${props.name}.svg")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 162px;
  height: ${(props) => (props.name === "logo" ? "99px" : "162px")};
`;

const ScoreBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
