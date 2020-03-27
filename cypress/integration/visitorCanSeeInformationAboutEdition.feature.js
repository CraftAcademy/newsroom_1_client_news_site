const stubLocation = require('../support/stubLocation')

describe("Visitor can see info about the edition based on his/hers location", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_list_response.json"
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/sessions",
      response: { session: { location: { latitude: 57.82, longitude: 12.27 }, edition: "Gothenburg" } }
    })
    cy.visit("http://localhost:3001", stubLocation({ latitude: 57.82, longitude: 12.27 }));
  });
  it("see what edition we are displaying", () => {
    cy.get("#header").should("contain", "Gothenburg Edition");
  });
});
