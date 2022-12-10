import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GamePieceEnum } from "../../domain/Game";
import Button from "../components/Button";
import ChoiceSlot from "../components/ChoiceSlot";
import { useGame } from "../hooks/useGame";
import GameLayout from "../layouts/GameLayout";

export default function FightRing() {
  const { setUserChoice, userChoice, computerChoice, play } = useGame();
  const [opponentChoice, setOpponentChoice] = useState<GamePieceEnum | null>();
  const [result, setResult] = useState<number | null>(null);

  const waitForOpponent = async () => {
    if (!userChoice) return;
    const comp = await computerChoice();
    setOpponentChoice(comp);
    const res = play(userChoice, comp);
    setResult(res);
  };

  const getResultText = () => {
    if (result === 0) return "DRAW";
    if (result === 1) return "YOU WIN";
    if (result === 2) return "YOU LOSE";
  };

  useEffect(() => {
    waitForOpponent();
  }, []);

  return (
    <GameLayout>
      <div className="d-flex justify-center gap-5 mt-5">
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
                className={`solid block loose`}
                onClick={() => setUserChoice(null)}
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
      </div>
    </GameLayout>
  );
}

const Result = styled.div`
  font-size: 1.5rem;
  margin: auto 0;
  text-transform: uppercase;
  text-align: center;
`;

const StyledButton = styled(Button)`
  transition: all 0.5s ease-in-out;

  &.loose:hover {
    color: #be1616;
  }
`;
