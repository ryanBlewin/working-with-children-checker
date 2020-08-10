const testData = require('./test_data');
const qldCleaner = require('./qld/clean');
const qldChecker = require('./qld/checker');
const vicCleaner = require('./vic/clean');
const vicChecker = require('./vic/checker');

async function getQldResult(testPerson) {
  const result  = await qldChecker(qldCleaner(testPerson))
  console.log(`QLD test: ${result}`)
}

async function getVicResult(testPerson) {
  const result  = await vicChecker(vicCleaner(testPerson));
  console.log(`Vic test: ${result}`)
}

getQldResult(testData.qldTest);
getVicResult(testData.vicTest);
