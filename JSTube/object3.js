var User = function(name,courseCount){
    this.name = name;
    this.courseCount = courseCount;
    getCourseCount = function(){
        console.log(`course count is ${this.getCourseCount}`);
    };
};

var ved = new User("Ved",2);
console.log(ved);

var om = new User("Om",4);
console.log(om);