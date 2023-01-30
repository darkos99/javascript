/* ZADATAK 1 */
function Person() {}

Person.prototype.fname = function () {
  return "IME";
};

Person.prototype.lname = function () {
  return "PREZIME";
};

Person.prototype.fullname = function () {
  return this.fname() + " " + this.lname();
};
var p = new Person();
console.log(p.fullname());

/* ZADATAK 3 */

for (var x = 0; x <= 20; x++) {
  if (x === 0) {
    console.log(x + " paran");
  } else if (x % 2 === 0) {
    console.log(x + " paran");
  } else {
    console.log(x + " neparan");
  }
}

/*ZADATAK 2 */
var x;
var z = 2;
var y = 18;

if (z === 2) {
  x = y;
} else {
  x = 5;
}

console.log(x);
