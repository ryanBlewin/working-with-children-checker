const qldChecker = require('./qld_checker');

const testPerson = {
  checking_name: 'Natasha Lynn Gregory',
  checking_card_no: '951216',
  checking_issue_no: '4',
  checking_exp_day: '23',
  checking_exp_month: 'Nov',
  checking_exp_year: '20',
}

qldChecker(testPerson)