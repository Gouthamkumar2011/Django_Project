var headone = document.querySelector("#one")
var headtwo = document.querySelector("#two")
var headthree = document.querySelector("#three")

headone.addEventListener('mouseover',function(){
    headone.textContent = "Mouse Currently over";
    headone.style.color = 'red';
})


headone.addEventListener('mouseout',function(){
    headone.textContent = "Hover over me";
    headone.style.color = 'black';
})

headtwo.addEventListener("click",function(){
    headtwo.textContent = "Clicked ON";
    headtwo.style.color = 'blue';
})

headthree.addEventListener("dblclick",function(){
    headthree.textContent = "I was double clicked";
    headthree.style.color = 'red';
})