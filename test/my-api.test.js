import { html, fixture, expect } from '@open-wc/testing';
import "../my-api.js";

describe("MyApi test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <my-api
        title="title"
      ></my-api>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
