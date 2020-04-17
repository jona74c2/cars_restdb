window.addEventListener("DOMContentLoaded", start);

let jsonData = [];
let settings = {};
let HTML = {};
const car = {
  brand: "BMW",
  serial_number: "44ff" + Math.random(),
  model: "x6",
  engine_size_l: "3.2",
};

function start() {
  settings.endpoint = "https://frontend3rdsem-40f0.restdb.io/rest/cars";
  settings.apiKey = "5e957588436377171a0c232d";
  HTML.create = document.querySelector("#create");
  /* HTML.create.addEventListener */

  HTML.form = document.querySelector("form");
  const elements = HTML.form.elements;
  console.log(elements);
  getJsonData();
}

async function getJsonData() {
  const response = await fetch(settings.endpoint + "?max=100", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
  });
  /* .then((e) => e.json())
    .then((e) => console.log(e)); */
  jsonData = await response.json();
  console.log(jsonData);
  console.log(jsonData[jsonData.length - 1]._id);
}

async function post(car) {
  const postData = JSON.stringify(car);
  const response = await fetch(settings.endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });
  jsonData = await response.json();
  console.log(jsonData);
  getJsonData();
}

async function deleteIt(id) {
  /* const id = jsonData[jsonData.length - 1]._id; */
  const response = await fetch(settings.endpoint + "/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
  });
  /* .then((e) => e.json())
        .then((e) => console.log(e)); */
  jsonData = await response.json();
  console.log(jsonData);
}

async function put(id) {
  /* const id = jsonData[jsonData.length - 1]._id; */
  let data = {
    brand: "Volkswagen",
    serial_number: "vw" + Math.random(),
    model: "Up!",
    engine_size_l: "1.0",
  };
  let postData = JSON.stringify(data);
  const response = await fetch(settings.endpoint + "/" + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });
  /* .then((e) => e.json())
          .then((e) => console.log(e)); */
  const putData = await response.json();
  console.log(putData);
}
