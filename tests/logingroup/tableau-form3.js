module.exports = {
    'Tableau Trial Fill Email 3': function (browser) {
        browser
            .url('https://pinkherring-tableau.pantheonsite.io/products/desktop/download')
            .waitForElementVisible('body', 10000);

        browser.expect.element('#edit-profile-about-you-mail').to.be.enabled;
        browser.setValue('#edit-profile-about-you-mail', '41231141').pause(5000);

        browser.expect.element('#edit-profile-about-you-mail').to.have.value.equal('41231141');
        browser.expect.element('#edit-profile-about-you-mail').to.be.an('input');
        browser.expect.element('#edit-profile-about-you-mail').to.be.not.selected;
        browser.expect.element('#edit-profile-about-you-mail').to.be.visible;
        browser.submitForm('form').pause(5000);
        browser.acceptAlert();
        browser.end();
    }
};