
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://findeasy.tech');
    //click on neck tie button and then click on login button
    cy.get('#__next > main > div:nth-child(1) > div > div:nth-child(3) > div > label > svg > path')
      .click();
    cy.wait(5000);
    //thenn wrtie your email and  using placeholder
    //this is how we do testing

    //cy.get('[role="textbox"][placeholder="email"]').type('test@example.com');
    //cy.findByPlaceholderText('email').type('test@example.com');



    //thenn wrtie your password above using placeholder
    //cy.get('input[placeholder="password"]').type('mypassword');
    //cy.findByLabelText(/password/i).type('s3cret');
    //cy.wait(5000);
    //cy.get('[placeholder="password"]').should('be.visible').type('s3cret');
    cy.get('#__next').then(($container) => {
      const element = $container[0].querySelector('#__next > div > div > div:nth-child(2) > form > div:nth-child(2) > label:nth-child(1)');
      cy.wrap(element);
    });
    // this is for the next element 

    //this is for the signup button





    cy.visit('https://findeasy.tech/login');
    cy.contains(/signup/i).click();


    //they are directed to login page now
    cy.visit('https://findeasy.tech/signUP');

    //they are directed to sign up page now
    //cy.wait(4000);

    cy.visit('https://findeasy.tech/login');


    cy.contains(/email/i).click();

    //cy.wait(10000);



    cy.contains(/forgot password\?/i).click();
    cy.visit('https://findeasy.tech/forgot');
    //cy.get('#__next > div > div > div:nth-child(2) > form > div:nth-child(1) > label:nth-child(1)').click();
    cy.get('#__next > div > div > div:nth-child(2) > form > div:nth-child(1) > label:nth-child(1)').click();
    cy.contains('button', /reset password/i).click();
    cy.contains('a', /login now/i).click();
    cy.wait(5000);

    //cy.wait(4000);


    // Find the Login button and click it
    cy.contains('button', 'Login').click();

    // Check that the button is disabled















    //then click on login in loginn button
    cy.visit('https://findeasy.tech');








  });
});






//then click on login in loginn button
//then click on signup if u want
//you may either choose signup button
//then click on logout buttton if you want
//further more test to be done in upcoming profile page

//now to visit using auth page



