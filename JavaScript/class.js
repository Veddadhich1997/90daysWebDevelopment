const one = ()=>{
    return "I am one";
}

const two = ()=>{
    setTimeout(()=>{
        return "I am timeOut";
    },3000)
    return "I am two";
}

const three = ()=>{
    return "I am three";
}

var x= one();
console.log(x);
var y = two();
console.log(y);
var z = three();
console.log(z);

