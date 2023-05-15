import { fireEvent, screen, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import "@testing-library/jest-dom/extend-expect";

const renderElement = (props?: any) => {
  return render(<Checkbox {...props} />);
};

describe("CheckBox", () => {
  describe("when interacting", () => {
    it("gets checked and unchecked", () => {
      renderElement();
      const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });

      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();

      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });
});
