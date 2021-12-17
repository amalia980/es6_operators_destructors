/*============================== spread arrays ==============================*/

const berries = ["strawberry", "raspberry", "blueberry"];

const newBerries = [...berries];

console.log(newBerries);

/*============================== spread array in another array ==============================*/

const vegetables = ["carrot", "cucumber", "potatoe"];

const allFoods = [...berries, ...vegetables];
console.log(allFoods);

/*============================== spread objects ==============================*/

const countries = {
    country: "italy",
    capital: "rome"
}

const countryCopy = {...countries, language: "italian"};

console.log(countryCopy)