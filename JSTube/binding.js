const ved = {
    firstName: "Ved",
    lastName: "Dadhich",
    role: "admin",
    coruseCount: 3,
    getInfo: function(){
        console.log(`
        Your First name is ${this.firstName}
        Your Last name is ${this.lastName}
        Your role is ${this.role}
        Your are enrolled in ${this.coruseCount} courses
        `)
    }
}


const rahul = {
    firstName: "Rahul",
    lastName: "Singh",
    role: "subadmin",
    coruseCount: 3,
}


ved.getInfo.bind(rahul)();
ved.getInfo.call(rahul);