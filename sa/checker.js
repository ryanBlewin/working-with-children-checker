require('geckodriver');
require('chromedriver');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

module.exports = async function fillForm(blueCardDetails, user) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://www.dcsiscreening.sa.gov.au/SCApplicantRegistrationStatus');  

    // Information of details being searched
    await driver.findElement(By.id('lastName')).sendKeys(blueCardDetails.checking_last_name);
    await driver.findElement(By.id('referenceNumber')).sendKeys(blueCardDetails.checking_card_no);

    // Information for user conducting search
    await driver.findElement(By.id('searchName')).sendKeys(user.name);
    await driver.findElement(By.id('searchEmail')).sendKeys(user.email);
    await driver.findElement(By.id('confirmEmail')).sendKeys(user.email);
    await driver.findElement(By.id('searchReason')).sendKeys(user.reason);
  }
  finally {
    return
  }
}