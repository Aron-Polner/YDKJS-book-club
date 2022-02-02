// reference: https://github.com/Aron-Polner/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md#see-the-closure

function lookupAnimal(animalID) {
  var animals = [
    { id: 14, name: "Lemur" },
    { id: 73, name: "Tapir" },
    { id: 112, name: "Salmon" },
    { id: 6, name: "Ox" },
  ];

  return function greetAnimal(greeting) {
    var animal = animals.find((animal) => animal.id == animalID);

    return `${greeting}, ${animal.name}!`;
  };
}

var chosenAnimals = [lookupAnimal(6), lookupAnimal(112)];

chosenAnimals[0].name; // greetAnimal
chosenAnimals[0]("Hello"); // Hello, Ox!
chosenAnimals[1]("Howdy"); // Howdy, Salmon!
