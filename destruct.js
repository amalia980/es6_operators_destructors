/*======================== destructure arrays ==========================*/

const cars = ["ferrari", "ford", "mercedes"];

const [car1, car2, car3] = cars;
//new variables for the values. ferrari = car1 etc..

/*const [,car2,] = cars;
get only ford*/

console.log(car1, car2);

/*======================== destructure objects ==========================*/

const movies = {
    comedy: "Liar liar",
    horror: "Evil dead",
    romance: "The notebook"
}

// const comedyMovie = movies.comedy;
// console.log(comedyMovie);

const {comedy} = movies;

console.log(comedy);
