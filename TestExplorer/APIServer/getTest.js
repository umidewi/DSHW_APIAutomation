const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function getMethod(id) {
  console.log("id to GET:", id);
  const response = await request(url)
  .get(`/objects/${id}`);

  //Assertation / Verification
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("MSI Notebook 01 New");
  expect(response.body.data.year).to.equal(2024);
  expect(response.body.data.price).to.equal(2300);
  expect(response.body.data.CPU).to.equal("Intel Core i5");
  expect(response.body.data.Hard).to.equal("1 TB");
  expect(response.body.data.color).to.equal("pink");
  console.log("body after GET:", response.body);
}

module.exports = { getMethod };