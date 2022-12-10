import styled from "styled-components";
import { GamePieceEnum } from "../../domain/Game";
import GamePiece from "./GamePiece";

type ChoiceSlot = {
  text: string;
  winner?: boolean;
  piece?: GamePieceEnum | null;
};
export default function ChoiceSlot({ text, piece, winner }: ChoiceSlot) {
  return (
    <Container className="gap-4">
      <h1>{text}</h1>
      {piece ? (
        <GamePiece className={`disabled ${winner && 'highlight'}`} size="8rem" name={piece} />
      ) : (
        <EmptySlot />
      )}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  line-height: 1.5;
`;

const EmptySlot = styled.div`
  margin: auto;
  border-radius: 50%;
  padding: 6rem;
  background: var(--dark-background);
`;
