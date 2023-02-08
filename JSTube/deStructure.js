// const myArray = ["ved", 10, "dadhich"];
// var name = myArray[0];
// var courseCount = myArray[1];
// var lastName = myArray[2];

// const [name,courseCount,lastName] = myArray;
// console.log(courseCount);

const myObject = {
    firstName: "ved",
    courseCount: 10,
    lastName: "dadhich"
};

// console.log(myObject.firstName);
const { firstName, courseCount, lastName } = myObject;
console.log(lastName); 