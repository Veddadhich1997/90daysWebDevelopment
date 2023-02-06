var User = function(name,courseCount){
    this.name = name;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`course count is ${this.courseCount}`);
    };
};

User.prototype.getName = function(){
    console.log(`Your Name is: ${this.name}`);
};

var ved = new User("Ved",2);
ved.getCourseCount();
ved.getName();
// console.log(ved);

var om = new User("Om",4);
om.getCourseCount();
om.getName();
// console.log(om);