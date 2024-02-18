const { postMethod, putMethod } = require("../APIServer/APIObjects");

//test suites
describe("Testing API restful", function () {
let id;

  // Test case 1

  // it("Test GET from Function", async function () {
  //   await getMethod();
  // });

  it("Test POST from Function", async function () {
    await postMethod();
  });

  // it("Test PUT from Function", async function () {
  //   await putMethod();
  // });

});