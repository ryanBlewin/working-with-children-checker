// import * as checker from '../libs/checker';
const checker = require('../libs/checker');

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    fullName: 'Full name of searchee',
//    registrationNumber: 'Registration number of working with children check'
//    issueNumber: 'Issue number of working with children check'
//    expiryDay: 'Expiry day of working with children check'
//    expiryMonth: 'Expiry Month of working with children check'
//    expiryYear: 'Expiry Year of working with children check'
//  }
async function qld(detailsToBeChecked) {
  const result = await checker.validateForQLD(detailsToBeChecked);
  return result
}

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Surname of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
async function vic(detailsToBeChecked) {
  const result = await checker.validateForVIC(detailsToBeChecked);
  return result
}

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Surname of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
async function wa(detailsToBeChecked) {
  const result = await checker.validateForWA(detailsToBeChecked);
  return result
}

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Surname of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
async function tas(detailsToBeChecked) {
  const result = await checker.validateForTAS(detailsToBeChecked);
  return result
}

// NSW requires input from the user conducting the search and that of the user. Will not submit due to capthca but will autofll the form.
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Last name of searchee',
//    dob: 'Date of birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
// 
//  user = {
//    name: 'Users name',
//    email: 'Users email',
//    phone: 'Users contact number'
//  }  
function nsw(detailsToBeChecked, user) {
  checker.fillForNSW(detailsToBeChecked, user);
}

// SA requires input from the user conducting the search and that of the user. Will not submit due to capthca but will autofll the form.
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Last name of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
// 
//  user = {
//    name: 'Users name',
//    email: 'Users email',
//    reason: 'reason for search'
//  }  
function sa(detailsToBeChecked) {
  checker.fillForSA(detailsToBeChecked);
}

// Will not submit due to capthca but will autofll the form.
// The expected inputs are:
// 
//  detailsToCheck = {
//    firstName: 'First name of searchee',
//    lastName: 'Surname birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
function nt(detailsToBeChecked) {
  checker.fillForNT(detailsToBeChecked);
}

module.exports = {
  qld: qld,
  vic: vic,
  wa: wa,
  tas: tas,
  // nsw: nsw, 
  // sa: sa,
  // nt: nt
}