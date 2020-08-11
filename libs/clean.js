// The validation tools for various states require different methods for entering the users name. Most only require the surname.
// Splits the names into an array and returns an object with the firts and last name.
export function splitName(nameToSplit) {
  const names = nameToSplit.split(' ');
  return {
      first: names[0],
      last: names[names.length - 1]
  }
}



// In QLD it is common to store the registration and issue number on one line (example: 123456/2), but the QLD validation tool takes the data as two separate inputs. 
// Splits the registration number by the / character and returns as an object
export function splitRegistrationNumber(registrationNumberToSplit) {
  const splitNumber = registrationNumberToSplit.split('/');
  return {
    registration: splitNumber[0],
    issue: splitNumber[1]
  }
}

// QLD requires the expiry date to be input for the validation check. It is input into individual dropdown boxes. 
//  Splits the date, converts the month number to the shorthand name and converts the year to shorthand. Returns these in object. 
export function splitDate(dateToSplit) {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date(dateToSplit);
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear() % 100
  };
}