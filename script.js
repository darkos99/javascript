printLines();
function printLines() {
  console.log(secondLine);

  var firstLine = "I'm your first line!";
  console.log(firstLine);

  var secondLine = "I'm your second line!";
  console.log(secondLine);
}

printLines();
var printLines = function () {
  console.log(secondLine);

  var firstLine = "I'm your frst line!";
  console.log(firstLine);

  var secondLine = "I'm your second line!";
  console.log(secondLine);
};

//LET --> moguće modificirati vrijednost

const madeOfGlass = function () {
  let thing = "window";
  thing = "glass";

  console.log(thing);
};
madeOfGlass();

////CONST --> nije moguće modificirati vrijednost

/*
const madeOfGlass = function () {
  const thing = "window";
  thing = "glass";

  console.log(thing);
};
madeOfGlass();
*/

//Object destructuring
const dog = {
  breed: "Retriver",
  age: 12,
};
const { breed, age } = dog;
console.log(breed);
console.log(age);

//Array destructuring

const firstArray = ["a", "b", "c"];
const [prvi, drugi, treci, cetvrti] = firstArray;
console.log(prvi);
console.log(drugi);
console.log(treci);
console.log(cetvrti);

//Complex object destructuring

const car = {
  name: "Ferari",
  country: "IT",
  dimensions: {
    width: 550,
    height: 120,
  },
};
const {
  name,
  country,
  dimensions: { width, height },
} = car;

console.log(name);
console.log(country);
console.log(width);
console.log(height);

//zadatak 3 hand on

const oneArray = ["a", "b", "c"];
const twoArray = ["e", "b", "g"];
const arrayMachine = function (one, two) {
  let finalArray = one.concat(two);
  // let finalArray = [...one, ...two];

  finalArray = [...new Set(finalArray)];
  // finalArray = Array.from(finalArray);

  finalArray.sort();
  console.log(finalArray);

  finalArray.reverse();
  console.log(finalArray);

  console.log(finalArray);
};

arrayMachine(oneArray, twoArray);
