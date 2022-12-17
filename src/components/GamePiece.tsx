import styled from "styled-components";

type GamePieceProps = {
  name: string;
} & React.HTMLAttributes<HTMLDivElement>;
export default function GamePiece({ name, ...rest }: GamePieceProps) {
  return <GameBoardItem name={name} {...rest} />;
}

const GameBoardItem = styled.div<GamePieceProps>`
  border-color: unset;
  border-radius: 50%;
  background: ${(props) => `var(--${props.name}-gradient)`};
  box-shadow: 0px 10px 1px 0px ${(props) => `var(--${props.name}-dark)`};
  transition: all 0.2s ease-in-out;

  &.highlight::before {
    content: "";
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 
      0px 0px 0px 2rem hsl(220, 33%, 30%),
      0px 0px 0px 4.5rem hsl(220, 38%, 27%), 
      0px 0px 0px 7rem hsl(220, 40%, 23%);
    padding: 1em;
    z-index: -1;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    padding: 0.8em;
    background-size: 50%;
    background-image: url("/images/${(props) => `icon-${props.name}`}.svg");
    background-color: var(--light-background);
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0px 7px 1px 0px var(--light-shadow);
    transition: all 0.2s ease-in-out;
  }

  &:not(.disabled):active {
    box-shadow: 0px 7px 1px 0px ${(props) => `var(--${props.name}-dark)`};
    transform: translateY(7px);
    &::before {
      box-shadow: unset;
    }
  }
`;
