/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

/*
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:  0        1           2       3     4    5      6
console.log(typeof students); //typeof doesn't tell me my variable is an array ->
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(name);
console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop
let food = [ 'Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food){
    console.log(f + ' is amazing!');
}

//array methods

//.push -> Adds element to an array
food.push('Pizza');
console.log(food);

//.splice -> Removes elements from an array or/and inserts 
food.splice(1, 1);
console.log(food);
*/

let food = ['Pecan Pie', 'Apples', 'Strawberry', 'Steak'];

//food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//lets do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3, 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(movie => console.log(movie));
}



