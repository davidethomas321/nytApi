/* 
What is scope?

JS has both LOCAL nad GLOBAL scope
*/

//var x=12;

//function scope(){
    //var x = 33;
    //console.log(x);
}
//scope(); //logs 33
//console.log(x); //logs 12

/*
//example 2
//var x = 12;

//function scope(){
    var y = 33;
    console.log(x);
}

scope(); //33
console.log(x); //33
*/

/*
//example 3:
var x = 1;

function scope (){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x);
    }
    scopeInner();
    console.log(x);
}
scope();
console.log(x);
*/

//example 4 constrasts with 3:
var x =12;

function scope(){
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);

//example 5 contrasts with 4:
var x = 12;

function scope(){
    var x = 33
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 -> var doesn't obey 'block' scope
}

scope();
console.log(x);