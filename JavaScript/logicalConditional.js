var faceBook = true;
var google = false;
var twitter = false;

if(faceBook||google||twitter){
    console.log("Welcome Dear User");
}

else{
    console.log("Please Sign Up and then come back");
}

if(faceBook && google && twitter){
    console.log("Welcome Dear User");
}

else{
    console.log("Please Sign Up and then come back");
}