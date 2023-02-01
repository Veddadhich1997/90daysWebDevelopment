var user = {
    firstName : "Ved",
    lastName : "Dadhich",
    phoneNumber : 789456642,
    fb : true,
    courseList : [],
    getCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    }
}


console.log(user.getCourseCount());

user.getCourse("ReactJs");
user.getCourse("NodeJs");
console.log(user.getCourseCount());
