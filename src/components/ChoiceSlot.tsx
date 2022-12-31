import { GamePieceEnum } from "../../domain/Game";
import styled from "styled-components";
import GamePiece from "./GamePiece";

type ChoiceSlot = {
  text: string;
  winner?: boolean;
  piece?: GamePieceEnum | null;
};
export default function ChoiceSlot({
  text,
  piece,
  winner,
  ...rest
}: ChoiceSlot) {
  return (
    <Container className="gap-4" {...rest}>
      <Title>{text}</Title>
      {piece ? (
        <StyledGamePiece
          className={`disabled ${winner && "highlight"}`}
          name={piece}
        />
      ) : (
        <EmptySlot data-testid="empty-slot" />
      )}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: var(--white);

  @media (max-width: 768px) {
    order: 1;
  }
`;

const EmptySlot = styled.div`
  margin: auto;
  border-radius: 50%;
  padding: 6rem;
  background: var(--dark-background);

  @media (max-width: 768px) {
    padding: 4rem;
  }
`;

const StyledGamePiece = styled(GamePiece)`
  padding: 8rem;
  font-size: 8rem;

  @media (max-width: 768px) {
    padding: 5rem;
    font-size: 5rem;
  }
`;
