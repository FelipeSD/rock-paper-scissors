import { render, screen, within } from "@testing-library/react";
import Home from "../../pages";

describe("Index page", () => {
  it("should render correctly", () => {
    render(<Home />);
    expect(screen.getByTestId("game-score")).toBeInTheDocument();

    screen.findAllByTestId("game-piece").then((pieces) => {
      expect(pieces.length).toBe(3);
    });
  });
});
