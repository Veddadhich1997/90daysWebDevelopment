// console.log(this);

// var obj ={
//     fb : "facebook",
//     name : "ved",
//     courseList : 4,
//     getCourseCount : function(){
//         console.log("line7",this);
//         function sayHello(){
//             console.log("Hello");
//             console.log("line 11",this);
//         }
//         sayHello();
//     }
// }

// obj.getCourseCount();


// var city = ["Jhunjhunu","Jaipur","Sikar","Noida",10];
// var city = new Array();
// console.log(city.length);
// console.log(city);
// console.log(city[3]);
// city[2]="Churu";
// console.log(city);
// city.pop();
// console.log(city);
// city.push("Churu");
// console.log(city);
// city.shift();
// console.log(city);
// city.unshift("Churu");
// console.log(city);
// console.log(city.indexOf("Sikar"));
// console.log(Array.from("VedDadhich"));

// city.fill("churu",1,3);
// console.log(city);
// city.fill("churu",1);
// console.log(city);

// city.filter((n)=>(n==="string"));
// console.log(city);

// var city = ["Jhunjhunu","Jaipur","Sikar","Noida",10];
// console.log(city.every((e)=>(e==="string")));
// var cit = ["Jhunjhunu","Jaipur","Sikar","Noida"];
// cit.every((e)=>(e==="string"));
// console.log(cit);

// console.log(cit.slice(1,3));

// cit.splice(1,2,"ved");
// console.log(cit);

// var city = {
//     city1 : "Jhunjhunu",
//     city2 : "Jaipur",
//     city3 : "Sikar",
//     city4 : "Delhi",
//     meth : function(){
//         console.log("Hello");
//     }
// }

// // console.log(city);
// // console.log(city.city1);
// // console.log(city["city4"]);
// console.log(city.meth());

// for(i=0;i<10;i++){
//     console.log(i);
// }

// let x = 0;
// while(x<10){
//     console.log(x);
//     x++;
// }
// let x=0;
// do{
//     console.log(x);
//     x++;
// }
// while(x<10);

// let arr = [1,2,4,5,6];
// // arr.forEach((i)=>(console.log(i)));

// for(const n of arr){
//     console.log(n);
// }

var symbols = {
    yt : "youtube",
    fb : "facebook",
    ig : "instagram",
    tw : "twitter"
}

for(const n in symbols){
    console.log(n);
}