splitName = (name) => {
    const names = name.split(' ');
    return {
        first: names[0],
        last: names[names.length - 1]
    }
  }

module.exports = returnClean = (person) =>  {
    names = splitName(person.holder_name);
    return {
        checking_first_name: names.first,
        checking_last_name: names.last,
        checking_card_no: person.registration_number,
    }
}
  