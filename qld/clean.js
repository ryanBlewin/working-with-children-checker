// const bluecard  = require('../test_data');

//  Registration number on card is combined with issue number and separated by /. Splits into two
splitRegistrationNumber = (registrationNumber) => {
  const split = registrationNumber.split('/');
  return {
    registration: split[0],
    issue: split[1],
  }
}

// Split the expiry date to match the format of the online validator tool
splitExpiryDate = (expiryDate) => {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date(expiryDate);
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear() % 100
  };
}

// Returns object with clean data for entry into online validator tool
module.exports = returnClean = (bluecardDetails) => {
  const registration = splitRegistrationNumber(bluecardDetails.registration_number)
  const expiry = splitExpiryDate(bluecardDetails.expiry_date);
  return cleanedDetails = {
    checking_name: bluecardDetails.holder_name,
    checking_card_no: registration.registration,
    checking_issue_no: registration.issue,
    checking_exp_day: expiry.day,
    checking_exp_month: expiry.month,
    checking_exp_year: expiry.year
  }
}