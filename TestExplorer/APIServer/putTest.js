const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable


async function putMethod(id) {
  console.log("id to PUT:", id);
  const response = await request(url)
    .put(`/objects/${id}`)
    .send({
      name: "MSI Notebook 01 New",
      data: {
        year: 2024,
        price: 2300,
        CPU: "Intel Core i5",
        Hard: "1 TB",
        color:"pink"
        },
      })
      //Expectation get result = 200 and body is equal
      expect(response.status).to.equal(200); 
      expect(response.body.data.color).to.equal("pink");
      expect(response.body.name).to.equal("MSI Notebook 01 New");
      //console.log(response.body)
      console.log("body after PUT:", response.body);
}

module.exports = { putMethod };