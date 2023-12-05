import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks.ts", () => {
  test("getUserById shoud return an error if user does not exist", () => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User with id: ${id} not found`);
      expect(user).toBeUndefined();
    });
  });

  test("getUserById shoud return an user if user exists", () => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: "John Doe",
      });
    });
  });
});
