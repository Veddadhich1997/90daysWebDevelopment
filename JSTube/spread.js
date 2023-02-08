var returnedValue = Math.min(10,8,15,14,6);
console.log(returnedValue);

var myObject = {};
console.log(Object.assign(myObject,{a:1,b:2,c:3},{d:4,e:5}));

function sumOne(a,b,c,d){
    var sum = a+b+c+d;
    console.log(sum);
}

var arr = [4,5,5,6];
sumOne(1,2,4,5);
sumOne(...arr);



function sumOne(...args){
    // console.log(args);
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return sum;
}

console.log(sumOne(5,4,1,6,4));


function sumOne(a,b,...args){
    // console.log(args);
    let sum = 0;
    let multi = a*b;
    for(const arg of args){
        sum += arg;
    }
    return [sum,multi];
}

console.log(sumOne(5,4,1,6,4));