var firstname = prompt("First Name Please: ")
var lastname = prompt("Last Name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petname = prompt("What is your petname? ")
alert("Thank you so much for the information")

//LOGIC

//Four Conditions
var nameCond = null
var ageCond = null
var heightCond = null
var petCond = null

//Name Condition
if (firstname[0] == lastname[0]){
    nameCond = true;
}else{
    nameCond = false;
}

//Age Condition

if(age>20 && age<30){
    ageCond = true;
}else{
    ageCond = false;
}

//Height Cond

if (height>=170){
    heightCond = true;
}else{
    heightCond=false;
}

//Pet name

if (petname[petname.length-1]==="y"){
    petCond = true;
}else{
    petCond= false;
}

if (nameCond && ageCond && heightCond && petCond){
    console.log("Welcome Spy!!");
}else{
    console.log("Nothing to see here");
}

