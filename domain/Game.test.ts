import { describe, expect, it, test } from "@jest/globals";
import Game, { GameBoardEnum, GamePieceEnum } from "./Game";

describe("Game", () => {
  let game = new Game();
  it("should be able to mount original board", () => {
    const pieces = game.mountBoard(GameBoardEnum.Original);
    expect(pieces.length).toBe(3);
  });
  it("should be able to mount bonus board", () => {
    const pieces = game.mountBoard(GameBoardEnum.Bonus);
    expect(pieces.length).toBe(5);
  });
  test("Rock should be able to beat scissors", () => {
    expect(game.whoWins(GamePieceEnum.Rock, GamePieceEnum.Scissors)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Scissors, GamePieceEnum.Rock)).toBe(2);
  });
  test("Rock should be able to beat lizard", () => {
    expect(game.whoWins(GamePieceEnum.Rock, GamePieceEnum.Lizard)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Lizard, GamePieceEnum.Rock)).toBe(2);
  });
  test("Paper should be able to beat rock", () => {
    expect(game.whoWins(GamePieceEnum.Paper, GamePieceEnum.Rock)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Rock, GamePieceEnum.Paper)).toBe(2);
  });
  test("Paper should be able to beat spock", () => {
    expect(game.whoWins(GamePieceEnum.Paper, GamePieceEnum.Spock)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Spock, GamePieceEnum.Paper)).toBe(2);
  });
  test("Scissors should be able to beat paper", () => {
    expect(game.whoWins(GamePieceEnum.Scissors, GamePieceEnum.Paper)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Paper, GamePieceEnum.Scissors)).toBe(2);
  });
  test("Scissors should be able to beat lizard", () => {
    expect(game.whoWins(GamePieceEnum.Scissors, GamePieceEnum.Lizard)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Lizard, GamePieceEnum.Scissors)).toBe(2);
  });
  test("Lizard should be able to beat paper", () => {
    expect(game.whoWins(GamePieceEnum.Lizard, GamePieceEnum.Paper)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Paper, GamePieceEnum.Lizard)).toBe(2);
  });
  test("Lizard should be able to beat spock", () => {
    expect(game.whoWins(GamePieceEnum.Lizard, GamePieceEnum.Spock)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Spock, GamePieceEnum.Lizard)).toBe(2);
  });
  test("Spock should be able to beat rock", () => {
    expect(game.whoWins(GamePieceEnum.Spock, GamePieceEnum.Rock)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Rock, GamePieceEnum.Spock)).toBe(2);
  });
  test("Spock should be able to beat scissors", () => {
    expect(game.whoWins(GamePieceEnum.Spock, GamePieceEnum.Scissors)).toBe(1);
    expect(game.whoWins(GamePieceEnum.Scissors, GamePieceEnum.Spock)).toBe(2);
  });
});
