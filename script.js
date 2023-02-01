var polaznici = [
  {
    name: "Ime0",
    surname: "Prezime0",
    age: 18,
  },
  {
    name: "Ime1",
    surname: "Prezime1",
    age: 13,
  },
  {
    name: "Ime2",
    surname: "Prezime2",
    age: 24,
  },
  {
    name: "Ime3",
    surname: "Prezime3",
    age: 67,
  },
  {
    name: "Ime4",
    surname: "Prezime4",
    age: 12,
  },
  {
    name: "Ime5",
    surname: "Prezime5",
  },
];

//polaznici.forEach((polaznik) => console.log(polaznik.name));

//prvi način

function checkAge(age, name, surname) {
  var ageResponse = " ";
  var fullName = name + " " + surname;
  switch (true) {
    case age < 18:
      ageResponse = fullName + "Ovo je maloljetnik/ca";
      break;
    case age >= 18 && age < 67:
      ageResponse = fullName + "Ovo je punoljenik/ca";
      break;
    case age >= 67:
      ageResponse = fullName + "Ovo je umirovljenik/ca";
      break;
    default:
      ageResponse = fullName + "Osoba se nije rodila";
      break;
  }
  return ageResponse;
}

polaznici.forEach((polaznik) => {
  //console.log("Ime: " + polaznik.name);
  console.log(checkAge(polaznik.age, polaznik.name, polaznik.surname));
});

//2 način
/*
function checkAge(age) {
  if (age < 18) {
    return "Ovo je maloljetnik/ca";
  } else if (age >= 18 && age < 67) {
    return "Ovo je punoljenik/ca";
  } else {
    return "Ovo je umirovljenik/ca";
  }
}

polaznici.forEach((polaznik) => {
  console.log("Ime: " + polaznik.name);
  console.log(checkAge(polaznik.age));
});
*/
