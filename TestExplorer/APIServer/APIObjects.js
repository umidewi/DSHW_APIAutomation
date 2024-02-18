const request = require("supertest"); // Import SuperTest
const { expect } = require("chai"); // Import Chai
const baseUrl = require("../GlobalVariable/BaseURL");

const url = baseUrl; //Define Global Variable

// async function getMethod() {
//   const response = await request(url).get("/objects/");

//   //Assertation / Verification
//   expect(response.status).to.equal(200);
//   console.log(response.body);
// }

// async function getMethod(id) {
//   const response = await request(url).get(`/objects/`);

//   //Assertation / Verification
//   expect(response.status).to.equal(200);
//   expect(response.body.id).to.equal(id);
//  // expect(response.body.name).to.equal("Umi Dewi 01");
//   console.log(response.body);
// }

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

  //Expectation get result = 200
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("MSI Notebook 01");
  expect(response.body.data.year).to.equal(2024);
  expect(response.body.data.price).to.equal(2300);
  expect(response.body.data.CPU).to.equal("Intel Core i5");
  expect(response.body.data.Hard).to.equal("1 TB");
  expect(response.body.createdAt).to.not.be.null;
  
  //Save ID get from post method body
  const id = response.body.id;
  console.log("id After POST:", id);
  return id; //Return the id;
  //expect(response.body.name).to.equal("Umi Dewi");
  console.log(response.body.id)
  console.log(response.body);
}

async function putMethod() {
  const response = await request(url).put(`/objects`)
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
      //Assertion based on the response
      expect(response.status).to.equal(200); 
      expect(response.body.data.color).to.equal("pink");
      expect(response.body.name).to.equal("MSI Notebook 01 New");
}


module.exports = { postMethod , putMethod};