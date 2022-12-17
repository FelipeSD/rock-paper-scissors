import { createContext, useContext, useEffect, useState } from "react";
import Game, {
  GameBoardEnum,
  GamePieceEnum,
  PieceType,
  whoWinsType,
} from "../../domain/Game";

type GameContextType = {
  pieces: PieceType[];
  gameName: string;
  userChoice: GamePieceEnum | null;
  gameBoard: GameBoardEnum;
  gameLogo: string;
  score: number;
  play: (choice1: GamePieceEnum, choice2: GamePieceEnum) => whoWinsType;
  resetGame: () => void;
  setUserChoice: (choice: GamePieceEnum | null) => void;
  computerChoice: () => Promise<GamePieceEnum>;
  changeGameBoard: (newBoard: GameBoardEnum) => void;
};

const GameContext = createContext({} as GameContextType);

type GameProviderProps = {
  children: React.ReactNode;
};

export default function GameProvider({ children }: GameProviderProps) {
  const game = new Game();

  const [gameBoard, setGameBoard] = useState<GameBoardEnum>(
    GameBoardEnum.Original
  );

  const [userChoice, setUserChoice] = useState<GamePieceEnum | null>(null);
  const [pieces, setPieces] = useState<PieceType[]>(game.mountBoard(gameBoard));
  const [score, setScore] = useState(0);

  const [gameName, setGameName] = useState("Rock, Paper, Scissors");
  const [gameLogo, setGameLogo] = useState("logo");

  useEffect(() => {
    let title, logo;

    if (gameBoard === GameBoardEnum.Original) {
      title = "Rock, Paper, Scissors";
      logo = "logo";
    } else {
      title = "Rock, Paper, Scissors, Lizard, Spock";
      logo = "logo-bonus";
    }

    setGameLogo(logo);
    setGameName(title);
  }, [gameBoard]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    const score = localStorage.getItem("score");
    if (score) setScore(JSON.parse(score));
  }, []);

  const changeGameBoard = (newBoard: GameBoardEnum) => {
    setGameBoard(newBoard);
    setPieces(game.mountBoard(newBoard));
  };

  const resetGame = () => {
    setScore(0);
  };

  const updateScore = (winner: number) => {
    if (winner === 1) setScore(score + 1);
    else if (winner === 2) setScore(score - 1);
  };

  const computerChoice = async (): Promise<GamePieceEnum> => {
    const choices = pieces.map((piece) => piece.name);
    const randomNumber = Math.floor(Math.random() * choices.length);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return choices[randomNumber];
  };

  const play = (choice1: GamePieceEnum, choice2: GamePieceEnum) => {
    const winner = game.whoWins(choice1, choice2);
    console.log(choice1, choice2, winner);
    updateScore(winner);
    return winner;
  };

  return (
    <GameContext.Provider
      value={{
        pieces,
        gameName,
        userChoice,
        gameBoard,
        gameLogo,
        score,
        play,
        resetGame,
        setUserChoice,
        computerChoice,
        changeGameBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
