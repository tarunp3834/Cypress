describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    // cy.get('#APjFqb',{timeout:5000}).type('Automation step by step{Enter}')
    cy.contains('get').click()
    cy.get('#query-btn')
     .should('contain','Button')
     .should('have.class','query-btn')
    // cy.wait(5000)
    // and is implicit can be used for assertions.

    expect(true).to.be.true
    // explicit assertion
    assert.equal(5, 5, 'NOT EQUAL')
    // strictEqual
  })
})