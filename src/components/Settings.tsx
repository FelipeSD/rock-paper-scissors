import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";
import { GameBoardEnum } from "../../domain/Game";
import { useGame } from "../hooks/useGame";

export default function Settings() {
  const { changeGameBoard, gameBoard } = useGame();

  return (
    <Popover.Root>
      <Cog />
      <Popover.Portal>
        <Content>
          <Container>
            <Title>Settings</Title>
            <Fieldset>
              <label>Mode:</label>
              <ComboBox
                value={gameBoard}
                onChange={(e) => changeGameBoard(e.target.value as GameBoardEnum)}
              >
                <option value={GameBoardEnum.Original}>Original</option>
                <option value={GameBoardEnum.Bonus}>Bonus</option>
              </ComboBox>
            </Fieldset>
          </Container>
        </Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const Cog = styled(Popover.Trigger)`
  background: unset;
  border: unset;
  background-image: url("/images/icon-cog.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
  align-self: center;
`;

const Content = styled(Popover.Content)`
  border-radius: 4px;
  padding: 1rem;
  width: 260px;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  color: var(--dark-text);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Fieldset = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ComboBox = styled.select`
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: var(--dark-text);
  background-color: var(--white);
  box-shadow: 0 0 0 1px var(--dark-text);
  outline: none;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
