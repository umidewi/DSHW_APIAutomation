const { postMethod, putMethod, getMethod, patchMethod, deleteMethod } = require("../APIServer/APIObjects");

//test suites
describe("Testing API restful", function () {
let id;

  // Test case POST
  it("Test POST from Function", async function () {
    id = await postMethod();
  });

  // Test case PUT
  it("Test PUT from Function", async function () {
    await putMethod(id);
  });
  
  // Test case GET
  it("Test GET from Function", async function () {
    await getMethod(id);
  });

  // Test case PATCH
  it("Test PATCH from Function", async function () {
    await patchMethod(id);
  });

  // Test case DELETE
  it("Test DELETE from Function", async function () {
    await deleteMethod(id);
  });

});