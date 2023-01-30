// // hoisting
// // global context
// // execution context

// execution context- variable Object,scope chaining,this
// function declarations are scanned and made available
// variable declarations are scanned and made undefined
bigTip(20);

function bigTip(a){
    var bill = parseInt(a);
    console.log(bill+10);
}



bigTipper(40);
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill+10);
}



