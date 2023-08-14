// var carinfo = {make:"Toyota",year:1996,model:"Camry"}
// console.log(carinfo["make"])
// for (key in carinfo) {
//     console.log(carinfo[key]);
// }


// var simple = {
//     prop: "Hello",
//     myMethod: function(){
//         console.log("The My method was called")
//     }

// }


var myObj = {
    name: "Jose",
    greet: function(){
        console.log("Hello" + this.name)
    }
}

myObj['name']
myObj.greet