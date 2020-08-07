const testData = require('./test_data');
const qldChecker = require('./qld_checker');

async function getResult(testPerson) {
  const result  = await qldChecker(testPerson)
  console.log(result)
}

getResult(testData.bluecard);