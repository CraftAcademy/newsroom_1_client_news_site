const stubLocation = require('../support/stubLocation')

describe("Visitor can see info about the edition based on his/hers location", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.visit("http://localhost:3001", stubLocation({latitude: 57.82, longitude: 12.27}));
  });
  it("see articles successfully", () => {
    cy.get("#article-list").should("contain", "Article Title");
    cy.get("#article-list").should("contain", "Thomas Got a New Car");
  });
});
