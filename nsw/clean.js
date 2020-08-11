
getLastName = (name) => {
    const names = name.split(' ');
    return names[names.length - 1];
    return lastName[names.length]
  }
  
  // Returns object with clean data for entry into online validator tool
module.exports = returnClean =(person) =>  {
  return {
    checking_last_name: getLastName(person.holder_name),
    checking_dob: person.date_of_birth,
    checking_registration_no: person.registration_number,
  }
}
  