import { Button } from "./Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  describe("when rendering", () => {
    it("renders the text", () => {
      render(<Button />);
      expect(false).toBe(true);
    });
  });
});
