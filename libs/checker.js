require('chromedriver');
const {Builder, By, Key, until, WebDriver} = require('selenium-webdriver');

export async function validateForQLD(detailsToCheck) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://www.bluecard.qld.gov.au/onlinevalidation/validationNoNav.aspx');  
    await driver.findElement(By.id('FullName')).sendKeys(detailsToCheck.checking_name);
    await driver.findElement(By.id('CardNumber')).sendKeys(detailsToCheck.checking_card_no);
    await driver.findElement(By.id('IssueNumber')).sendKeys(detailsToCheck.checking_issue_no);
    await driver.findElement(By.id('ExpiryDate_selDay')).sendKeys(detailsToCheck.checking_exp_day);
    await driver.findElement(By.id('ExpiryDate_selMonth')).sendKeys(detailsToCheck.checking_exp_month);
    await driver.findElement(By.id('ExpiryDate_selYear')).sendKeys(detailsToCheck.checking_exp_year);
    await driver.findElement(By.id('ValidateCardBtn')).click();
  }
  finally {
    const result = await driver.findElement(By.xpath('/html/body/div/form/div[3]/div/span/p[1]/strong')).getText();
    await driver.quit();
    return result
  }
}

export async function validateForTAS(detailsToCheck) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://wwcforms.justice.tas.gov.au/StatusCheck/StatusCheck.aspx');  
    await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_txtCardNumber')).sendKeys(detailsToCheck.checking_card_no);
    await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_txtSurname')).sendKeys(detailsToCheck.checking_name);
    await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_btnSearch_btnDB')).click();
  }
  finally {
    const result = await driver.findElement(By.id('ctl00_ctl00_ctl00_ctlMainContent_ctlMainContent_MainContent_lblSearchResult')).getText();
    await driver.quit();
    return result
  }
}

export async function validateForVIC(detailsToCheck) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://online.justice.vic.gov.au/wwccu/checkstatus.doj');  
    await driver.findElement(By.id('cardnumber')).sendKeys(detailsToCheck.checking_card_no);
    await driver.findElement(By.id('lastname')).sendKeys(detailsToCheck.checking_name);
    await driver.findElement(By.id('pageAction_submit')).click();
  }
  finally {
    const result = await driver.findElement(By.id('message')).getText();
    await driver.quit();
    return result
  }
}

export async function validateForWA(detailsToCheck) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://workingwithchildren.wa.gov.au/card-validation');  
    await driver.findElement(By.id('CardNumber')).sendKeys(detailsToCheck.checking_card_no);
    await driver.findElement(By.id('Surname')).sendKeys(detailsToCheck.checking_name);
    await driver.findElement(By.id('btnButtonSubmit')).click();
  }
  finally {
    const result = await driver.findElement(By.xpath('/html/body/form/div[3]/div/div[2]/div/div/div[1]/div/div[2]/div/div[7]')).getText();
    await driver.quit();
    return result
  }
}

export async function fillForNSW(detailsToCheck, user) {
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
	await driver.findElement(By.id('PrimaryName_FamilyName')).sendKeys(detailsToCheck.checking_last_name);
	await driver.findElement(By.id('BirthDate')).sendKeys(detailsToCheck.checking_dob);
	await driver.findElement(By.id('AuthorisationNumber')).sendKeys(detailsToCheck.checking_registration_no);
}

export async function fillForNT(detailsToCheck) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://forms.pfes.nt.gov.au/safent/CheckValidity.aspx?IsValidityCheck=true');  
    await driver.findElement(By.id('MainContent_pnlCheckValidity_txtGivenName_I')).sendKeys(detailsToCheck.checking_first_name);
    await driver.findElement(By.id('MainContent_pnlCheckValidity_txtSurname_I')).sendKeys(detailsToCheck.checking_last_name);
    await driver.findElement(By.id('MainContent_pnlCheckValidity_txtClearanceNumber_I')).sendKeys(detailsToCheck.checking_card_no);
  }
  finally {
    return
  }
}

export async function fillForSA(detailsToCheck, user) {
  var driver = await new Builder()
    .forBrowser('firefox')
    // .forBrowser('chrome')
    .build();
  try {
    await driver.manage().window().maximize();
    await driver.get('https://www.dcsiscreening.sa.gov.au/SCApplicantRegistrationStatus');  

    // Information of details being searched
    await driver.findElement(By.id('lastName')).sendKeys(detailsToCheck.checking_last_name);
    await driver.findElement(By.id('referenceNumber')).sendKeys(detailsToCheck.checking_card_no);

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