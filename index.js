const testData = require('./test_data');
const qldCleaner = require('./qld/clean');
const qldChecker = require('./qld/checker');
const vicCleaner = require('./vic/clean');
const vicChecker = require('./vic/checker');
const nswChecker = require('./nsw/checker');
const waCleaner = require('./wa/clean');
const waChecker = require('./wa/checker');
const ntCleaner = require('./nt/clean');
const ntChecker = require('./nt/checker');

async function getQldResult(testPerson) {
  const result  = await qldChecker(qldCleaner(testPerson))
  console.log(`QLD test: ${result}`)
}

async function getVicResult(testPerson) {
  const result  = await vicChecker(vicCleaner(testPerson));
  console.log(`Vic test: ${result}`)
}

populateNsw = (testPerson, testUser) => {
  nswChecker(testPerson, testUser);
}

async function getWaResult(testPerson) {
  const result = await waChecker(waCleaner(testPerson));
  console.log(`WA test: ${result}`);
}

populateNt = (testPerson) => {
  ntChecker(ntCleaner(testPerson));
}

// getQldResult(testData.qldTest);
// getVicResult(testData.vicTest);
// populateNsw(testData.nswTest, testData.nswUserTest);
// getWaResult(testData.waTest);
populateNt(testData.ntTest);

