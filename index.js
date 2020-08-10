const testData = require('./test_data');
const cleaner = require('./clean');
const qldChecker = require('./qld_checker');
const vicChecker = require('./vic_checker');

async function getResult(testPerson) {
  const result  = await qldChecker(cleaner(testPerson))
  console.log(result)
}

// module.exports =  async function getResult(testPerson) {
//   const result  = await qldChecker(cleaner(testPerson))
//   console.log(result)
// }

// getResult(testData.passCase);
// getResult(testData.failCase);

async function getVicResult(testPerson) {
  const result  = await vicChecker(testPerson);
  console.log(result)
}

getVicResult(testData);
