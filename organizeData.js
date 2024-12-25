const people = [
  {
    name: "Rahul",
    age: 25,
    employement: { status: true, job: "Software engineer" },
    city: "Pune",
    hobbies: [
      { hobby: "games", description: ["chess"] },
      { hobby: "gardening", description: [] },
    ],
    // hobbies: { games: ["chess"], gardening: ["gardening"] },
    // hobbies: ["playing chess", "gardening"],
    education: "computer science",
    transportation: ["car"],

    pets: [
      {
        species: "dog",
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
    employement: { status: true, job: "graphic designer" },
    city: "Bangalore",
    age: 30,
    hobbies: [
      {
        hobby: "cooking",
        description: ["often experiments with Italian recipes"],
      },
    ],
    // hobbies: { cooking: ["often experiments with Italian recipes"] },
    // hobbies: ["cooking", "often experiments with Italian recipes"],
    education: "computer science",
    transportation: ["public transport"],

    pets: [
      {
        species: "parrot",
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
    employement: { status: true, job: "business owner" },
    city: "Jaipur",
    age: 45,
    hobbies: [
      { hobby: "reading books", description: ["historical fiction"] },
      {
        hobby: "gardening",
        description: ["spends his weekends tending to his rose garden"],
      },
    ],
    // hobbies: {
    //   reading: ["historical fiction"],
    //   gardening: ["spends his weekends tending to his rose garden"],
    // },
    // hobbies: [
    //   "reading historical fiction",
    //   "spends his weekends tending to his rose garden",
    // ],
    education: "BA",
    transportation: [],

    pets: [
      {
        species: "cat",
        name: "Bella",
        age: 3,
        isFullyVaccinated: true,
        isVaccinated: true,
        breed: "percian",
        favoriteActivities: ["love lounging in the sun"],
      },
      {
        species: "cat",
        name: "Leo",
        age: 3,
        isFullyVaccinated: true,
        isVaccinated: true,
        breed: "percian",
        favoriteActivities: ["love lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    employement: { status: false, job: "professional dancer" },
    city: "Chennai",
    age: 28,
    hobbies: [
      { hobby: "reading", description: ["prefers modern fantasy novels"] },
      {
        hobby: "watching",
        description: ["binge-watching sci-fi shows"],
      },
    ],
    // hobbies: {
    //   reading: ["prefers modern fantasy novels"],
    //   watching: ["binge-watching sci-fi shows"],
    // },
    // hobbies: ["prefers modern fantasy novels ", " binge-watching sci-fi shows"],
    education: null,
    transportation: [],

    pets: [
      {
        species: "rabbit",
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
  people.filter((person) => person.employement.status).length;

const noOfPeopleWhoHasCar = (people) =>
  people.filter((person) => person.transportation.includes("car")).length;

const countOfVaccinatedPets = (people) =>
  people.flatMap((person) => person.pets).filter((pet) => pet.isFullyVaccinated)
    .length;

const petNamesAndspecies = (people) =>
  people
    .flatMap((person) => person.pets)
    .map(({ name, species }) => ({ name, species }));

const citiesOfPeople = (people) =>
  people.map(({ name, city }) => ({ name, city }));

const hobbiesAndHobbiesCount = function (people) {
  const allHobbies = people.flatMap((person) => person.hobbies);

  return { hobbiesCount: allHobbies.length, hobbies: allHobbies };
};

const noOfPetsBelongToUnemployed = (people) =>
  people
    .filter((person) => !person.employement.status)
    .map((person) => person.pets).length;

const sum = (a, b) => a + b;
const averageAgeOfPeople = (people) =>
  people.map((person) => person.age).reduce(sum, 0) / people.length;

const studiedCSAndHavingPets = (people) =>
  people
    .filter((person) => person.education === "computer science")
    .filter((person) => person.pets).length;

const noOfPeopleHasMoreThan1Pet = (people) =>
  people.filter((person) => person.pets.length > 1).length;

const petsAssociatedWithFavActivities = (people) =>
  people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.favoriteActivities.length !== 0)
    .map(({ species, name, favoriteActivities }) => ({
      species,
      name,
      favoriteActivities,
    }));

const petsNamesBelongToBangaloreAndChennai = (people) =>
  people
    .filter(
      (person) => person.city === "Chennai" || person.city === "Bangalore"
    )
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);

const vaccinatedPetsBelongToNoCar = (people) =>
  people
    .filter((person) => person.transportation.includes("car"))
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isFullyVaccinated).length;

const countOccurences = function (occurences, element) {
  !occurences[element] ? (occurences[element] = 1) : (occurences[element] += 1);
  return occurences;
};

const commonTypeOfPet = function (people) {
  const petOccurences = people
    .flatMap((person) => person.pets)
    .map((pet) => pet.species)
    .reduce(countOccurences, {});

  return Object.keys(petOccurences).reduce((commonPet, pet) =>
    petOccurences[commonPet] > petOccurences[pet] ? commonPet : pet
  );
};

const moreThanTwoHobbies = (people) =>
  people.filter((person) => person.hobbies.length > 2).length;

const youngestPet = function (people) {
  const { species: youngestPet, name } = people
    .flatMap((person) => person.pets)
    .reduce((youngPet, pet) => (youngPet.age > pet.age ? pet : youngPet));

  return { youngestPet, name };
};

const cityStatrsWithB = (people) =>
  people.filter((person) => person.city.startsWith("B")).length;

const testExecuter = function (qnAndFn) {
  return qnAndFn.map(([Qn, Fn]) => ({ Qn: Qn, Ans: Fn(people) }));
};

const testCases = [
  ["1. How many individuals are currently employed?", employeesCount],
  ["2. How many people own a car?", noOfPeopleWhoHasCar],
  ["3. How many pets are fully vaccinated?", countOfVaccinatedPets],
  [
    "4. What are the names of all the pets, and what type of animal is each?",
    petNamesAndspecies,
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
  [
    "11. Which pets are associated with specific favorite activities?",
    petsAssociatedWithFavActivities,
  ],
  [
    "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?",
    petsNamesBelongToBangaloreAndChennai,
  ],
  [
    "13. How many vaccinated pets belong to people who do not own a car?",
    vaccinatedPetsBelongToNoCar,
  ],
  ["14. What is the most common type of pet among the group?", commonTypeOfPet],
  ["15. How many individuals have more than two hobbies?", moreThanTwoHobbies],
  ["17. Which pet is the youngest, and what is its name?", youngestPet],
  // [
  //   "18. What types of books are mentioned as interests, and who reads them?",
  //   whoReadsBooksAndWhatAreThey,
  // ],
  [
    "19. How many individuals live in cities starting with the letter B?",
    cityStatrsWithB,
  ],
];

console.log(testExecuter(testCases));
