var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`CourseCount is:${this.courseCount}`);
    };
};

var ved = new User("Ved",2);
console.log(ved);

var sam = new User("sam",2);
console.log(sam);