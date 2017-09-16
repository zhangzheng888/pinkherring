module.exports = {
    'Tableau Logo Present': function (browser) {    
      browser
        .url('https://pinkherring-tableau.pantheonsite.io/products/desktop/download')
        //.pause(10000)
        .waitForElementVisible('body', 10000)
        .assert.elementPresent('#logo')
        .assert.elementPresent('#main-content');
    },

    'Tableau Email Text Box Present': function (browser) {
    console.log('previous step is done executing');

      browser
        .assert.elementPresent('form');
    },

    'Tableau Submit Button Present': function (browser) {
    console.log('previous step is done executing');

      browser
        .assert.elementPresent('button')
        .end();
    }
};