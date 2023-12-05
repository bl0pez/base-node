import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 20;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(makePerson).toBeInstanceOf(Function);
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const john = makePerson({
      name: "John",
      birthDate: new Date("1990-01-01"),
    });

    expect(john).toEqual({
      id: "1234",
      name: "John",
      birthDate: new Date("1990-01-01"),
      age: 20,
    });
  });
});
