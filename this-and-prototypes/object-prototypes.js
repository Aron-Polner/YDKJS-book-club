// this with dynamic context
var homework = {
  study() {
    console.log(`Please study ${this.topic}`);
  },
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();

var mathHomework = Object.create(homework);
mathHomework.topic = "animals";
mathHomework.study();

// Prototypes
var animalPrototype = {
  makeNoise() {
    console.log(`I ${this.noise}`);
  },
};

function Animal(noise) {
  this.noise = noise;
}

Animal.prototype = animalPrototype;
Animal.prototype.constructor = Animal;

const dog = new Animal("bark");
dog.makeNoise();
