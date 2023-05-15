import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderComponent = (props?: any) => {
  return render(<Button onClick={jest.fn()} {...props} />);
};

describe("Button", () => {
  describe("when rendering", () => {
    it("renders the element", () => {
      renderComponent();

      expect(
        screen.getByRole("button", { name: "Hello World" })
      ).toBeInTheDocument();
    });

    it("renders the expected styles", () => {
      renderComponent();

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

    it("renders the expected text context", () => {
      renderComponent();

      const button = screen.getByRole("button", { name: "Hello World" });
      expect(button).toHaveTextContent("Hello World");
    });

    it("gets disabled", () => {
      // TODO use rerender here!
      renderComponent();
      const button = screen.getByRole("button", { name: "Hello World" });

      fireEvent.click(button);

      expect(button).toHaveTextContent("Hello World");
    });
  });
});
