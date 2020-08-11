export function splitName(nameToSplit) {
  const names = nameToSplit.split(' ');
  return {
      first: names[0],
      last: names[names.length - 1]
  }
}

export function splitRegistrationNumber(registrationNumberToSplit) {
  const splitNumber = registrationNumberToSplit.split('/');
  return {
    registration: splitNumber[0],
    issue: splitNumber[1]
  }
}

export function splitDate(dateToSplit) {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date(dateToSplit);
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear() % 100
  };
}