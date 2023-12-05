import { getUUID } from "../../src/plugins/get-id.plugins";

describe("get-id.plugins", () => {
  test("getUUID() should return a UUID", () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
