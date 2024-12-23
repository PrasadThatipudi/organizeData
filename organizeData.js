const people = [
  {
    name: "Rahul",
    age: null,
    employed: true,
    place: "Pune",
    job: "Software engineer",
    hobbies: ["playing chess", "gardening"],
    education: "computer science",
    transportation: ["car"],

    pets: [
      {
        specie: "cat",
        name: "Max",
        age: 4,
        isFullyVaccinated: true,
        isVaccinated: false,
        breed: "golden retriever",
        favoriteActivities: ["playing fetch in the park"],
      },
    ],
  },
  {
    name: "Ananya",
    employed: true,
    place: "Bangalore",
    age: 30,
    job: "graphic designer",
    hobbies: ["cooking", "often experiments with Italian recipes"],
    education: "computer science",
    transportation: ["public transport"],

    pets: [
      {
        specie: "parrot",
        name: "kiwi",
        age: null,
        isFullyVaccinated: false,
        isVaccinated: true,
        breed: null,
        favoriteActivities: ["knows over 20 phrases", "mimics her voice"],
      },
    ],
  },
  {
    name: "Ramesh",
    employed: true,
    place: "Jaipur",
    age: 45,
    job: "business owner",
    hobbies: [
      "reading historical fiction",
      "spends his weekends tending to his rose garden",
    ],
    education: null,
    transportation: [],

    pets: [
      {
        specie: "cat",
        name: "Bella",
        age: 3,
        isFullyVaccinated: true,
        isVaccinated: false,
        breed: "percian",
        favoriteActivities: ["love lounging in the sun"],
      },
      {
        specie: "cat",
        name: "Leo",
        age: 3,
        isFullyVaccinated: true,
        isVaccinated: false,
        breed: "percian",
        favoriteActivities: ["love lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    employed: false,
    place: "Chennai",
    age: 28,
    job: "professional dancer",
    hobbies: ["prefers modern fantasy novels ", " binge-watching sci-fi shows"],
    education: null,
    transportation: [],

    pets: [
      {
        specie: "rabbit",
        name: "Snowy",
        age: 2,
        isFullyVaccinated: false,
        isVaccinated: true,
        breed: "percian",
        favoriteActivities: [
          "enjoys hopping around her backyard",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

const employeesCount = function (people) {
  return people.filter((person) => person.employed).length;
};

console.log("1. How many individuals are currently employed?");
console.log(employeesCount(people));

const noOfPeopleWhoHasCar = function (people) {
  return people.filter((person) => person.transportation.includes("car"))
    .length;
};

console.log("2. How many people own a car?");
console.log(noOfPeopleWhoHasCar(people));

const countOfVaccinatedPets = function (people) {
  return people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isFullyVaccinated).length;
};

console.log("3. How many pets are fully vaccinated?");
console.log(countOfVaccinatedPets(people));

const petNames = function (people) {
  return people.flatMap((person) => person.pets);
};

console.log(
  "4. What are the names of all the pets, and what type of animal is each?"
);
