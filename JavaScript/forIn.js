var user = {
    firstName : "Ved",
    lastName : "Dadhich",
    phoneNumber : 789456642,
    fb : true
}


for(const e in user){
    console.log(`key is ${e} and value is ${user[e]}`);
}