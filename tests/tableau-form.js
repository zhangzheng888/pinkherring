module.exports = {
    'Tableau Trial Fill Email': function (browser) {
        browser
            .url('https://pinkherring-tableau.pantheonsite.io/products/desktop/download')
            .waitForElementVisible('body', 10000);

        browser.expect.element('#edit-profile-about-you-mail').to.be.enabled;
        browser.setValue('#edit-profile-about-you-mail', 'kza@gmail.com').pause(5000);

        browser.expect.element('#edit-profile-about-you-mail').to.have.value.equal('kza@gmail.com');
        browser.expect.element('#edit-profile-about-you-mail').to.be.an('input');
        browser.expect.element('#edit-profile-about-you-mail').to.be.not.selected;
        browser.expect.element('#edit-profile-about-you-mail').to.be.visible;
        browser.submitForm('form').pause(50000);

        browser.expect.element('h2').to.have.value.equal('Thanks for choosing a trial of Tableau Desktop');
        //browser.acceptAlert();
        browser.end();
    }

    // 'Tableau Trial Download Submit': function (browser) {
    //   console.log('previous step is done executing');
    //   //var data = client.globals;

    //   browser
    //     //.click('button')
    //     .submitForm('form')
    //     .pause(10000)
    //     .end();
    // }
};