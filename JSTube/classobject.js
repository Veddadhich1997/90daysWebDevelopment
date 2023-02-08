// import User from "./classjs"; 
const User = require("./classjs.js");
const ved = new User("Ved","ved@gmail.com");
console.log(ved.getInfo());
ved.enrollCourse("reactJs");
let courses = ved.getCourseList();
courses.forEach((value)=>(console.log(value)));
