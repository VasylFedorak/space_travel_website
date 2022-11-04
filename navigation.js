const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// class Cow extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// function generateAnimals(type, count) {
//   const animalTypeArray = [];
//   const classesMapping = {
//     cat: Cat,
//     dog: Dog,
//     cow: Cow,
//   };
//   for (let i = 0; i <= count; i++) {
//     const animal = new classesMapping[`${type}`.toLocaleLowerCase()](
//       `${type + " " + i}`,
//       parseInt(`${i}`)
//     );
//     animalTypeArray.push(animal);
//   }
//   return animalTypeArray;
// }

// const cats = generateAnimals("Cat", 5);
// const dogs = generateAnimals("Dog", 3);
// const cows = generateAnimals("Cow", 7);
// const animals = [];

// function newObjectsArray(classArr) {
//   return classArr.map((e) => ({
//     name: e.name,
//     age: e.age,
//   }));
// }

// const cats1 = newObjectsArray(cats);
// const dogs1 = newObjectsArray(dogs);
// const cows1 = newObjectsArray(cows);

// animals.push(...cats1, ...dogs1, ...cows1);

// console.log(animals);

// We have two subclasses, Developer and Designer.
// Designers can design (method design(item), that can return the message:
//"<firstName> designed <item>"),
// and developers can write code(method code(item), that can return the message:
//"<firstName> coded <item>"),.
// Both inherit from the "Human" class (needs to have firstName, lastName and
// sayHello() method. This method can return the message: "Hello, I'm <firstName>" ).

//Create develpoper ({"firstName": "Valeriy", "lastName": "Ivanov"})
//Create designer ({"firstName": "Olha", "lastName": "Iakova"})
