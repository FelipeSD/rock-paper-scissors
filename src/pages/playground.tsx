import { useEffect, useState } from "react";
import { GamePieceEnum } from "../../domain/Game";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Button from "../components/Button";
import ChoiceSlot from "../components/ChoiceSlot";
import GameLayout from "../layouts/GameLayout";
import { useGame } from "../hooks/useGame";

export default function Playground() {
  const { setUserChoice, userChoice, computerChoice, play } = useGame();
  const [opponentChoice, setOpponentChoice] = useState<GamePieceEnum | null>();
  const [result, setResult] = useState<number | null>(null);
  const router = useRouter();

  const waitForOpponent = async () => {
    if (!userChoice) return router.push("/");
    const comp = await computerChoice();
    const res = play(userChoice, comp);
    setOpponentChoice(comp);
    setResult(res);
  };

  const getResultText = () => {
    if (result === 0) return "DRAW";
    if (result === 1) return "YOU WIN";
    if (result === 2) return "YOU LOSE";
  };

  useEffect(() => {
    waitForOpponent();
  }, [userChoice]);

  return (
    <GameLayout>
      <Container className="gap-5 mt-5">
        <ChoiceSlot
          text="You picked"
          piece={userChoice}
          winner={result === 1}
        />
        {result != null && (
          <Result>
            <h1>{getResultText()}</h1>
            <Link href="/" scroll={false}>
              <StyledButton
                className="solid block"
                onClick={() => setUserChoice(null)}
                lose={result === 2}
              >
                Play again
              </StyledButton>
            </Link>
          </Result>
        )}
        <ChoiceSlot
          text="The house picked"
          piece={opponentChoice}
          winner={result === 2}
        />
      </Container>
    </GameLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  font-size: 1.5rem;
  margin: auto 0;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    order: 3;
  }
`;

const StyledButton = styled(Button)<{ lose?: boolean }>`
  &:hover {
    color: ${(props) => (props.lose ? "#be1616" : "#000")};
  }
`;
