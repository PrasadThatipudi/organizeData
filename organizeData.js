const people = [
  {
    name: "Rahul",
    age: 25,
    employed: true,
    city: "Pune",
    job: "Software engineer",
    hobbies: ["playing chess", "gardening"],
    education: "computer science",
    transportation: ["car"],

    pets: [
      {
        specie: "dog",
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
    city: "Bangalore",
    age: 30,
    job: "graphic designer",
    hobbies: ["cooking", "often experiments with Italian recipes"],
    education: "computer science",
    transportation: ["public transport"],

    pets: [
      {
        specie: "parrot",
        name: "kiwi",
        age: 1,
        isFullyVaccinated: false,
        isVaccinated: true,
        breed: "Monk",
        favoriteActivities: ["knows over 20 phrases", "mimics her voice"],
      },
    ],
  },
  {
    name: "Ramesh",
    employed: true,
    city: "Jaipur",
    age: 45,
    job: "business owner",
    hobbies: [
      "reading historical fiction",
      "spends his weekends tending to his rose garden",
    ],
    education: "BA",
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
    city: "Chennai",
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

const employeesCount = (people) =>
  people.filter((person) => person.employed).length;

const noOfPeopleWhoHasCar = (people) =>
  people.filter((person) => person.transportation.includes("car")).length;

const countOfVaccinatedPets = (people) =>
  people.flatMap((person) => person.pets).filter((pet) => pet.isFullyVaccinated)
    .length;

const petNamesAndSpecie = (people) =>
  people
    .flatMap((person) => person.pets)
    .map((pet) => ({ name: pet.name, specie: pet.specie }));

const citiesOfPeople = (people) =>
  people.map((person) => ({ name: person.name, city: person.city }));

const hobbiesAndHobbiesCount = function (people) {
  const allHobbies = people.flatMap((person) => person.hobbies);

  return { hobbiesCount: allHobbies.length, hobbies: allHobbies };
};

const noOfPetsBelongToUnemployed = (people) =>
  people.filter((person) => !person.employed).map((person) => person.pets)
    .length;

const sum = (a, b) => a + b;
const averageAgeOfPeople = (people) =>
  people.map((person) => person.age).reduce(sum, 0) / people.length;

const studiedCSAndHavingPets = (people) =>
  people
    .filter((person) => person.education === "computer science")
    .filter((person) => person.pets).length;

const noOfPeopleHasMoreThan1Pet = (people) =>
  people.filter((person) => person.pets.length > 1).length;

const testExecuter = function (qnAndFn) {
  return qnAndFn.map(([Qn, Fn]) => ({ Qn: Qn, Ans: Fn(people) }));
};

const testCases = [
  ["1. How many individuals are currently employed?", employeesCount],
  ["2. How many people own a car?", noOfPeopleWhoHasCar],
  ["3. How many pets are fully vaccinated?", countOfVaccinatedPets],

  [
    "4. What are the names of all the pets, and what type of animal is each?",
    petNamesAndSpecie,
  ],
  ["5. Which cities do the individuals live in?", citiesOfPeople],
  [
    "6. How many hobbies are shared across the group? What are they?",
    hobbiesAndHobbiesCount,
  ],
  [
    "7. How many pets belong to people who are currently unemployed?",
    noOfPetsBelongToUnemployed,
  ],
  [
    "8. What is the average age of the individuals mentioned in the passage?",
    averageAgeOfPeople,
  ],
  [
    "9. How many individuals have studied computer science, and how many of them have pets?",
    studiedCSAndHavingPets,
  ],
  [
    "10. How many individuals own more than one pet?",
    noOfPeopleHasMoreThan1Pet,
  ],
];

console.log(testExecuter(testCases));
