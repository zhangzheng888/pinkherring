module.exports = {
  'Smoke Test Tableau Trial': function (browser) {

    browser
      .url('https://pinkherring-tableau.pantheonsite.io/products/desktop/download')   // visit the url
      .waitForElementVisible('body', 10000); // wait for the body to be rendered

    // part two:
    browser
      .assert.containsText('body', 'Tableau') // assert contains
      .assert.containsText('body', 'Tableau Desktop:')
      .assert.containsText('body', 'Start your free 14-day trial')
      .assert.title('Thanks for choosing a free trial of Tableau Desktop. | Tableau Software')
      .end();
    }
  };