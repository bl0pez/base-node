import { emailTemplate } from "../../src/js-foundation/01-template";

describe("test file 01-template.ts", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });

  test("emailTemplate should contain a {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
  });
});
