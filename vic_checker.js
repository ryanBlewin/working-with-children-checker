require('geckodriver');
require('chromedriver');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

module.exports = async function fillForm(person) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://online.justice.vic.gov.au/wwccu/checkstatus.doj');  
    await driver.findElement(By.id('cardnumber')).sendKeys(person.registration_number);
    await driver.findElement(By.id('lastname')).sendKeys(person.holder_name);
    await driver.findElement(By.id('pageAction_submit')).click();
  }
  finally {
    const result = await driver.findElement(By.id('message')).getText();
    await driver.quit();
    return result
  }
}
