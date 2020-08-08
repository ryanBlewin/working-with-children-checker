const testData = require('./test_data');
const cleaner = require('./clean');
const qldChecker = require('./qld_checker');

async function getResult(testPerson) {
  const result  = await qldChecker(cleaner(testPerson))
  console.log(result)
}

// getResult(testData.passCase);
getResult(testData.failCase);