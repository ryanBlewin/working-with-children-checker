const qldCleaner = require('./qld/clean');
const qldChecker = require('./qld/checker');
const vicCleaner = require('./vic/clean');
const vicChecker = require('./vic/checker');
const nswCleaner = require('./nsw/clean');
const nswChecker = require('./nsw/checker');
const waCleaner = require('./wa/clean');
const waChecker = require('./wa/checker');
const ntCleaner = require('./nt/clean');
const ntChecker = require('./nt/checker');
const saCleaner = require('./sa/clean');
const saChecker = require('./sa/checker');
const tasCleaner = require('./tas/clean');
const tasChecker = require('./tas/checker');

async function getQldResult(testPerson) {
  const result  = await qldChecker(qldCleaner(testPerson))
  return result
}

async function getVicResult(testPerson) {
  const result  = await vicChecker(vicCleaner(testPerson));
  return result
}

populateNsw = (testPerson, testUser) => {
  nswChecker(nswCleaner(testPerson), testUser);
}

async function getWaResult(testPerson) {
  const result = await waChecker(waCleaner(testPerson));
  return result
}

populateNt = (testPerson) => {
  ntChecker(ntCleaner(testPerson));
}

populateSa = (testPerson, testUser) => {
  saChecker(saCleaner(testPerson), testUser);
}

async function getTasResult(testPerson) {
  const result = await tasChecker(tasCleaner(testPerson));
  return result
}

module.exports = async function startSearch(state, bluecardDetails, userDetails) {
  switch(state) {
    case 'QLD':
      return getQldResult(bluecardDetails);
    case 'VIC':
      return getVicResult(bluecardDetails);
    case 'TAS':
      return getTasResult(bluecardDetails);
    case 'WA':
      return getWaResult(bluecardDetails);
    case 'NSW':
      populateNsw(bluecardDetails, userDetails);
      break;
    case 'NT':
      populateNt(bluecardDetails);
      break;
    case 'SA':
      populateSa(bluecardDetails, userDetails);
      break;
    default:
      return 'Unable to perform search'
  }
}