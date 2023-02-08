const one = ()=>{
   return "I am one";
}

// const two = ()=>{
//     setTimeout(()=>{
//         return "I am two";
// },3000);
    
// }


const two = ()=>{
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       resolve("I am two");
        },3000);
   })
}

const three = ()=>{
    return "I am three";
}

const callMe = async () => {
    let valOne = one();
    console.log(valOne);
    let valTwo =await two();
    console.log(valTwo);
    let valThree = three();
    console.log(valThree);
}

callMe();