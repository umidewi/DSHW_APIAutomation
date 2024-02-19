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


module.exports = { postMethod };