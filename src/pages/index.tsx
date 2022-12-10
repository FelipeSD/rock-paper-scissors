import Link from "next/link";
import styled from "styled-components";
import { GameBoardEnum, GamePieceEnum } from "../../domain/Game";
import GamePiece from "../components/GamePiece";
import { useGame } from "../hooks/useGame";
import GameLayout from "../layouts/GameLayout";

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
              href="/play"
              scroll={false}
              onClick={() => onSelect(piece.name)}
            >
              <GamePiece name={piece.name} size="5.5rem" />
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
