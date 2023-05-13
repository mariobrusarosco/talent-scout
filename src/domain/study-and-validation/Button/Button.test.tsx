import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
  describe("when rendering", () => {
    it("renders the element", () => {
      render(<Button />);

      expect(
        screen.getByRole("button", { name: "Hello World" })
      ).toBeInTheDocument();
    });
  });
});
