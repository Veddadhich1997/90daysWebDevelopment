var nam = "Ved";
console.log("line 3",nam);

function sayName(){
    var nam ="Mr V";
    console.log("line 6",nam);
    
    sayNam();
    function sayNam(){
        console.log("line 9",nam);
    }
}

sayName();