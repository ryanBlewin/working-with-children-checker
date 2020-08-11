import * as checker from '../libs/checker';

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    fullName: 'Date of birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//    issueNumber: 'Issue number of working with children check'
//    expiryDay: 'Expiry day of working with children check'
//    expiryMonth: 'Expiry Month of working with children check'
//    expiryYear: 'Expiry Year of working with children check'
//  }
export async function qld(detailsToBeChecked) {
  const result = await checker.validateForQLD(detailsToBeChecked);
  return result
}

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Date of birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
export async function vic(detailsToBeChecked) {
  const result = await checker.validateForVIC(detailsToBeChecked);
  return result
}

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Date of birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
export async function wa(detailsToBeChecked) {
  const result = await checker.validateForWA(detailsToBeChecked);
  return result
}

// Returns the string result of the validation
// The expected inputs are:
// 
//  detailsToCheck = {
//    lastName: 'Date of birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
export async function tas(detailsToBeChecked) {
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
export function nsw(detailsToBeChecked) {
  checker.fillForNSW(detailsToBeChecked);
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
export function sa(detailsToBeChecked) {
  checker.fillForSA(detailsToBeChecked);
}

// Will not submit due to capthca but will autofll the form.
// The expected inputs are:
// 
//  detailsToCheck = {
//    firstName: 'Last name of searchee',
//    lastName: 'Date of birth of searchee',
//    registrationNumber: 'Registration number of working with children check'
//  }
export function nt(detailsToBeChecked) {
  checker.fillForNT(detailsToBeChecked);
}