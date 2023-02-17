/* const processOrder = function (name, meal, estimation, callback) {
  const status = `${name}'s ${meal} is preparing!`;
  callback(status);

  setTimeout(function () {
    const status = `${name}'s ${meal} is prepared!`;
    callback(status);
  }, estimation);
};

console.log("Matilda orders...");
processOrder("Matilda", "Cheesburger", 2000, function (status) {
  console.log(status);
}); */

const buildSomething = function (housePart, estimate) {
  console.log(housePart + " building started...");

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (true) {
        resolve("ready");
      } else {
        reject("Unexpected error found, building can not be continued!");
      }
    }, estimate);
  });
};

buildSomething("Foundations", 1000)
  .then((status) => {
    console.log(`Foundations are ${status}`);
    return buildSomething("Walls", 1000);
  })
  .then((status) => {
    console.log(`Walls are ${status}`);
    return buildSomething("Roof", 2000);
  })
  .then((status) => {
    console.log(`Roof is ${status}`);
    return buildSomething("House is built!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(
      "Bez obzira da li se pokrenuo reject ili resolve ja ću se uvijek pokrenuti!"
    );
  });
