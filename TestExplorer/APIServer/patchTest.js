const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function patchMethod(id) {
  const response = await request(url)
    .patch(`objects/${id}`)
    .send({
      "name" : "MSI Notebook Patch" //change name
    })
  // Assertion based on the response
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("MSI Notebook Patch");
  console.log("body after PATCH:", response.body);
}

module.exports = { patchMethod };