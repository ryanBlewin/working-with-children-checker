require('geckodriver');
require('chromedriver');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

module.exports = async function fillForm(blueCardDetails) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://forms.pfes.nt.gov.au/safent/CheckValidity.aspx?IsValidityCheck=true');  
    await driver.findElement(By.id('MainContent_pnlCheckValidity_txtGivenName_I')).sendKeys(blueCardDetails.checking_first_name);
    await driver.findElement(By.id('MainContent_pnlCheckValidity_txtSurname_I')).sendKeys(blueCardDetails.checking_last_name);
    await driver.findElement(By.id('MainContent_pnlCheckValidity_txtClearanceNumber_I')).sendKeys(blueCardDetails.checking_card_no);
  }
  finally {
    return
  }
}