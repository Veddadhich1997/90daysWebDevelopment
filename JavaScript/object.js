// var user = {
//     firstName : "Ved",
//     lastName : "Dadhich",
//     phoneNumber : 789456642,
//     fb : true
// }

// console.log(user);
// console.table(user);
// console.log(user.firstName);
// console.log(user["lastName"]);


// methods
var user = {
    firstName : "Ved",
    lastName : "Dadhich",
    phoneNumber: 79289658,
    fb: true,
    courseList: [],
    getCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    }
}

user.getCourse("reactjs");
user.getCourse("angular");
console.log(user.courseList);

console.log(user.getCourseCount());