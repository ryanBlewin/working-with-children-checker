require('geckodriver');
require('chromedriver');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

module.exports = async function fillForm(blueCardDetails, user) {
  var driver = await new Builder()
    // .forBrowser('firefox')
    .forBrowser('chrome')
    .build();
	await driver.manage().window().maximize();
	await driver.get('https://wwccheck.ccyp.nsw.gov.au/Verifiers/Search');  

	// Information for user conducting search
	await driver.findElement(By.id('Name')).sendKeys(user.name);
	await driver.findElement(By.id('Reason')).click();
	await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/form/fieldset[1]/div[4]/select/option[2]')).click();
	await driver.findElement(By.id('EmailAddress_EmailAddress')).sendKeys(user.email);
	await driver.findElement(By.id('EmailAddress_EmailAddressConfirm')).sendKeys(user.email);
	await driver.findElement(By.id('PhoneNo')).sendKeys(user.phone);

	// Information of details being searched
	await (await driver.findElement(By.id('PrimaryName_NoFirstGivenName'))).click();
	await driver.findElement(By.id('PrimaryName_NoOtherGivenNames')).click();
	await driver.findElement(By.id('PrimaryName_FamilyName')).sendKeys(blueCardDetails.checking_last_name);
	await driver.findElement(By.id('BirthDate')).sendKeys(blueCardDetails.checking_dob);
	await driver.findElement(By.id('AuthorisationNumber')).sendKeys(blueCardDetails.checking_registration_no);
}