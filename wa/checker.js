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
    await driver.get('https://workingwithchildren.wa.gov.au/card-validation');  
    await driver.findElement(By.id('CardNumber')).sendKeys(blueCardDetails.checking_card_no);
    await driver.findElement(By.id('Surname')).sendKeys(blueCardDetails.checking_name);
    await driver.findElement(By.id('btnButtonSubmit')).click();
  }
  finally {
    const result = await driver.findElement(By.xpath('/html/body/form/div[3]/div/div[2]/div/div/div[1]/div/div[2]/div/div[7]')).getText();
    await driver.quit();
    return result
  }
}