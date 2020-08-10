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
    await driver.findElement(By.id('FullName')).sendKeys(blueCardDetails.checking_name);
    await driver.findElement(By.id('CardNumber')).sendKeys(blueCardDetails.checking_card_no);
    await driver.findElement(By.id('IssueNumber')).sendKeys(blueCardDetails.checking_issue_no);
    await driver.findElement(By.id('ExpiryDate_selDay')).sendKeys(blueCardDetails.checking_exp_day);
    await driver.findElement(By.id('ExpiryDate_selMonth')).sendKeys(blueCardDetails.checking_exp_month);
    await driver.findElement(By.id('ExpiryDate_selYear')).sendKeys(blueCardDetails.checking_exp_year);
    await driver.findElement(By.id('ValidateCardBtn')).click();
  }
  finally {
    const result = await driver.findElement(By.xpath('/html/body/div/form/div[3]/div/span/p[1]/strong')).getText();
    await driver.quit();
    return result
  }
}

