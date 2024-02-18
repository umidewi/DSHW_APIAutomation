const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function getMethod() {
  const response = await request(url).get("/objects/10");

  //Assertation / Verification
  expect(response.status).to.equal(200);
  console.log(response.body);
}

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Umi Dewi",
      data: {
        Generation: "2021st",
        Price: "783000",
        Capacity: "350 GB",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Umi Dewi");

  console.log(response.body);
}

module.exports = { getMethod, postMethod };