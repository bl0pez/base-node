import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring", () => {
  test("charactes shoud containt Obi-Wan, Vader", () => {
    expect(characters).toContain("Obi-Wan");
    expect(characters).toContain("Vader");
  });

  test("length of characters should be 4", () => {
    expect(characters.length).toBe(4);
  });
});
