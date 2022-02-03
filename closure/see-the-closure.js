// reference: https://github.com/Aron-Polner/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md#see-the-closure
// medium post explaining callbacks and closures: // medium post: https://javascript.plainenglish.io/using-callbacks-and-closures-in-javascript-2261030cbbf5#:~:text=Callbacks%20are%20functions%20that%20are,parts%20of%20a%20JavaScript%20program.

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
