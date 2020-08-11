getLastName = (name) => {
    const names = name.split(' ');
    return names[names.length - 1]
  }

module.exports = returnClean = (person) =>  {
    return {
        checking_last_name: getLastName(person.holder_name),
        checking_card_no: person.registration_number,
    }
}
  