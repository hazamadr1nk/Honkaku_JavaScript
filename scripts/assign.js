let pet = {
    type: "snow white hamster",
    name:"kira",
    description:{
        birth:"2014-02-15"
    }
};

let pet2 = {
    name: "Yamada kira",
    color: "white",
    description: {
        food: "seed of sun flower"
    }
};

let pet3 = {
    weight: 42,
    photo: "http://www.wings.msn.to/img.ham.jpg"
};

Object.assign(pet,pet2,pet3);
console.log(pet);