let number = document.getElementById("div1");
let number1 = document.getElementById("div2");
let number2 = document.getElementById("div3");

let n1 = document.querySelector("#input");

const call = document.querySelector("#called");
const call1 = document.querySelector("#called1");
const call2 = document.querySelector("#called2");

let button = document.querySelector("#buttons");
let btn = document.querySelectorAll("#btn");

//Adding random numbers  


setInterval(() => {
let random = Math.floor(Math.random()*100);
 number.innerText = ''+ random;

let random1 = Math.floor(Math.random()*100);
    number1.innerText = '' + random1;
   
let random2 = Math.floor(Math.random()*100);
   number2.innerHTML = '' + random2;
},5000);



call.addEventListener('click',()=>{
input.value += number.innerText;
console.log(input.value);
});


call1.addEventListener('click',function(){
input.value += number1.innerText;
console.log(input.value);    
});


call2.addEventListener('click',function(){
input.value += number2.innerText;
console.log(input.value);
});

button.addEventListener('click',function(){
    input.value= eval(input.value);
    console.log(input.value);
});