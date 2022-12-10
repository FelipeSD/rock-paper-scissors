export enum GamePieceEnum {
  Scissors = "scissors",
  Paper = "paper",
  Rock = "rock",
  Lizard = "lizard",
  Spock = "spock",
}

export enum GameBoardEnum {
  Original = "triangle",
  Bonus = "pentagon",
}

export type PieceType = {
  name: GamePieceEnum;
  top: string;
  left: string;
  size?: string;
};

export type whoWinsType = 0 | 1 | 2;

export default class Game {
  private piecesInBoard = {
    [GameBoardEnum.Original]: [
      { name: GamePieceEnum.Scissors, top: "15%", left: "85%" },
      { name: GamePieceEnum.Paper, top: "15%", left: "15%" },
      { name: GamePieceEnum.Rock, top: "75%", left: "50%" },
    ],
    [GameBoardEnum.Bonus]: [
      { name: GamePieceEnum.Scissors, top: "0", left: "50%" },
      { name: GamePieceEnum.Paper, top: "35%", left: "100%" },
      { name: GamePieceEnum.Rock, top: "95%", left: "80%" },
      { name: GamePieceEnum.Lizard, top: "95%", left: "20%" },
      { name: GamePieceEnum.Spock, top: "35%", left: "0" },
    ],
  };

  private winnerRule = {
    [GamePieceEnum.Scissors]: [GamePieceEnum.Paper, GamePieceEnum.Lizard],
    [GamePieceEnum.Paper]: [GamePieceEnum.Rock, GamePieceEnum.Spock],
    [GamePieceEnum.Rock]: [GamePieceEnum.Scissors, GamePieceEnum.Lizard],
    [GamePieceEnum.Lizard]: [GamePieceEnum.Spock, GamePieceEnum.Paper],
    [GamePieceEnum.Spock]: [GamePieceEnum.Scissors, GamePieceEnum.Rock],
  };

  mountBoard(board: GameBoardEnum): PieceType[] {
    return this.piecesInBoard[board];
  }

  whoWins(choice1: GamePieceEnum, choice2: GamePieceEnum): whoWinsType {
    if (choice1 === choice2) return 0;
    else return this.winnerRule[choice1].includes(choice2) ? 1 : 2;
  }
}
