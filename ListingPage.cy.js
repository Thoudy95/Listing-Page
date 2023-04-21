describe('ListingPage', () => {

    beforeEach(() => {
        cy.visit('https://www.x-kom.pl')
        cy.url().should('eq','https://www.x-kom.pl/')
        cy.clearCookies()
  })

    it('wyświetlenie, ogólne działania', () => {
     cy.contains('W porządku').click()
     cy.contains('Twoje konto').should('be.visible')
     cy.contains('Menu').should('be.visible')
     cy.contains('W porządku').should('not.exist')

     cy.contains('Menu').click()
     cy.contains('Laptopy i komputery').click({force : true})
     cy.contains('Tablety').click({force: true})
     cy.contains('Pokaż Tablety').click()

     cy.url().should('include','tablety')

     cy.wait(5000);
     cy.contains('Szukaj filtrów').type('apple')
     cy.contains('Szukaj filtrów').click()



  })
})
