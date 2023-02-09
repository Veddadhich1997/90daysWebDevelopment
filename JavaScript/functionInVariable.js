// function user(name,role){
//     switch(role){
//         case "admin":
//             return `Hello ${name} you are ${role}`
//             break;

//         case "subadmin":
//             return `Hello ${name} you are ${role}`
//             break;

//         default:
//             return `Please signUp first`
//             break;
//     }
// }

// var value = user("ved");
// console.log(value);



var user = function (name,role){
    switch(role){
        case "admin":
            return `Hello ${name} you are ${role}`
            break;

        case "subadmin":
            return `Hello ${name} you are ${role}`
            break;

        default:
            return `Please signUp first`
            break;
    }
}

var value = user("ved");
console.log(value);