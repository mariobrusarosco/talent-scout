import { addOne, myMath } from "./add-one";

console.log({ myMath });
describe("When calling addOne method to zero", () => {
  it("returns 1", () => {
    const number = 0;

    const result = addOne(number);

    expect(result).toBe(1);
  });
});
