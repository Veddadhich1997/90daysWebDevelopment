var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`CourseCount is:${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`your first name is:${this.firstName}`);
}

var ved = new User("Ved",2);
// console.log(ved);
if(ved.hasOwnProperty("firstName")){
ved.getFirstName();
}

var sam = new User("sam",2);
// console.log(sam);