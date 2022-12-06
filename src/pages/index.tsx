import Head from "next/head";

import {
  Container,
  GameBoard,
  GameBoardItem,
  GameContainer,
  Logo,
  Header,
  ScoreBoard,
  ScoreBoardTitle,
  ScoreBoardScore,
  Button,
} from "../components/index.styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rock, paper, scissors</title>
        <meta name="description" content="Rock, paper, scissors" />
        <link rel="icon" href="/images/icon-scissors.svg" />
      </Head>
      <Container>
        <Header>
          <Logo role="img" aria-label="Rock, paper, scissors" />
          <ScoreBoard>
            <ScoreBoardTitle>Score</ScoreBoardTitle>
            <ScoreBoardScore>12</ScoreBoardScore>
          </ScoreBoard>
        </Header>
        <GameContainer>
          <GameBoardItem name="paper" top={3} left={3} />
          <GameBoardItem name="scissors" top={3} left={20} />
          <GameBoardItem name="rock" top={18} left={11} />
          <GameBoard />
        </GameContainer>
      </Container>
      <div className="d-flex justify-content-end">
        <Button className="m-4">Rules</Button>
      </div>
      <footer></footer>
    </>
  );
}
