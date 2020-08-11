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
    await driver.get('https://wwcforms.justice.tas.gov.au/StatusCheck/StatusCheck.aspx');  
    await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_txtCardNumber')).sendKeys(blueCardDetails.checking_card_no);
    await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_txtSurname')).sendKeys(blueCardDetails.checking_name);
    await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_btnSearch_btnDB')).click();
  }
  finally {
    const result = await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_lblSearchResult')).getText();
    await driver.quit();
    return result
  }
}