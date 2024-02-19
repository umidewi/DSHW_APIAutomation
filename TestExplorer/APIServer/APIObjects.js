const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "MSI Notebook 01",
      data: {
         year: 2024,
         price: 2300,
         CPU: "Intel Core i5",
         Hard: "1 TB"
      }
      },
    );

  //Expectation get result = 200 and body is equal
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("MSI Notebook 01");
  expect(response.body.data.year).to.equal(2024);
  expect(response.body.data.price).to.equal(2300);
  expect(response.body.data.CPU).to.equal("Intel Core i5");
  expect(response.body.data.Hard).to.equal("1 TB");
  expect(response.body.createdAt).to.not.be.null;
  
  //Save ID get from post method body
  console.log(response.body)
  const id = response.body.id;
  console.log("id After POST:", id);
  return id; //Return the id
}

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

async function deleteMethod(id) {
  const response = await request(url)
    .delete(`/objects/${id}`)
    expect(response.body.message).to.equal(
      `Object with id = ${id} has been deleted.`
    )
    console.log(response.body.message)
}
module.exports = { postMethod , putMethod , getMethod , patchMethod , deleteMethod };