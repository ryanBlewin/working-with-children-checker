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
    await driver.get('https://www.bluecard.qld.gov.au/onlinevalidation/validationNoNav.aspx');  
  }
  finally {
    driver.findElement(By.id('FullName')).sendKeys(blueCardDetails.checking_name);
    driver.findElement(By.id('CardNumber')).sendKeys(blueCardDetails.checking_card_no);
    driver.findElement(By.id('IssueNumber')).sendKeys(blueCardDetails.checking_issue_no);
    driver.findElement(By.id('ExpiryDate_selDay')).sendKeys(blueCardDetails.checking_exp_day);
    driver.findElement(By.id('ExpiryDate_selMonth')).sendKeys(blueCardDetails.checking_exp_month);
    driver.findElement(By.id('ExpiryDate_selYear')).sendKeys(blueCardDetails.checking_exp_year);
    driver.findElement(By.id('ValidateCardBtn')).click();
  }
}

