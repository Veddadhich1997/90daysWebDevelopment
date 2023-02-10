var myMap = new Map();

myMap.set(3,"Ved");
myMap.set(2,"Dadhich");
myMap.set(1,23458);


console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }

// for(let [key,value] of myMap){
//     console.log(`key is ${key} and value is ${value}`);
// }

myMap.forEach((value)=>{
    console.log(`value is ${value}`);
})

myMap.forEach((value,key)=>{
    console.log(`value is ${value} and key is ${key}`);
})