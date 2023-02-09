// for(let i=0;i<10;i++){
//     console.log(i);
// }

var states = new Array(
    "Rajasthan",
    "Haryana",
    "Punjab",
    1997,
    "UP"
    );

    for(let i =0;i<=states.length;i++){
        if(typeof states[i]!=="string") break;
        console.log(states[i]);
    }