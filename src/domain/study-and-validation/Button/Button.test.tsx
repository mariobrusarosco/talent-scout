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

    it("renders the expected styles", () => {
      render(<Button />);

      expect(screen.getByRole("button", { name: "Hello World" })).toHaveStyle({
        "background-color": "red",
      });
      // Notes
      /** 
      * CamelCase prop will give false positive
      * 
         .toHaveStyle({
            "backgroundColor": "red",
        });

             .toHaveStyle({
            "backgroundColor": "asdsadsa",
        });

        will pass!
        This is a known issue with jest-dom, reported May 19, 2022 -- even though the fix for a similar issue was merged in October 2019.
      * That's why the kebab case!
      * 
      * */
    });
  });
});
