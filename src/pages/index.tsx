import { GameBoardEnum, GamePieceEnum } from "../../domain/Game";
import Link from "next/link";
import styled from "styled-components";
import GamePiece from "../components/GamePiece";
import GameLayout from "../layouts/GameLayout";
import { useGame } from "../hooks/useGame";

export default function Home() {
  const { pieces, gameBoard, setUserChoice } = useGame();

  const onSelect = (name: GamePieceEnum) => {
    setUserChoice(name);
  };

  return (
    <GameLayout>
      <GameContainer>
        {pieces?.map((piece) => (
          <Placer key={piece.name} top={piece.top} left={piece.left}>
            <Link
              href="/playground"
              scroll={false}
              onClick={() => onSelect(piece.name)}
            >
              <StyledGamePiece name={piece.name} />
            </Link>
          </Placer>
        ))}
        <Board board={gameBoard} />
      </GameContainer>
    </GameLayout>
  );
}

const GameContainer = styled.div`
  position: relative;
  margin: 6rem auto 0;
  height: 350px;
  width: 350px;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

const Board = styled.div<{ board: GameBoardEnum }>`
  height: 100%;
  background-image: ${(props) => `url("/images/bg-${props.board}.svg")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Placer = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
`;

const StyledGamePiece = styled(GamePiece)`
  padding: 5.5rem;
  font-size: 5.5rem;

  @media (max-width: 768px) {
    padding: 5rem;
    font-size: 5rem;
  }
`;
