/* const vehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "Red",
  getSummary: function () {
    return `I'm ${this.color} ${this.brand} ${this.model}!`;
  },
};

const vehicle2 = vehicle;
vehicle2.color = "yellow";

console.log(vehicle);
console.log(vehicle2);
console.log(vehicle.getSummary());
console.log(vehicle2.getSummary()); */

function Vehicle(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.getSummary = function () {
    return `I'm ${this.color} ${this.brand} ${this.model}!`;
  };
}

const vehicle = new Vehicle("Ford", "Mustang", "red");
const vehicle2 = new Vehicle("Titanic", "boat", "yellow");

console.log(vehicle);
console.log(vehicle2);
console.log(vehicle.getSummary());
console.log(vehicle2.getSummary());
