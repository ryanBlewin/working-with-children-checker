require('geckodriver');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

module.exports = async function fillForm(blueCardDetails) {
  const driver = await new Builder().forBrowser('firefox').build();
  await driver.manage().window().maximize();
  await driver.get('https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/blue-card/organisations/valid');    
  await driver.findElement(By.id('card-valid-blue')).click();
  await driver.switchTo().frame(0);
  await driver.findElement(By.id('FullName')).sendKeys(blueCardDetails.checking_name);
  await driver.findElement(By.id('CardNumber')).sendKeys(blueCardDetails.checking_card_no);
  await driver.findElement(By.id('IssueNumber')).sendKeys(blueCardDetails.checking_issue_no);
  await driver.findElement(By.id('ExpiryDate_selDay')).sendKeys(blueCardDetails.checking_exp_day);
  await driver.findElement(By.id('ExpiryDate_selMonth')).sendKeys(blueCardDetails.checking_exp_month);
  await driver.findElement(By.id('ExpiryDate_selYear')).sendKeys(blueCardDetails.checking_exp_year);
  await driver.findElement(By.id('ValidateCardBtn')).submit();
}

