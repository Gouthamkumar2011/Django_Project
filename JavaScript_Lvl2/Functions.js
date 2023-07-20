// function helloYou(name){
//     console.log("hello "+ name);
// }
 
// function timesfive(numinput){
//     var result = numinput*5
//     return result
// }

var v = "GLOBAL V"
var stuff = "Global Stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff inside func";    
    console.log(stuff);
}

fun()
console.log(stuff)