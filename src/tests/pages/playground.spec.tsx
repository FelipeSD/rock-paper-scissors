import { describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Playground from "../../pages/playground";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },

}));

describe("Playground", () => {
  it("should render correctly", async () => {
    render(<Playground />);
    
    expect(screen.getByTestId("game-score")).toBeInTheDocument();
    expect(screen.getByTestId("user-choice")).toBeInTheDocument();
    expect(screen.getByTestId("opponent-choice")).toBeInTheDocument();
  });
});
