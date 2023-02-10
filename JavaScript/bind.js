var user1 = {
    firstName: "Ved",
    lastName: "Dadhich",
    sumOne: function(){
        console.log("Hello Ved");
    }
}

var user2 = {
    firstName: "rock",
    lastName: "singh"
}

var x = user1.sumOne.bind(user2);
x();
user1.sumOne.bind(user2)();

var y = user1.sumOne.call(user2);
