import { getAge } from "../../src/plugins/get-age.plugin";

describe("get-age.plugin", () => {
  test("getAge() should return the age of a person", () => {
    const birthDate = "1996-04-08";
    const age = getAge(birthDate);
    expect(typeof age).toBe("number");
  });

  test("getAge should return current age", () => {
    const birthDate = "1996-04-08";
    const age = getAge(birthDate);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthDate).getFullYear();
    expect(age).toBe(calculatedAge);
  });

  test("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(2021);
    const birthDate = "2021-04-08";
    const age = getAge(birthDate);
    expect(age).toBe(0);
  });
});
