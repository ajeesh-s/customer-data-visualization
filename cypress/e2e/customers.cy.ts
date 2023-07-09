describe("Customers ", () => {
  beforeEach(() => {
    cy.visit("/customers");
  });
  it("renders customer header correctly", () => {
    cy.get('[data-cy="customers-header"]')
      .find("h4")
      .should("have.text", "Customers");
    cy.get('[data-cy="customers-header"]')
      .find("button")
      .first()
      .should("exist")
      .contains("New customer");
    cy.get('[data-cy="customers-header"]')
      .find("button")
      .last()
      .should("exist")
      .should("be.disabled")
      .contains("Delete customer");
  });
  it("customer data table displayed successfully", () => {
    cy.get('[data-cy="customer-list-table"]').should("exist");
    cy.get('[data-cy="customer-list-table"]')
      .find("tbody tr")
      .should("have.length", 100);
    cy.get("[data-pc-section=headercontent]").should("have.length", 10);

    cy.get("[data-pc-section=headercontent]")
      .eq(1)
      .contains("Name")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(2)
      .contains("Email")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(3)
      .contains("Country")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(4)
      .contains("Gender")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(5)
      .contains("Age")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(6)
      .contains("Anual salary")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(7)
      .contains("Credit card debt")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(8)
      .contains("Net worth")
      .should("exist");
    cy.get("[data-pc-section=headercontent]")
      .eq(9)
      .contains("Car purchase amount")
      .should("exist");

    cy.get("[data-pc-section=headerrow]")
      .should("exist")
      .should("have.length", 2);
    cy.get("[data-pc-section=headerrow]")
      .last()
      .find("th")
      .should("have.length", 10);

    cy.get("[data-pc-section=checkboxwrapper]")
      .should("exist")
      .should("have.length", 100);

    cy.get("[data-pc-name=paginator]").should("exist");
    cy.get("[data-pc-section=current]")
      .should("exist")
      .should("contain.text", "Customers");
  });
  it("customer add working successfully", () => {
    cy.get('[data-cy="customers-header"]').find("button").first().click();
    cy.wait(300);
    cy.get("[data-cy=add-edit-customer-dialog]").should("exist");
    cy.get(".p-dialog-title")
      .should("exist")
      .should("have.text", "Create customer");
    cy.get("[data-cy=add-edit-customer-name]")
      .should("exist")
      .type("Aajeesh Sathyan");
    cy.get("[data-cy=add-edit-customer-email]")
      .should("exist")
      .type("ajeesh.sathyan@gmail.com");
    cy.get("[data-cy=add-edit-customer-country]").should("exist").click();
    cy.wait(200).get(".p-dropdown-item").first().should("exist").click();
    cy.get("[data-cy=add-edit-customer-age]")
      .should("exist")
      .clear()
      .type("40");
    cy.get("[data-cy=add-edit-customer-anual-salary]")
      .should("exist")
      .clear()
      .type("40000");
    cy.get("[data-cy=add-edit-customer-credit-card-debt]")
      .should("exist")
      .clear()
      .type("15000");
    cy.get("[data-cy=add-edit-customer-net-worth")
      .should("exist")
      .clear()
      .type("20000");
    cy.get("[data-cy=add-edit-customer-car-purchase-amount]")
      .should("exist")
      .type("10000");
    cy.get("[data-cy=add-edit-customer-save-btn]")
      .should("exist")
      .should("have.text", "Create")
      .click();
    cy.get("[data-cy=customer-toast]").should("exist");
    cy.wait(300)
      .get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(1)
      .should("have.text", "Aajeesh Sathyan");
    cy.wait(300)
      .get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(2)
      .should("have.text", "ajeesh.sathyan@gmail.com");
  });

  it("customer update working successfully", () => {
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(1)
      .click();
    cy.wait(300);
    cy.get("[data-cy=add-edit-customer-dialog]").should("exist");
    cy.get(".p-dialog-title")
      .should("exist")
      .should("have.text", "Update customer");
    cy.get("[data-cy=add-edit-customer-name]")
      .should("exist")
      .clear()
      .type("Aajeesh Sathyan");
    cy.get("[data-cy=add-edit-customer-email]")
      .should("exist")
      .should("be.disabled");
    cy.get("[data-cy=add-edit-customer-country]").should("exist").click();
    cy.wait(200).get(".p-dropdown-item").eq(3).should("exist").click();
    cy.get("[data-cy=add-edit-customer-age]")
      .should("exist")
      .clear()
      .type("41");
    cy.get("[data-cy=add-edit-customer-anual-salary]")
      .should("exist")
      .clear()
      .type("50000");
    cy.get("[data-cy=add-edit-customer-credit-card-debt]")
      .should("exist")
      .clear()
      .type("25000");
    cy.get("[data-cy=add-edit-customer-net-worth")
      .should("exist")
      .clear()
      .type("30000");
    cy.get("[data-cy=add-edit-customer-car-purchase-amount]")
      .should("exist")
      .clear()
      .type("20000");
    cy.get("[data-cy=add-edit-customer-save-btn]")
      .should("exist")
      .should("have.text", "Update")
      .click();
    cy.get("[data-cy=customer-toast]").should("exist");
    cy.wait(300)
      .get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(1)
      .should("have.text", "Aajeesh Sathyan");
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(5)
      .should("have.text", "41");
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(6)
      .should("have.text", "50000");
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(7)
      .should("have.text", "25000");
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(8)
      .should("have.text", "30000");
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(9)
      .should("have.text", "20000");
  });

  it("customer delete working successfully", () => {
    cy.get(".p-selectable-row")
      .should("exist")
      .first()
      .find("td")
      .should("exist")
      .eq(0)
      .click();
    cy.wait(300)
      .get('[data-cy="customers-header"]')
      .find("button")
      .last()
      .should("exist")
      .should("be.enabled")
      .click();
    cy.wait(300)
      .get(".p-dialog-header")
      .should("exist")
      .should("have.text", "Confirm");
    cy.get("[data-cy=confirm-dialog-message]")
      .should("exist")
      .should("have.text", "Are you sure want to delete selected customers?");
    cy.get("[data-cy=confirm-dialog-yes-btn]").should("exist").click();
    cy.get("[data-cy=customer-toast]").should("exist");
  });
});
