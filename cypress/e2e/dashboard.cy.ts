describe("Dashboard ", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
  });
  it("customer data count card displayed successfully", () => {
    cy.get("[data-cy=total-counts-cards]").should("exist");
    cy.get("[data-cy=data-count-card]")
      .should("exist")
      .should("have.length", 4);
    cy.get("[data-cy=data-count-card-heading]")
      .first()
      .should("have.text", "Customers");
    cy.get("[data-cy=data-count-card-heading]")
      .eq(1)
      .should("have.text", "Gender");
    cy.get("[data-cy=data-count-card-heading]")
      .eq(2)
      .should("have.text", "Age");
    cy.get("[data-cy=data-count-card-heading]")
      .last()
      .should("have.text", "Anual Salary");
  });
  it("customer data count charts displayed successfully", () => {
    cy.get("[data-cy=customer-data-count-charts]").should("exist");
    cy.get("[data-cy=customer-data-count-charts]")
      .should("exist")
      .should("have.length", 4);
    cy.get("[data-cy=customer-data-count-charts]")
      .first()
      .find("h2")
      .should("exist")
      .should("have.text", "Anual Salary Range");
    cy.get("[data-cy=customer-data-count-charts]")
      .eq(1)
      .find("h2")
      .should("exist")
      .should("have.text", "Credit Card Debt Range");
    cy.get("[data-cy=customer-data-count-charts]")
      .eq(2)
      .find("h2")
      .should("exist")
      .should("have.text", "Net Worth Range");
    cy.get("[data-cy=customer-data-count-charts]")
      .last()
      .find("h2")
      .should("exist")
      .should("have.text", "Car Purchase Range");
  });
  it("navigate to customers page successfully", () => {
    cy.get('[data-cy="view-all-customers"]')
      .find("button")
      .should("have.class", "p-button-link")
      .and("have.text", "View All");
    cy.get('[data-cy="view-all-customers"]').click();
    cy.url().should("include", "/customers");
  });
});
