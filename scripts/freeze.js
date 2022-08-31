"use strict";
let pet = {type: "snow white hamster", name:"kira"};

// Object.preventExtensions(pet);
// Object.seal(pet);
Object.freeze(pet);

pet.name = "Yamada kira";
delete pet.type;
pet.weight = 42;