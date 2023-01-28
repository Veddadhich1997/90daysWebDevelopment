function getUserRole(name,role){
    switch(role){
        case "admin":
            return "Hello Admin.."
            break;
        case "subadmin":
            return "Hello Subadmin.."
            break;
        case "user":
            return "Hello user.."
            break;
        default:
            return "Please signup first";
            break;
    }
}


console.log(getUserRole("Ved"));