var myMaps = new Map();
myMaps.set(1,"One");
myMaps.set(2,"two");
myMaps.set(3,"three");
myMaps.set(4,"four");

console.log(myMaps);

for(let key of myMaps.keys()){
    console.log(`key is:${key}`);
}

for(let value of myMaps.values()){
    console.log(`value is:${value}`);
}

for(let [k,v] of myMaps){
    console.log(`key is:${k} and value is:${v}`);
}


myMaps.forEach((value)=>(console.log(value)));
myMaps.forEach((v,k)=>(console.log(`key is ${k} and value is ${v}`)));